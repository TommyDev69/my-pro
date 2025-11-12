import React, { useState } from 'react';

export default function NewsButton({ totalPages = 3 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="flex justify-center gap-4 py-6 font-bold mx-auto flex-grow">
      <button
        onClick={handlePrev}
        className="rounded-xl bg-slate-200 hover:bg-orange-400 capitalize py-4 px-6 text-[10px] md:text-[18px]"
      >
        prev
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded-xl capitalize py-4 px-6 text-[10px] md:text-[18px] ${
              isActive ? 'bg-orange-400' : 'bg-slate-200'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        className="rounded-xl bg-slate-200 hover:bg-orange-400 capitalize py-4 px-6 text-[10px] md:text-[18px]"
      >
        next
      </button>
    </div>
  );
}
