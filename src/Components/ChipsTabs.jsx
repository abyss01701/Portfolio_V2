import { motion } from "framer-motion";

export default function ChipTabs({ tabs, selected, setSelected }) {
  return (
    <div className="flex justify-center mb-6">
      {tabs.map((tab, index) => (
        <Chip key={index} text={tab} selected={selected === tab} setSelected={setSelected} />
      ))}
    </div>
  );
}

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-300 hover:text-gray-200 hover:bg-gray-700"
      }   text-sm sm:text-base md:text-lg lg:text-xl transition-colors px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-2 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 w-full bg-gradient-to-r from-[#0a5de2] to-[#01ccf5] text-white rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
