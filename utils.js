import { useRouter } from 'next/router';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const getFullPathName = () => {
  let router = useRouter();
  return router.pathname;
};

export const ellipsis = (description) => {
  if (description?.length > 10) {
    return description.substring(0, 70) + '...';
  } else {
    return description;
  }
};

export const slickSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
export const testimonySettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 6000,
  dotsClass: 'button__bar',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#111927' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#111927' }}
      onClick={onClick}
    />
  );
}

export const snackbarOptions = {
  position: 'bottom-right',
  style: {
    backgroundColor: 'green',
    border: '2px solid green',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center',
  },
  closeStyle: {
    color: 'white',
    fontSize: '16px',
  },
};
