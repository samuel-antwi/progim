import graphcms from '../../graphql/client';
import { ALL_PRODUCTS, PRODUCT } from '../../graphql/queries';
import ProductDetails from '../../components/ProductDetails';

const Product = ({ product }) => {
  return <ProductDetails product={product} />;
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
  const { product } = await graphcms.request(PRODUCT, {
    slug: params.slug,
  });
  return {
    props: {
      product,
    },
  };
};
