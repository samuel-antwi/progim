import graphcms from '../../graphql/client';
import { FEATURED_PRODUCTS, PRODUCT } from '../../graphql/queries';
import ProductDetails from '../../components/ProductDetails';

const Product = ({ product }) => {
  return <ProductDetails product={product} />;
};

export default Product;

export const getStaticPaths = async () => {
  const { products } = await graphcms.request(FEATURED_PRODUCTS);
  return {
    paths: products.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),

    fallback: true,
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
