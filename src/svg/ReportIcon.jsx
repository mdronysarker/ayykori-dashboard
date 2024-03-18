import React from "react";

export default function ReportIcon({ isHovered2 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.1 0V18C3.51 17.55 0 13.68 0 9C0 4.32 3.51 0.45 8.1 0ZM9.9 0V8.1H18C17.55 3.78 14.22 0.45 9.9 0ZM9.9 9.9V18C14.13 17.55 17.55 14.22 18 9.9H9.9Z"
        fill={isHovered2 ? "white" : "#7B7B7B"}
      />
    </svg>
  );
}
