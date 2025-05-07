import { useState } from 'react';
import axios from 'axios';


const CLOUD_NAME = 'dbhpzavfx'; // Tu Cloud Name que aparece en la URL de Cloudinary cuando se configura el proyecto
const UPLOAD_PRESET = 'techsafespace'; // Tu Upload Preset que se configura en Cloudinary para permitir cargas sin autenticación

// Hook para subir los archivos a una carpeta de Cloudinary
// solo se pueden subir archivos no superiores a 10MB
export const useCloudinaryUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [cloudinaryResponse, setCloudinaryResponse] = useState(null);
  const [error, setError] = useState(null);

    // Función para generar un ID único para la carga de archivos
  const generateUniqueUploadId = () => {
    return `uqid-${Date.now()}`;
  };

    // Función para subir el archivo a Cloudinary
  const uploadFile = async (file) => {
    if (!file) {
      setError('Debes seleccionar un archivo.');
      return;
    }

    // generar un ID único para la carga y dividir el archivo en fragmentos
    const uniqueUploadId = generateUniqueUploadId();
    const chunkSize = 5 * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0;

    setUploading(true);
    setUploadComplete(false);
    setError(null);

    // Función para subir un fragmento del archivo
    const uploadChunk = async (start, end) => {
      const formData = new FormData();
      formData.append('file', file.slice(start, end));
      formData.append('upload_preset', UPLOAD_PRESET);

      const contentRange = `bytes ${start}-${end - 1}/${file.size}`;

      try {
        // se puede utilizar fech o axios para subir el archivo
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
          formData,
          {
            headers: {
              'X-Unique-Upload-Id': uniqueUploadId,
              'Content-Range': contentRange, 
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
          }
        );

        if (!response.data || response.status !== 200) {
          throw new Error('Error al subir un fragmento.');
        }

        currentChunk++;

        // Si hay más fragmentos, subir el siguiente
        if (currentChunk < totalChunks) {
          const nextStart = currentChunk * chunkSize;
          const nextEnd = Math.min(nextStart + chunkSize, file.size);
          uploadChunk(nextStart, nextEnd);
        } else {
            // Si todos los fragmentos se han subido, marcar la carga como completa
          setUploadComplete(true);
          setUploading(false);
          // Respuesta json de Cloudinary con la información del archivo subido
          const result = await response.data;
          console.log('Upload complete:', result);
          setCloudinaryResponse(result);
        }
      } catch (err) {
        console.error(err);
        setError('Error durante la carga.');
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
    setCloudinaryResponse
  };
};
