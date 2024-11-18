import React from 'react';
import { LoaderIcon } from "lucide-react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <LoaderIcon className="animate-spin" />
    </div>
  );
};

export default LoadingSpinner;