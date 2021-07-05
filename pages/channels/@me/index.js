import React from 'react';
import ChatSection from '@/components/@me/ChatSection';
import FriendsSection from '@/components/@me/FriendsSection';
import PeopleLeft from '@/components/@me/PeopleLeft';
import PeopleRight from '@/components/@me/PeopleRight';
import ChannelBar from '@/components/ChannelBar';

const channelsPage = () => {
  return (
    <div className='main'>
      <ChannelBar />
      <div className='section-2'>
        <ChatSection />
        <div className='lists-section'>
          <FriendsSection />
          <div className='peopleList'>
            <PeopleLeft />
            <PeopleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default channelsPage;
