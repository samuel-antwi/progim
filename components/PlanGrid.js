import { GiCheckMark } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

const PlanGrid = ({ plan, index }) => {
  const {
    name,
    price,
    access,
    image,
    unlimitedEquipments,
    yogaMeditation,
    id,
    popular,
    freeRiding,
    personalTrainer,
    slug,
    fileName,
  } = plan;

  return (
    <div
      data-aos='flip-down'
      data-aos-duration={index === 0 ? '1000' : index === 1 ? '1500' : index === 2 ? '2000' : ''}
      className={`${
        popular && 'border-2 border-primary lg:-mt-10'
      } col-span-1 mb-10 md:mb-0 bg-white shadow rounded-lg py-10 relative`}>
      {popular && (
        <div className='text-center -top-4 rounded-full tracking-wider left-0 right-0 ml-[auto] mr-[auto] bg-primary text-gray-100 py-1 w-40 font-semibold absolute uppercase'>
          <p>Most popular</p>
        </div>
      )}
      <div className='flex flex-col justify-items-center items-center justify-center space-y-5'>
        <div className='bg-primary w-20 h-20 rounded-full p-5 flex items-center justify-center'>
          <img className='' src={image.url} alt={fileName} />
        </div>
        <h1 className='md:text-xl text-lg text-gray-800 tracking-wide uppercase font-semibold'>
          {name}
        </h1>
        <div className='flex items-center'>
          <h1 className='xl:text-6xl md:text-5xl text-3xl mr-4 text-primary font-bold'>£{price}</h1>
          <span className='md:text-xl text-gray-400'> /per month</span>
        </div>
      </div>
      <div className='xl:px-10  px-5 pt-10 space-y-3'>
        <BenefitList benefit={freeRiding} description='free riding' />
        <BenefitList benefit={yogaMeditation} description='yoga meditation' />
        <BenefitList benefit={unlimitedEquipments} description='unlimited equipment' />
        <BenefitList benefit={personalTrainer} description='personal trainer' />
        <BenefitList benefit={access} description='24/7 gym access' />
      </div>
      <div
        className={`${
          popular && 'bg-primary text-gray-100 '
        }  flex justify-center items-center w-48 mx-auto py-3  rounded-full hover:bg-btn_hover hover:text-gray-100 text-primary mt-10`}>
        <button className='uppercase focus:outline-none font-semibold tracking-wide'>
          get started
        </button>
      </div>
    </div>
  );
};

const BenefitList = ({ benefit, description }) => {
  return (
    <div className='flex justify-between'>
      <p className='uppercase text-gray-700'>{description}</p>
      <span className='text-gray-100 rounded-full p-1 xs:text-xl bg-black'>
        {benefit ? <GiCheckMark /> : <VscChromeClose />}
      </span>
    </div>
  );
};

export default PlanGrid;
