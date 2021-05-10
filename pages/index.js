import { useEffect } from 'react'
import Discount from '../components/Discount'
import FeaturedProducts from '../components/FeaturedProducts'
import LandingPage from '../components/LandingPage'
import Plan from '../components/Plan'
import PopularClasses from '../components/PopularClasses'
import Trainers from '../components/Trainers'
import WhatWeDo from '../components/WhatWeDo'
import graphcms from '../graphql/client'
import { PAGE_CONTENT } from '../graphql/queries'
import Testimonials from '@/components/Testimonials'
import commerce from 'lib/commerce'
import Bmi from '@/components/bmi/Bmi'

export default function Home({ trainers, data, groups, pricePlans }) {
  return (
    <>
      <LandingPage />
      <WhatWeDo />
      <PopularClasses groups={groups} />
      <Trainers trainers={trainers} />
      <Bmi variant={true} />
      <Plan pricePlans={pricePlans} />
      <Discount />
      <FeaturedProducts products={data} />
      <div className='mx-auto max-w-7xl'>
        <hr />
      </div>
      <Testimonials />
    </>
  )
}

export const getStaticProps = async () => {
  const { trainers, groups, pricePlans } = await graphcms.request(PAGE_CONTENT)
  const { data } = await commerce.products.list({ limit: 3 })

  return {
    props: { trainers, data, groups, pricePlans },
  }
}
