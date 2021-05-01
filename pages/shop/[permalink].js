import ProductDetails from '../../components/ProductDetails'
import RelatedProducts from '../../components/RelatedProducts'
import commerce from 'lib/commerce'

const Product = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
      <RelatedProducts products={product.related_products} />
    </div>
  )
}

export default Product

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list({ limit: 100 })

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { permalink } = params

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  })
  return {
    props: {
      product,
    },
  }
}
