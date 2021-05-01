import { BsLink45Deg } from 'react-icons/bs'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { useProductsContext } from 'context/ProductContextProvider'

const ProductDetails = ({ product }) => {
  const { name, description, price, id } = product
  const { handleAddToCart } = useProductsContext()

  return (
    <>
      <ProductBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full container'>
            <div className='my-auto'>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Product</h1>
              <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>shop</p>
                <BsLink45Deg size={23} />
                <p className='capitalize'>{name}</p>
              </div>
            </div>
          </div>
        </div>
      </ProductBanner>
      <div className='pt-20 max-w-7xl mx-auto px-5 md:px-10'>
        <div className='md:grid grid-cols-2 gap-10 mb-10'>
          <div className='relative bg-white col-span-1 mb-5 hover:shadow'>
            <Image width={900} height={900} src={product.media.source} alt={name} />
          </div>
          <div className='col-span-1'>
            <hr />
            <h1 className='text-2xl font-semibold mb-5 capitalize pt-10'>{name}</h1>
            <span className='flex flex-col font-semibold mb-5'>
              <p className='text-gray-600 text-xl'>{price.formatted_with_symbol}</p>
              <p className='text-green-600'>In stock</p>
            </span>
            <div
              className='text-gray-600 mb-10'
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className='  space-x-5 mb-10'>
              <button
                data-tooltip='add'
                onClick={() => handleAddToCart(id, 1, name)}
                className='border focus:outline-none focus:ring-1 focus:ring-yellow-600 bg-primary hover:bg-btn_hover text-gray-50 w-40 py-3 uppercase'>
                add to basket
              </button>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails

const ProductBanner = styled.div`
  background: url('/images/bruce-mars-jY-GlbKeTDs-unsplash.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30vh;
  position: relative;

  .overlay {
    width: 100%;
    height: 30vh;
    background: rgba(0, 0, 0, 0.8);
  }
`

// import { BsLink45Deg } from 'react-icons/bs';
// import Link from 'next/link';
// import styled from 'styled-components';
// import Image from 'next/image';
// import ProductReviewForm from './ProductReviewForm';
// import SaleBadge from './SaleBadge';
// import { useState } from 'react';

// const ProductDetails = ({ product }) => {
//   const [isDescription, setIsDescription] = useState(true);
//   const [isReview, setIsReview] = useState(false);

//   const showDescription = () => {
//     setIsDescription(true);
//     setIsReview(false);
//   };

//   const showReview = () => {
//     setIsReview(true);
//     setIsDescription(false);
//   };

//   const {
//     name,
//     description,
//     price,
//     id,
//   } = product;

//   return (
//     <div>
//       <ProductBanner>
//         <div className='overlay absolute text-gray-200'>
//           <div className='flex h-full container'>
//             <div className='my-auto'>
//               <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Product</h1>
//               <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
//                 <Link href='/'>
//                   <a>Home</a>
//                 </Link>
//                 <BsLink45Deg size={23} />
//                 <p className='capitalize'>shop</p>
//                 <BsLink45Deg size={23} />
//                 <p className='capitalize'>{name}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ProductBanner>
//       <div className='py-20 max-w-7xl mx-auto px-5 md:px-10'>
//         <div className='md:grid grid-cols-2 gap-10 mb-10'>
//           <div className='relative bg-white col-span-1 mb-5 hover:shadow'>
//             <Image width={900} height={900} src={product.media.source} alt={} />
//             <SaleBadge product={product} />
//           </div>
//           <div className='col-span-1'>
//             <hr />
//             <h1 className='text-2xl font-semibold mb-5 capitalize pt-10'>{name}</h1>
//             <span className='flex items-center space-x-4 font-semibold mb-10'>
//               {product.onSale && <p className='text-gray-600 line-through'>£{price}</p>}
//               <p className='text-primary text-xl'>£{salePrice}</p>
//             </span>
//             <p className='text-gray-600 mb-10'>{shortDescription}</p>
//             <div className='  space-x-5 mb-10'>
//               <button className='border rounded-full bg-primary hover:bg-btn_hover text-gray-50 w-40 py-3 uppercase'>
//                 add to basket
//               </button>
//             </div>
//             <hr />
//           </div>
//         </div>
//         <div>
//           <div className='flex items-center space-x-1 mb-10'>
//             <button
//               onClick={showDescription}
//               className={`${
//                 isDescription ? 'bg-primary text-white' : 'bg-[#E4E4E4] text-gray-800'
//               } focus:outline-none hover:bg-primary hover:text-white md:py-4 font-semibold py-3 md:w-40 w-32`}>
//               Description
//             </button>
//             <button
//               onClick={showReview}
//               className={`${
//                 isReview ? 'bg-primary text-white' : 'bg-[#E4E4E4] text-gray-800'
//               } focus:outline-none hover:bg-primary hover:text-white  font-semibold md:py-4 py-3 md:w-40 w-32`}>
//               Reviews ({productReviews.length})
//             </button>
//           </div>
//           <div>
//             {isDescription ? (
//               <>
//                 <h1 className='mb-10  md:text-xl font-semibold'>Description</h1>
//                 <div className='text-gray-700'>{fullDescription.markdown}</div>
//               </>
//             ) : (
//               <div>
//                 <h1 className='mb-10  md:text-xl font-semibold'>Review</h1>
//                 {productReviews.length === 0 && (
//                   <>
//                     <p className='mb-3'>There are no reviews yet.</p>
//                     <h3 className='text-xl font-medium text-gray-600'>
//                       Be the first to review "{name}"
//                     </h3>
//                     {/* <ProductReviewForm /> */}
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// const ProductBanner = styled.div`
//   background: url('/images/bruce-mars-jY-GlbKeTDs-unsplash.jpeg');
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100%;
//   height: 30vh;
//   position: relative;

//   .overlay {
//     width: 100%;
//     height: 30vh;
//     background: rgba(0, 0, 0, 0.8);
//   }
// `;
