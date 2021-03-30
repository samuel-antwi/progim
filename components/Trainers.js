import Header from './Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { slickSettings } from '../utils';
import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from './MiniNavBar';
import styled from 'styled-components';

const Trainers = ({ trainers }) => {
  return (
    <Styles>
      <div className='max-w-7xl mx-auto'>
        <Header isCenter={true} title='choose your trainer' subTitile='expert trainers' />
        <Slider {...slickSettings}>
          {trainers.map((trainer) => {
            const { id, trainerImage, name, classCategories } = trainer;
            return (
              <div key={id} className='wrapper pt-10 relative mb-5'>
                <Link href='/'>
                  <a>
                    <Image
                      src={trainerImage.url}
                      width={trainerImage.width}
                      height={trainerImage.height}
                      layout='responsive'
                    />
                  </a>
                </Link>
                <div className='overlay'>
                  <div className='content bg-primary py-5 text-gray-100 space-y-3 flex flex-col justify-items-center items-center justify-center'>
                    <h1 className='uppercase  font-bold tracking-wide'>{name}</h1>
                    <p className='capitalize'>{classCategories[0].name} trainer</p>
                    <SocialLinks />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Styles>
  );
};

export default Trainers;

const Styles = styled.div`
  .overlay {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 0;
    overflow: hidden;
    transition: 0.5s ease;
  }

  .wrapper:hover .overlay {
    height: 30%;
  }

  /* .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
    overflow: hidden;
  }

  .content {
    position: absolute;
    width: 100%;
    top: 45%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  .wrapper:hover .overlay {
    height: 100%;
  } */
`;
