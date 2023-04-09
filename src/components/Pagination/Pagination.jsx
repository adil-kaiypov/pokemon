import React from "react";

const Pagination = ({pageCount, page, handleNext, handlePrev}) =>{
    return(
        <div className="pagination">
            <button onClick={handlePrev} className="paginationPrev">Prev</button>
            <p>{page}/{pageCount}</p>
            <button onClick={handleNext} className="paginationNext">Next</button>
        </div>
    )
}

export default Pagination;