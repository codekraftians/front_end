import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserDataProfile from "../components/UserDataProfile";

function AllUserData() {
  const [activeComponent, setActiveComponent] = useState("userDataProfile");


  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "userDataProfile":
        return <UserDataProfile />;
      case "myEvents":
        return <h1 className="text-xl font-bold">My events</h1>;
      case "attendedEvents":
        return <h1 className="text-xl font-bold">Events I attended</h1>;
      case "futureEvents":
        return (
          <h1 className="text-xl font-bold">Events I will attend</h1>
        );
      case "interestedEvents":
        return <h1 className="text-xl font-bold">Events I'm interested in</h1>;
      default:
        return <h1 className="text-xl font-bold">Select an option</h1>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen">
       
        <div className="flex justify-center items-center bg-base-200 w-full p-4">
          <ul className="menu flex flex-row md:flex-row gap-4 bg-base-100 rounded-box shadow-md p-4">
            <li>
              <button
                className={`font-bold ${
                  activeComponent === "userDataProfile" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("userDataProfile")}
              >
                User Data Profile
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "myEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("myEvents")}
              >
                Mis eventos
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "attendedEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("attendedEvents")}
              >
                Events I attended
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "futureEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("futureEvents")}
              >
                Events I will attend
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "interestedEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("interestedEvents")}
              >
                Events I'm interested in
              </button>
            </li>
          </ul>
        </div>

      
        <div className="flex-grow p-4">{renderActiveComponent()}</div>
      </div>
      <Footer />
    </>
  );
}

export default AllUserData;