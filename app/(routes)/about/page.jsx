import * as motion from "motion/react-client";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      AboutPage
    </motion.div>
  );
}
