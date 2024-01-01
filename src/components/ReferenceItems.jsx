import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function ReferenceItems({ src, name }) {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      className="w-48 h-48 transition ease-in-out delay-150  border border-gray-800 hover:border-red-600  rounded-2xl overflow-hidden cursor-pointer"
    >
      <motion.img
        whileTap={{ scale: 1.1 }}
        className="w-full h-full object-contain object-center  "
        src={src}
        alt={name}
      ></motion.img>
    </motion.div>
  );
}

export default ReferenceItems;
