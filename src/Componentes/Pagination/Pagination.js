import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationHome() {
  return (
    <Pagination className='pagination-home d-flex justify-content-center mt-5'>
      
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
     

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item >{6}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      
    </Pagination>
  );
}

export default PaginationHome;
