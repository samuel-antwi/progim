import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { BsLink45Deg } from 'react-icons/bs'
import Header from '../components/Header'
import { useSnackbar } from 'react-simple-snackbar'
import { snackbarOptions } from 'utils'
import commerce from 'lib/commerce'
import { useProductsContext } from 'context/ProductContextProvider'

const Products = ({ products }) => {
  const { handleAddToCart } = useProductsContext()

  return (
    <div className='pt-10'>
      <ProductBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full container'>
            <div className='my-auto'>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Shop</h1>
              <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>shop</p>
              </div>
            </div>
          </div>
        </div>
      </ProductBanner>
      <div className='max-w-7xl mx-auto py-20 md:px-20 px-5'>
        <Header title='choose your brand' subTitile='shop all products' />
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 pt-10  gap-10'>
          {products.map((product) => (
            <div className=' bg-white pb-10 relative mb-5 px-5' key={product.id}>
              <Link href={`/shop/${product.permalink}`}>
                <a>
                  <Image
                    src={product.assets[0].url}
                    alt={product.name}
                    width={product.assets[0].image_dimensions.width}
                    height={product.assets[0].image_dimensions.height}
                  />
                </a>
              </Link>
              <div className='flex flex-col justify-center items-center justify-items-center space-y-5'>
                <Link href={`/shop/${product.permalink}`}>
                  <a>
                    <p className='text-xl  font-semibold capitalize hover:text-primary'>
                      {product.name}
                    </p>
                  </a>
                </Link>
                <span className='flex items-center space-x-4 text-lg'>
                  <p className='text-gray-800'>{product.price.formatted_with_symbol}</p>
                </span>
                <button
                  onClick={() => handleAddToCart(product.id, 1, product.name)}
                  className='bg-primary py-2 text-sm hover:bg-[#B84600] rounded-full uppercase px-5 text-gray-100'>
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await commerce.products.list({ limit: 100 })
  return {
    props: {
      products: data,
    },
  }
}

export default Products

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

// import Image from 'next/image';
// import Link from 'next/link';
// import styled from 'styled-components';
// import { BsLink45Deg } from 'react-icons/bs';
// import SaleBadge from '../components/SaleBadge';
// import Header from '../components/Header';
// import graphcms from '../graphql/client';
// import { ALL_PRODUCTS } from '../graphql/queries';
// import { useSnackbar } from 'react-simple-snackbar';
// import { snackbarOptions } from 'utils';

// const Products = ({ products }) => {
//   const [openSnackbar] = useSnackbar(snackbarOptions);

//   return (
//     <div className='pt-10'>
//       <ProductBanner>
//         <div className='overlay absolute text-gray-200'>
//           <div className='flex h-full container'>
//             <div className='my-auto'>
//               <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Products</h1>
//               <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
//                 <Link href='/'>
//                   <a>Home</a>
//                 </Link>
//                 <BsLink45Deg size={23} />
//                 <p className='capitalize'>shop</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ProductBanner>
//       <div className='max-w-7xl mx-auto py-20 md:px-20 px-5'>
//         <Header title='choose your brand' subTitile='shop all products' />
//         <div className='md:grid md:grid-cols-2 lg:grid-cols-3 pt-10  gap-10'>
//           {products.map((product) => (
//             <div className=' bg-white pb-10 relative mb-5 px-5' key={product.id}>
//               <SaleBadge product={product} />
//               <Link href={`/shop/${product.slug}`}>
//                 <a>
//                   <Image
//                     src={product.image.url}
//                     width={product.image.width}
//                     height={product.image.height}
//                     layout='responsive'
//                     alt={product.name}
//                   />
//                 </a>
//               </Link>
//               <div className='flex flex-col justify-center items-center justify-items-center space-y-5'>
//                 <Link href={`/shop/${product.slug}`}>
//                   <a>
//                     <p className='text-xl  font-semibold capitalize hover:text-primary'>
//                       {product.name}
//                     </p>
//                   </a>
//                 </Link>
//                 <span className='flex items-center space-x-4 text-lg'>
//                   {product.onSale && <p className='text-gray-800 line-through'>??{product.price}</p>}
//                   <p className='text-primary'>??{product.salePrice}</p>
//                 </span>
//                 <button className='bg-primary py-2 text-sm hover:bg-[#B84600] rounded-full uppercase px-5 text-gray-100'>
//                   add to cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export const getStaticProps = async () => {
//   const { products } = await graphcms.request(ALL_PRODUCTS);
//   return {
//     props: {
//       products,
//     },
//   };
// };

// export default Products;

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
