import { useState } from 'react';
import RoundedButton from './RoundedButton';
import StarRating from './StarRating';

const ProductReviewForm = () => {
  const [rating, setRating] = useState('');

  console.log(rating);

  const ratingChanged = (value) => {
    setRating(value);
  };

  return (
    <div className='py-5'>
      <p className='mb-4'>Your email address will not be published. Required fields are marked *</p>
      <form>
        <div className='flex flex-col space-y-5 max-w-xl'>
          <div className='flex flex-col'>
            <label>Name*</label>
            <input className='p-3 border' type='text' name='name' />
          </div>
          <div className='flex flex-col'>
            <label>Email*</label>
            <input className='p-3 border' type='text' name='email' />
          </div>
          <StarRating rating={rating} setRating={setRating} ratingChanged={ratingChanged} />
          <div className='flex flex-col'>
            <label>Your Review*</label>
            <textarea className='border' name='' id='' cols='30' rows='10' />
          </div>
        </div>
        <RoundedButton label='submit' medium={true} />
      </form>
    </div>
  );
};

export default ProductReviewForm;
