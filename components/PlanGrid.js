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
    freeRiding,
    personalTrainer,
    slug,
    fileName,
  } = plan;

  return (
    <div
      data-aos='flip-down'
      data-aos-duration={index === 0 ? '1000' : index === 1 ? '1500' : index === 2 ? '2000' : ''}
      className='col-span-1 mb-10 md:mb-0 bg-white shadow rounded-lg py-10'>
      <div className='flex flex-col justify-items-center items-center justify-center space-y-5'>
        <div className='bg-primary w-20 h-20 rounded-full p-5 flex items-center justify-center'>
          <img className='' src={image.url} alt={fileName} />
        </div>
        <h1 className='md:text-xl text-lg text-gray-800 tracking-wide uppercase font-semibold'>
          {name}
        </h1>
        <h1 className='md:text-6xl text-3xl text-primary font-bold'>£{price}</h1>
      </div>
      <div className='xl:px-10  px-5 pt-10 space-y-3'>
        <BenefitList benefit={freeRiding} description='free riding' />
        <BenefitList benefit={yogaMeditation} description='yoga meditation' />
        <BenefitList benefit={unlimitedEquipments} description='unlimited equipment' />
        <BenefitList benefit={personalTrainer} description='personal trainer' />
        <BenefitList benefit={access} description='24/7 gym access' />
      </div>
      <div className='flex justify-center items-center w-32 mx-auto py-3  rounded-full  bg-primary text-gray-100 mt-10'>
        <button className='uppercase focus:outline-none font-semibold tracking-wide'>
          subscribe
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
