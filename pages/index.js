import AboutPage from '../components/AboutPage';
import LandingPage from '../components/LandingPage';
import Trainers from '../components/Trainers';
import WhatWeDo from '../components/WhatWeDo';
import graphcms from '../graphql/client';
import { TRAINERS } from '../graphql/queries';
import { AboutSection } from './about';

export default function Home({ trainers }) {
  console.log(trainers);
  return (
    <div>
      <LandingPage />
      <WhatWeDo />
      <Trainers trainers={trainers} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { trainers } = await graphcms.request(TRAINERS);

  return {
    props: { trainers },
  };
};
