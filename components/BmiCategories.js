const BmiCategories = () => {
  return (
    <div className=''>
      <h1 className='uppercase mb-1 font-bold md:text-xl text-center bg-primary py-3 px-5'>
        bmi categories
      </h1>
      <Categories score='BMI below 18.50' indicator='underweight' />
      <Categories score='BMI 18.50 - 24.99' indicator='Healthy weight' />
      <Categories score='BMI 25 - 29.99' indicator='overweight' />
      <Categories score='BMI 30 more' indicator='Obese' />
    </div>
  );
};

export default BmiCategories;

const Categories = ({ score, indicator }) => {
  return (
    <span className='flex items-center space-x-1 mb-0.5 text-sm'>
      <h1 className='bg-primary py-3 xl:px-5 px-1 w-full capitalize'>{score}</h1>
      <h1 className='bg-primary py-3 xl:px-5 px-1  w-full capitalize'>{indicator}</h1>
    </span>
  );
};
