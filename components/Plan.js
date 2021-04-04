import Header from './Header';
import PlanGrid from './PlanGrid';

const Plan = ({ pricePlans }) => {
  return (
    <div className='pb-20 px-5 md:px-20'>
      <div className='max-w-7xl mx-auto'>
        <Header title='choose pricing' subTitile='our pricing plan' isCenter={true} />
        <div className='md:grid md:grid-cols-2 pt-10 lg:grid-cols-3 gap-8'>
          {pricePlans.map((plan, index) => (
            <PlanGrid key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;
