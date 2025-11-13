import { motion, AnimatePresence } from "framer-motion";

export default function SlideDetail({ Info, index, setIndex }) {

  // Auto-slide every 5 seconds
  

  return (
    <div className="lanqdscape:bg-green-300 landscape:w-full flex flex-col items-center justify-center py-40 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={Info[index].id}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="flex flex-col items-center justify-center text-center px-6">
            <div className="bg-yellow-400 p-4 w-[140px] h-[140px] border-4 border-[#F28123] rounded-full overflow-hidden shadow-lg">
              <img
                src={Info[index].Image}
                alt={Info[index].alias}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="w-full md:w-[60%] flex flex-col items-center py-6">
              <p className="capitalize font-bold text-[#F28123] text-[20px] md:text-[28px]">
                {Info[index].name}
              </p>
              <p className="italic text-gray-600">@{Info[index].alias}</p>
              <p className="capitalize text-lg text-gray-700">{Info[index].title}</p>
              <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed mt-4 text-center">
                {Info[index].content}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      
    </div>
  );
}
