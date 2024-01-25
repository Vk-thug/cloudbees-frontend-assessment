import React from 'react';
const Paginate = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage, currentPage }) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }
   
   return (
      <div className="pagination-container mt-6 flex justify-center">
         <ul className="pagination flex flex-row space-x-3 justify-center items-center">
            <li onClick={previousPage} className={`page-number py-1 px-2 border flex justify-center items-center hover:bg-gray-300 hover:text-[#44ed9c] ${currentPage === 1 && `pointer-events-none`}`}>
               Prev
            </li>
            {pageNumbers.map((number) => (
               <li
                  key={number}
                  onClick={() => paginate(number)}
                  className={`page-number no hidden md:block ${number === currentPage && `text-[#44ed9c]`}`}
               >
                  {number}
               </li>
            ))}
            <li onClick={nextPage} className={`page-number py-1 px-2 border flex justify-center items-center hover:bg-gray-300 hover:text-[#44ed9c] ${currentPage === Math.ceil(totalPosts.length / postsPerPage) && `pointer-events-none`}`}>
               Next
            </li>
         </ul>
      </div>
   );
};
 
export default Paginate;