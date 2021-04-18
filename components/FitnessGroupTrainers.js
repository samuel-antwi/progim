import Image from 'next/image';

const FitnessGroupTrainers = ({ trainers }) => {
  return (
    <div>
      <h1 className='text-center uppercase text-gray-100 py-2 max-w-md my-10 bg-primary md:text-xl font-semibold'>
        meet the trainers
      </h1>
      <div className='md:grid grid-cols-3 gap-5'>
        {trainers.map((trainer) => (
          <div className='mb-5' key={trainer.id}>
            <Image src={trainer.trainerImage.url} alt={trainer.name} width={500} height={500} />
            <p className='py-4 text-lg font-semibold text-gray-600'>{trainer.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessGroupTrainers;
