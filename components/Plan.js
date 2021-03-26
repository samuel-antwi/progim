import React, { useState, useEffect } from 'react';
import graphcms from '../graphql/client';
import { GET_ALL_PLANS } from '../graphql/queries';
import Header from './Header';
import LoadingScreen from './LoadingScreen';
import PlanGrid from './PlanGrid';

const Plan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = async () => {
    setLoading(true);
    try {
      const { pricePlans } = await graphcms.request(GET_ALL_PLANS);
      setData(pricePlans);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='pb-20 px-5'>
      <div className='max-w-7xl mx-auto'>
        <Header title='choose pricing' subTitile='our pricing plan' isCenter={true} />
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {data.map((plan, index) => (
              <PlanGrid key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plan;
