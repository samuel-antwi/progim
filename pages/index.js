import Bmi from '../components/Bmi';
import Discount from '../components/Discount';
import FeaturedProducts from '../components/FeaturedProducts';
import LandingPage from '../components/LandingPage';
import Plan from '../components/Plan';
import PopularClasses from '../components/PopularClasses';
import SideNav from '../components/SideNav';
import Trainers from '../components/Trainers';
import WhatWeDo from '../components/WhatWeDo';
import graphcms from '../graphql/client';
import { PAGE_CONTENT, TRAINERS } from '../graphql/queries';

export default function Home({ trainers, products, classes, pricePlans }) {
  return (
    <div>
      <LandingPage />
      <WhatWeDo />
      <PopularClasses classes={classes} />
      <Trainers trainers={trainers} />
      <Bmi variant={true} />
      <Plan pricePlans={pricePlans} />
      <Discount />
      <FeaturedProducts products={products} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { trainers, products, classes, pricePlans } = await graphcms.request(PAGE_CONTENT);

  return {
    props: { trainers, products, classes, pricePlans },
  };
};
