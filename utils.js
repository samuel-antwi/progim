// Get pathname of a current route and remove the slash infront.
import { useRouter } from 'next/router';

export const getPathName = () => {
  let router = useRouter();
  return (router = router.pathname.slice(1));
};

export const getFullPathName = () => {
  let router = useRouter();
  return router.pathname;
};

export const slickSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
