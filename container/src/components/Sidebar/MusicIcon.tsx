import React from "react";

export const MusicIcon = ({ style }: Prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      viewBox="0 0 256 256"
      style={style}
    >
      <rect width="256" height="256" fill="none"></rect>
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></rect>
      <line
        x1="92"
        y1="216"
        x2="92"
        y2="144"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="164"
        y1="216"
        x2="164"
        y2="144"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <polyline
        points="184 40 184 144 144 144 144 40"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
      <polyline
        points="112 40 112 144 72 144 72 40"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
    </svg>
  );
};

interface Prop {
  style?: React.CSSProperties;
}
