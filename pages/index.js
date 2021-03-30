import Bmi from '../components/Bmi';
import Discount from '../components/Discount';
import FeaturedProducts from '../components/FeaturedProducts';
import LandingPage from '../components/LandingPage';
import Plan from '../components/Plan';
import Trainers from '../components/Trainers';
import WhatWeDo from '../components/WhatWeDo';
import graphcms from '../graphql/client';
import { TRAINERS } from '../graphql/queries';

export default function Home({ trainers }) {
  return (
    <div>
      <LandingPage />
      <WhatWeDo />
      <Trainers trainers={trainers} />
      <Bmi />
      <Plan />
      <Discount />
      {/* <FeaturedProducts /> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const { trainers } = await graphcms.request(TRAINERS);

  return {
    props: { trainers },
  };
};
