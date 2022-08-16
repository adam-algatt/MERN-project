import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import  ThoughtList from '../components/ThoughtList';

const Home = () => {
//  query hook for query req
// eslint-disable-next-line
const { loading, data } = useQuery(QUERY_THOUGHTS);
// optional chaining only works in browser don't use 
//this syntax on server-side yet
// if data.thoughts exists store in thoughts const
//else store empty array in thoughts const
// const thoughts = data?.thoughts || [];
const thoughts = data?.thoughts || []; 

console.log(thoughts); 

return (
  <main>
    <div className='flex-row justify-space-between'>
      <div className='col-12 mb-3'>
{loading ? (
  <div>Loading thoughts...</div>
) : (
  <ThoughtList thoughts={thoughts} title="Some stuff for your something rather......."/>
)}
      </div>
    </div>
  </main>
);
};

export default Home;

