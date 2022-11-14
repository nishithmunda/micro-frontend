import React from "react";

export const VideoIcon = ({ style }: Prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      viewBox="0 0 256 256"
      style={style}
    >
      <rect width="256" height="256" fill="none"></rect>
      <rect
        x="32"
        y="48"
        width="192"
        height="144"
        rx="16"
        transform="translate(256 240) rotate(180)"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></rect>
      <line
        x1="160"
        y1="224"
        x2="96"
        y2="224"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <polygon
        points="160 120 112 88 112 152 160 120"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polygon>
    </svg>
  );
};

interface Prop {
  style ?: React.CSSProperties;
}
