export const Header: React.FC = () => {
  return (
    <div className="container flex mx-auto justify-between align-middle my-5">
      <h1 className="capitalize self-center">Discover weekly saver</h1>
      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        Start
      </button>
    </div>
  );
};
