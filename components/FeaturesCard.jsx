import React, { useRef } from 'react';

export const FeaturesCard = ({title, description, icon}) => {
  
  const IconRef = useRef(null)


  return (
    <li className="w-full px-4 py-4 my-3 bg-accent rounded-lg shadow-lg hover:scale-105 duration-300 relative">
      <div>
        <div className="flex items-center justify-center absolute left-[42%] -top-7 w-12 h-12 mx-auto text-black bg-indigo-500 rounded-md">
        {React.createElement(icon, { ref: IconRef, className: 'w-6 h-6 text-white', 'aria-hidden': 'true' })}
        </div>
      </div>
      <h3 className="py-4 text-2xl font-bold  sm:text-xl">
        {title}
      </h3>
      <p className="py-4 text-sm ">
        {description}
      </p>
    </li>
  );
}
