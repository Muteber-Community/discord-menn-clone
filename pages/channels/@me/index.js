import React from 'react';
import FriendsSection from '@/components/@me/FriendsSection';
import PeopleLeft from '@/components/@me/PeopleLeft';
import PeopleRight from '@/components/@me/PeopleRight';
import Layout_me from '@/components/@me/Layout_me';
import ChatSection from '@/components/@me/ChatSection';

const channelsPage = () => {
  return (
    <div className="section-2">
      <ChatSection />
        <div className='lists-section'>
          <FriendsSection />
          <div className='peopleList'>
            <PeopleLeft />
            <PeopleRight />
          </div>
        </div>
      </div>
  );
};

export default channelsPage;
