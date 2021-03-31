import graphcms from '../../graphql/client';
import { ALL_PRODUCTS, PRODUCT } from '../../graphql/queries';
import ProductDetails from '../../components/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts';

const Product = ({ product, products }) => {
  return (
    <div>
      <ProductDetails product={product} />
      <RelatedProducts products={products} />
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const { products } = await graphcms.request(ALL_PRODUCTS);
  return {
    paths: products.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { product, products } = await graphcms.request(PRODUCT, {
    slug: params.slug,
  });
  return {
    props: {
      product,
      products,
    },
  };
};
