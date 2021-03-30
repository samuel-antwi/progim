import React from 'react';

const SaleBadge = ({ product }) => {
  return (
    product.onSale && (
      <p className='flex justify-center items-center text-sm absolute top-5 text-gray-100 w-10 h-10 right-5 bg-primary rounded-full'>
        Sale
      </p>
    )
  );
};

export default SaleBadge;
