import React, { useState } from 'react';
import './Pag.css'; // Import your CSS file for Pagination styles

const Pagination = ({numberClick,cards,indexFirstCard,indexLastCard,setNumOfFirstCard,setNumOfLastCard}) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const cardsPerPage=indexLastCard-indexFirstCard;
  
  const totalPages=Math.ceil(cards.length / cardsPerPage);
  
  const handlePageChange = (pageNumber) => {
   

    
    const currentPagee=pageNumber;
    
    const indexOfLastCard = currentPagee * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
/*
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);*/
    
    setNumOfLastCard(indexOfLastCard);
    setNumOfFirstCard(indexOfFirstCard);

  

  };



  const handlePageClick = (pageNum) => {

    handlePageChange(pageNum);

    setCurrentPage(pageNum);
    numberClick(pageNum); // Add clicked page number to numPagClicked state
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Case 1: Less than or equal to 6 pages
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} className={currentPage === i ? 'active' : ''}>
            <button onClick={() => handlePageClick(i)}>{i}</button>
          </li>
        );
      }
    } else { // Case 2: More than 6 pages
      let startPage = currentPage > 3 ? currentPage - 2 : 1;
      let endPage = startPage + 4;

      // Show ellipsis at the beginning
      if (startPage > 1) {
        pageNumbers.push(
          <li key={1}>
            <button onClick={() => handlePageClick(1)}>1</button>
          </li>
        );
        if (startPage > 2) {
          pageNumbers.push(
            <li key="start-ellipsis" className="ellipsis">...</li>
          );
        }
      }

      // Render page numbers in the middle
      for (let i = startPage; i <= endPage && i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} className={currentPage === i ? 'active' : ''}>
            <button onClick={() => handlePageClick(i)}>{i}</button>
          </li>
        );
      }

      // Show ellipsis at the end
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <li key="end-ellipsis" className="ellipsis">...</li>
          );
        }
        pageNumbers.push(
          <li key={totalPages}>
            <button onClick={() => handlePageClick(totalPages)}>{totalPages}</button>
          </li>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      <ul className="pagination-list">
        {renderPageNumbers()}
      </ul>
      <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
