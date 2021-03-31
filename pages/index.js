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

export default function Home({ trainers, products, classes }) {
  return (
    <div>
      <LandingPage />
      <WhatWeDo />
      <PopularClasses classes={classes} />
      <Trainers trainers={trainers} />
      <Bmi />
      <Plan />
      <Discount />
      <FeaturedProducts products={products} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { trainers, products, classes } = await graphcms.request(PAGE_CONTENT);

  return {
    props: { trainers, products, classes },
  };
};
