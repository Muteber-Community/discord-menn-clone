import React from 'react';
import FriendsSection from '@/components/@me/FriendsSection';
import PeopleLeft from '@/components/@me/PeopleLeft';
import PeopleRight from '@/components/@me/PeopleRight';
import Layout_me from '@/components/@me/Layout_me';

const channelsPage = () => {
  return (
      <Layout_me>
        <div className='lists-section'>
          <FriendsSection />
          <div className='peopleList'>
            <PeopleLeft />
            <PeopleRight />
          </div>
        </div>
      </Layout_me>
  );
};

export default channelsPage;
