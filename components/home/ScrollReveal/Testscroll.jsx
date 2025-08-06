// "use client";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function TestScroll({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const scrollDuration = 2000;

//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   // Ensure video metadata is loaded
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       setVideoDuration(video.duration);
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () => {
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//     };
//   }, []);

//   // Use useCallback to memoize the update function
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) return;

//     const scrollY = window.scrollY;
//     const containerTop = container.offsetTop;
//     const relativeScroll = scrollY - containerTop;

//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const time = progress * videoDuration;

//     // Use a small threshold to avoid constant updates and potential jitter
//     // but without the large 0.05 value. A direct assignment is often best
//     // but this is a good balance.
//     if (Math.abs(video.currentTime - time) > 0.01) {
//       video.currentTime = time;
//       setCurrentTime(time);
//     }
//   }, [videoDuration]);

//   // Sync scroll to video using a passive scroll event and requestAnimationFrame
//   useEffect(() => {
//     const handleScroll = () => {
//       // Use requestAnimationFrame to ensure the video update happens on the next repaint,
//       // which is ideal for animations and visual updates.
//       window.requestAnimationFrame(updateVideoTime);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [updateVideoTime]);

//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   return (

//     <div
//       ref={containerRef}
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="relative sticky top-0 z-10 w-full h-screen px-8">
//         {/* Background Video */}
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 object-cover w-full h-full"
//           muted
//           playsInline
//           preload="auto"
//         />

//         {/* Left Text (positioned on top) */}
//         <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-white">
//           <div className="max-w-sm transition-opacity duration-500 ease-in-out">
//             {activeText && (
//               <div>
//                 <h2 className="text-2xl sm:text-8xl bw-b">
//                   {activeText.title}
//                 </h2>
//                 <p className="mt-2 text-base sm:text-lg">
//                   {activeText.subtitle}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef, useState, useCallback } from "react";   
import { motion, AnimatePresence } from "framer-motion";

export default function TestScroll({ videoSrc, timedTexts = [] }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const scrollDuration = 2000;

  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Ensure video metadata is loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Use useCallback to memoize the update function
  const updateVideoTime = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !videoDuration) return;

    const scrollY = window.scrollY;
    const containerTop = container.offsetTop;
    const relativeScroll = scrollY - containerTop;

    const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
    const progress = clampedScroll / scrollDuration;
    const time = progress * videoDuration;

    // Use a small threshold to avoid constant updates and potential jitter
    if (Math.abs(video.currentTime - time) > 0.01) {
      video.currentTime = time;
      setCurrentTime(time);
    }
  }, [videoDuration]);

  // Sync scroll to video using a passive scroll event and requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame to ensure the video update happens on the next repaint
      window.requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateVideoTime]);

  const activeText = timedTexts.find(
    (t) => currentTime >= t.start && currentTime <= t.end
  );

  // Framer Motion variants for the text animation
  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div
      ref={containerRef}
      style={{ height: `${scrollDuration + window.innerHeight}px` }}
    >
      <div className="sticky top-0 z-10 w-full h-screen ">
        {/* Background Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 object-cover w-full h-full"
          muted
          playsInline
          preload="auto"
        />

        {/* Animated Text Container */}
        <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-white">
          <AnimatePresence mode="wait">
            {activeText && (
              <motion.div
                key={activeText.title} // Unique key for AnimatePresence to detect change
                className="max-w-sm"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="text-2xl sm:text-8xl bw-b">
                  {activeText.title}
                </h2>
                <p className="mt-2 text-base sm:text-lg">
                  {activeText.subtitle}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
