import { Spinner } from "flowbite-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner size="xl" color="primary" aria-label="Loading..." />
    </div>
  );
};

export default LoadingSpinner;
