import React, { useState } from 'react';
import MiniProfile from '@/components/MiniProfile';
import ChannelSettingsModal from '@/components/Modals/ChannelSettingsModal';

function ChannelChatSection() {
  const [activateArrow, setActivateArrow] = useState(false);
  const [toggleChannelCategory, setToggleChannelCategory] = useState(true);
  const channelArrowHandler = () => {
    setActivateArrow(!activateArrow);
  };
  const channelCategoryHandler = () => {
    setToggleChannelCategory(!toggleChannelCategory);
  };

  return (
    <div className='chat-section'>
      <ul onClick={channelArrowHandler} className='channelChatSection_search'>
        <li className='chatSection_channelName'>Nimble Turkiye</li>
        <li className='chatSection_channelSettings'>
          <svg
            className={activateArrow ? 'activeArrow' : 'deactiveArrow'}
            width='18'
            height='18'
          >
            <g fill='none' fillRule='evenodd'>
              <path
                stroke='currentColor'
                d='M4.5 4.5l9 9'
                strokeLinecap='round'
              ></path>
              <path
                stroke='currentColor'
                d='M13.5 4.5l-9 9'
                strokeLinecap='round'
              ></path>
            </g>
          </svg>
        </li>
      </ul>
      {/* Channel Settings Modal*/}
      {activateArrow ? (
        <ChannelSettingsModal channelArrowHandler={channelArrowHandler} />
      ) : (
        ''
      )}
      <div className='channelChatSection_channels'>
        <div className='channelChatSection_channelItem'>
          <div
            onClick={channelCategoryHandler}
            className='channelChatSection_category'
          >
            <svg
              className={
                toggleChannelCategory
                  ? 'channelChatSection_categoryArrow channelChatSection_categoryArrow_shows'
                  : 'channelChatSection_categoryArrow channelChatSection_categoryArrow_hides'
              }
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z'
              ></path>
            </svg>
            <div className='channelChatSection_channelCategory'>STATS</div>
          </div>
          <div
            className={
              toggleChannelCategory ? 'channelChatSection_channel' : 'hide'
            }
          >
            <svg
              width='24'
              height='34'
              viewBox='0 0 24 24'
              style={{ marginLeft: '2px' }}
            >
              <path
                fill='#72767d'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z'
              ></path>
            </svg>
            <div className='channelChatSection_channelName'>senseii-chat</div>
            <svg
              className='channelChatSection_createInviteButton'
              viewBox='0 0 16 16'
            >
              <path
                fill='currentColor'
                d='M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z'
              ></path>
              <path
                fill='currentColor'
                d='M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z'
              ></path>
              <path
                fill='currentColor'
                d='M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z'
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <MiniProfile />
    </div>
  );
}

export default ChannelChatSection;
