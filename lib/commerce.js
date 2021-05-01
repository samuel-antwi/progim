import Commerce from '@chec/commerce.js'

const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY, true)

export default commerce
