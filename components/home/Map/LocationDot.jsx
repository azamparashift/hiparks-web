// export default function LocationDot({
//   label,
//   x,
//   y,
//   color = "#fff", // default color if not passed
//   onMouseEnter,
//   onMouseLeave,
//   onClick,
// }) {
//   return (
//     <>
//       <circle
//         cx={x}
//         cy={y}
//         r="1.10"
//         fill={color} // ✅ use dynamic color
//         stroke="#fff"
//         strokeWidth="0.3"
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onMouseLeave}
//         className="cursor-pointer"
//         onClick={onClick}
//       />
//       <text
//         x={x - 5}
//         y={y + 5}
//         fill="#fff"
//         fontSize="3"
//         fontWeight="500"
//         textAnchor="start"
//       >
//         {label}
//       </text>
//     </>
//   );
// }

import React, { useState } from "react";

const Hotspot = ({
  x,
  y,
  label,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  return (
    <>
      <circle
        cx={x}
        cy={y}
        r={isHovered ? 2 : 1.1}
        fill={color}
        stroke="#fff"
        strokeWidth="0.3"
        className="transition-all duration-500 ease-in-out cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      />
      <text
        x={x - 5}
        y={y + 5}
        className="cursor-pointer"
        fill="#fff"
        fontSize="3"
        fontWeight="500"
        textAnchor="start"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {label}
      </text>
    </>
  );
};

export default Hotspot;
