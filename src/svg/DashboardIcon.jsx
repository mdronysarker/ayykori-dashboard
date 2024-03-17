import React from "react";

export default function DashboardIcon({ isHovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M0.75 7.5C0.551088 7.5 0.360322 7.42098 0.21967 7.28033C0.0790178 7.13967 0 6.94891 0 6.75V0.751495C0 0.552583 0.0790178 0.361818 0.21967 0.221165C0.360322 0.0805131 0.551088 0.00149536 0.75 0.00149536H6.75C6.94891 0.00149536 7.13968 0.0805131 7.28033 0.221165C7.42098 0.361818 7.5 0.552583 7.5 0.751495V6.75C7.5 6.94891 7.42098 7.13967 7.28033 7.28033C7.13968 7.42098 6.94891 7.5 6.75 7.5H0.75ZM11.25 7.5C11.0511 7.5 10.8603 7.42098 10.7197 7.28033C10.579 7.13967 10.5 6.94891 10.5 6.75V0.751495C10.5 0.552583 10.579 0.361818 10.7197 0.221165C10.8603 0.0805131 11.0511 0.00149536 11.25 0.00149536H17.2485C17.4474 0.00149536 17.6382 0.0805131 17.7788 0.221165C17.9195 0.361818 17.9985 0.552583 17.9985 0.751495V6.75C17.9985 6.94891 17.9195 7.13967 17.7788 7.28033C17.6382 7.42098 17.4474 7.5 17.2485 7.5H11.25ZM0.75 18C0.551088 18 0.360322 17.921 0.21967 17.7803C0.0790178 17.6397 0 17.4489 0 17.25V11.25C0 11.0511 0.0790178 10.8603 0.21967 10.7197C0.360322 10.579 0.551088 10.5 0.75 10.5H6.75C6.94891 10.5 7.13968 10.579 7.28033 10.7197C7.42098 10.8603 7.5 11.0511 7.5 11.25V17.25C7.5 17.4489 7.42098 17.6397 7.28033 17.7803C7.13968 17.921 6.94891 18 6.75 18H0.75ZM11.25 18C11.0511 18 10.8603 17.921 10.7197 17.7803C10.579 17.6397 10.5 17.4489 10.5 17.25V11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5H17.2485C17.4474 10.5 17.6382 10.579 17.7788 10.7197C17.9195 10.8603 17.9985 11.0511 17.9985 11.25V17.25C17.9985 17.4489 17.9195 17.6397 17.7788 17.7803C17.6382 17.921 17.4474 18 17.2485 18H11.25Z"
        fill={isHovered ? "white" : "#7B7B7B"}
      />
    </svg>
  );
}