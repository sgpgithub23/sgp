import React from "react";

function BookOpen(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        stroke={props.strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 3.5h6a4 4 0 014 4v14a3 3 0 00-3-3H2v-15z"
      ></path>
      <path
        stroke={props.strokeColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 3.5h-6a4 4 0 00-4 4v14a3 3 0 013-3h7v-15z"
      ></path>
    </svg>
  );
}

export default BookOpen;