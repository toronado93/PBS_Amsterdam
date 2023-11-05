/* eslint-disable react/prop-types */
export const IconButton = ({ info, src, imgclass }) => {
  return (
    <button
      type="button"
      className="relative rounded-full p-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">{info}</span>
      {/* SVG will comes here */}
      <img className={imgclass} src={src}></img>
    </button>
  );
};
