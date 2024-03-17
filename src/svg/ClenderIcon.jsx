import React from "react";

export default function ClenderIcon({ isHovered2 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M0 13.6C0 14.96 1.04 16 2.4 16H13.6C14.96 16 16 14.96 16 13.6V7.2H0V13.6ZM13.6 1.6H12V0.8C12 0.32 11.68 0 11.2 0C10.72 0 10.4 0.32 10.4 0.8V1.6H5.6V0.8C5.6 0.32 5.28 0 4.8 0C4.32 0 4 0.32 4 0.8V1.6H2.4C1.04 1.6 0 2.64 0 4V5.6H16V4C16 2.64 14.96 1.6 13.6 1.6Z"
        fill={isHovered2 ? "white" : "#7B7B7B"}
      />
    </svg>
  );
}
