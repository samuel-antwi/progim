import Rating from 'react-rating';
import { BsStar, BsStarFill } from 'react-icons/bs';
const StarRating = ({ rating, setRating, ratingChanged }) => {
  return (
    <div>
      <p className='mb-2'>Your rating*</p>
      <Rating
        emptySymbol={<BsStar className='text-primary' />}
        fullSymbol={<BsStarFill className='text-primary' />}
        onChange={ratingChanged}
      />
    </div>
  );
};

export default StarRating;
