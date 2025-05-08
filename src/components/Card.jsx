import React from "react";
import { Link } from "react-router-dom";

const Card = ({ event }) => {
  const isNew = (createdAt) => {
    if (!createdAt) return false;
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffInDays = (now - createdDate) / (1000 * 60 * 60 * 24);
    return diffInDays < 5;
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <figure className="relative">
        <img
          src={
            event.eventsImageUrl || "https://placehold.co/600x400?text=No+Image"
          }
          alt={event.title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-2 right-2">
          {event.eventType === "ONLINE" && (
            <div className="badge badge-primary">Online</div>
          )}
          {event.eventType === "IN_PERSON" && (
            <div className="badge badge-secondary">In Person</div>
          )}
        </div>
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title font-bold">
          {event.title}
          {isNew(event.createdAt) && (
            <div className="badge badge-accent ml-2">NEW</div>
          )}
        </h2>

        <div className="mt-3 space-y-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm text-gray-600">
              {event.date || event.eventDate}
            </span>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-gray-600">
              {event.time || event.eventTime}
            </span>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm text-gray-600">{event.location}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/evento/${event.id}`} className="w-full">
            <button className="btn btn-primary w-full">Join!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
