import React from 'react';

const Card = ({title, image, description, isNew}) => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-sm min-h-[250px] md:min-h-[25vh] lg:min-h-[30vh] hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          {title}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-base">Join!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
