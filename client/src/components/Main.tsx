import React from "react";

export const Main: React.FC = () => {
  return (
    <div className="container px-2 mx-auto my-5">
      <h1 className="text-lg font-bold leading-6 text-gray-900">
        Don't loose it then regret it!
      </h1>
      <div className="text-gray-700">
        <h1 className="text-lg">
          Automatically backup your Discover Weekly playlists in <b>3</b> easy
          steps:
        </h1>
        <ul>
          <li className="ml-4 list-disc">
            Authenticate with your Spotify account
          </li>
          <li className="ml-4 list-disc">Choose a plan</li>
          <li className="ml-4 list-disc">Chill, we'll do the rest</li>
        </ul>
      </div>
    </div>
  );
};
