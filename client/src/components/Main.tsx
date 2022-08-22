import React from "react";

export const Main: React.FC = () => {
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-lg font-bold leading-6 text-gray-900">
        Don't loose it then regret it!
      </h1>
      <div className="text-gray-700">
        <h1 className="text-lg">
          Automatically save your Discover Weekly playlists in four easy steps:
        </h1>
        <ul>
          <li className="list-disc ml-4">Create your account</li>
          <li className="list-disc ml-4">Connect your Spotify account</li>
          <li className="list-disc ml-4">Choose your plan</li>
          <li className="list-disc ml-4">Chill, we'll do the rest</li>
        </ul>
      </div>
    </div>
  );
};
