// AttendanceButton.js
import React from "react";

const LoadingButton = ({ isLoading, onClick, className }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        disabled={isLoading}
        className={`${className} ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <span className="flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Sending message......
          </span>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};

export default LoadingButton;
