import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Connect in Safe Spaces, Innovate Together
          </h1>
          <h2 className="py-6 text-xl">
            Discover and create tech events where everyone belongs. Your
            platform for meaningful connections in the tech community.
          </h2>
          <Link to="/explore">
            <button className="btn btn-primary mr-4">Find events</button>
          </Link>
          <Link to="/events/create">
            <button className="btn btn-secondary">Create event</button>
          </Link>
          <p className="py-6">
            Join thousands of tech enthusiasts building a more inclusive and
            collaborative tech community
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
