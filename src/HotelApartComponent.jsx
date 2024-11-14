import React from 'react';

// import images from assets folder
import Apartment1 from './assets/Apartment1.jpg';
import Apartment2 from './assets/Apartment2.jpg'

const HotelApartComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-50 p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-6 max-w-6xl mx-auto">
      
      {/* Left Part with Image */}
      <div className="relative w-full md:w-1/2 hidden md:block">
        <img 
          src={Apartment1} 
          alt="Hotel Apartment" 
          className="rounded-lg shadow-md w-full"
        />
        </div>
      
      {/* Right side part */}

      {/* Main Headings */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-blue-800">
        <h2 className="text-xl font-semibold">P. 910 - B+G+9</h2>
        <p className="text-md mb-4">Hotel Apartment</p>
         
         {/* Description & Image Section */}
        <div className="text-sm space-y-4 ">

          {/* Image 2 section */}
        <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={Apartment2} 
          alt="Second View of Hotel Apartment" 
          className="rounded-lg shadow-md w-full max-w-md"
        />
      </div>
          <p><span className="font-bold">Location:</span> Plot No: SC-B-014 @Studio City, Dubai</p>
          <p><span className="font-bold">Owner / Client:</span> M/s. Vice Versa Facilities management Services L.L.C</p>
          <p><span className="font-bold">Consultant:</span> Edmac Engineering Consultant</p>
          <p><span className="font-bold">Contractor:</span> K S S Building Contracting L.L.C.</p>
          <p><span className="font-bold">Project Status:</span> Completed</p>
        </div>
      </div>
    </div>
  );
};

export default HotelApartComponent;
