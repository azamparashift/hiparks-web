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

// import React, { useState } from "react";

// const LocationDot = ({
//   x = 100, // Default fallback
//   y = 100, // Default fallback
//   label = "Unknown",
//   color = "#22B148", // Default color from dynamic data
//   onClick,
//   onMouseEnter,
//   onMouseLeave,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = (e) => {
//     setIsHovered(true);
//     onMouseEnter?.(e);
//   };

//   const handleMouseLeave = (e) => {
//     setIsHovered(false);
//     onMouseLeave?.(e);
//   };

//   return (
//     <>
//       <circle
//         cx={x}
//         cy={y}
//         r={isHovered ? 2 : 1.1}
//         fill={color}
//         stroke="#fff"
//         strokeWidth="0.3"
//         className="transition-all duration-500 ease-in-out cursor-pointer"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//       />
//       <text
//         x={x - 5}
//         y={y + 5}
//         className="cursor-pointer"
//         fill="#fff"
//         fontSize="3"
//         fontWeight="500"
//         textAnchor="start"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//       >
//         {label}
//       </text>
//     </>
//   );
// };

// export default LocationDot;

import React, { useState } from "react";

// const LocationDot = ({
//   x = 100,
//   y = 100,
//   label = "Unknown",
//   color = "#FF0000", // Changed default to bright red for testing
//   onClick,
//   onMouseEnter,
//   onMouseLeave,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = (e) => {
//     setIsHovered(true);
//     onMouseEnter?.(e);
//   };

//   const handleMouseLeave = (e) => {
//     setIsHovered(false);
//     onMouseLeave?.(e);
//   };

//   return (
//     <g>
//       <circle
//         cx={x}
//         cy={y}
//         r={isHovered ? 3 : 2} // Larger radius
//         fill={color}
//         stroke="#fff"
//         strokeWidth="1" // Thicker stroke
//         vectorEffect="non-scaling-stroke" // Prevent stroke scaling
//         className="transition-all duration-300 ease-in-out cursor-pointer"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//       />
//       <text
//         x={x - 8} // Move text right to avoid overlap
//         y={y + 8}
//         className="cursor-pointer"
//         fill="#fff"
//         fontSize="4" // Larger text
//         fontWeight="500"
//         textAnchor="start"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//       >
//         {label}
//       </text>
//     </g>
//   );
// };

// export default LocationDot;
const LocationDot = ({
  x = 100,
  y = 100,
  label = "Unknown",
  color = "red",
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  return (
    <g>
      <defs>
        <filter id="text-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="1"
            dy="1"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.8"
          />
        </filter>
      </defs>

      <circle
        cx={x}
        cy={y}
        r={isHovered ? 2 : 1.6}
        fill={color}
        stroke="#fff"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        className="transition-all duration-300 ease-in-out cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      />

      <text
        x={x}
        y={y + 3.5}
        className="cursor-pointer"
        fill="#fff"
        fontSize="3"
        fontWeight="500"
        textAnchor="middle"
        dominantBaseline="hanging"
        filter="url(#text-shadow)" // ✅ Apply the filter here
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {label}
      </text>
    </g>
  );
};
export default LocationDot;
