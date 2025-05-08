import { useState } from "react";
import axios from "axios";

const CLOUD_NAME = "dbhpzavfx";
const UPLOAD_PRESET = "techsafespace";

export const useCloudinaryUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [cloudinaryResponse, setCloudinaryResponse] = useState(null);
  const [error, setError] = useState(null);

  const generateUniqueUploadId = () => {
    return `uqid-${Date.now()}`;
  };

  const uploadFile = async (file) => {
    if (!file) {
      setError("Debes seleccionar un archivo.");
      return;
    }

    const uniqueUploadId = generateUniqueUploadId();
    const chunkSize = 5 * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0;

    setUploading(true);
    setUploadComplete(false);
    setError(null);

    const uploadChunk = async (start, end) => {
      const formData = new FormData();
      formData.append("file", file.slice(start, end));
      formData.append("upload_preset", UPLOAD_PRESET);

      const contentRange = `bytes ${start}-${end - 1}/${file.size}`;

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
          formData,
          {
            headers: {
              "X-Unique-Upload-Id": uniqueUploadId,
              "Content-Range": contentRange,
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
          }
        );

        if (!response.data || response.status !== 200) {
          throw new Error("Error al subir un fragmento.");
        }

        currentChunk++;

        if (currentChunk < totalChunks) {
          const nextStart = currentChunk * chunkSize;
          const nextEnd = Math.min(nextStart + chunkSize, file.size);
          uploadChunk(nextStart, nextEnd);
        } else {
          setUploadComplete(true);
          setUploading(false);

          const result = await response.data;
          console.log("Upload complete:", result);
          setCloudinaryResponse(result);
        }
      } catch (err) {
        console.error(err);
        setError("Error durante la carga.");
        setUploading(false);
        setCloudinaryResponse(null);
      }
    };

    uploadChunk(0, Math.min(chunkSize, file.size));
  };

  return {
    uploading,
    uploadComplete,
    cloudinaryResponse,
    error,
    setError,
    uploadFile,
    setCloudinaryResponse,
  };
};
