import { useEffect } from 'react';
import Bmi from '../components/Bmi';
import Discount from '../components/Discount';
import FeaturedProducts from '../components/FeaturedProducts';
import LandingPage from '../components/LandingPage';
import Plan from '../components/Plan';
import PopularClasses from '../components/PopularClasses';
import Trainers from '../components/Trainers';
import WhatWeDo from '../components/WhatWeDo';
import graphcms from '../graphql/client';
import { PAGE_CONTENT, TRAINERS } from '../graphql/queries';
import AOS from 'aos';

export default function Home({ trainers, products, groups, pricePlans }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: function () {
        const maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  });

  return (
    <>
      <LandingPage />
      <WhatWeDo />
      <PopularClasses groups={groups} />
      <Trainers trainers={trainers} />
      <Bmi variant={true} />
      <Plan pricePlans={pricePlans} />
      <Discount />
      <FeaturedProducts products={products} />
    </>
  );
}

export const getStaticProps = async () => {
  const { trainers, products, groups, pricePlans } = await graphcms.request(PAGE_CONTENT);

  return {
    props: { trainers, products, groups, pricePlans },
  };
};
