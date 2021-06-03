import React from 'react';

function ChannelPeoples() {
  return (
    <div className='peopleList-right'>
      <div className='peopleList-channel'>
        <p className='peopleList-roleTitle'>Admin</p>
        <div className='peopleList-user'>
          <img
            className='peopleList-image'
            src='https://cdn.discordapp.com/icons/678433623266820118/be363953a60f6c52bd358a0615072940.png?size=256'
            alt=''
            width='32'
            height='32'
            aria-hidden='true'
          />
          <span className='peopleList-activity' />
          <span className='peopleList-nameOfPeople'>Mehmet Nail Mutlu</span>
        </div>
        <div className='peopleList-user'>
          <img
            className='peopleList-image'
            src='https://cdn.discordapp.com/icons/678433623266820118/be363953a60f6c52bd358a0615072940.png?size=256'
            alt=''
            width='32'
            height='32'
            aria-hidden='true'
          />
          <span className='peopleList-activity' />
          <span className='peopleList-nameOfPeople'>Ahmet Yasin</span>
        </div>
        <p className='peopleList-roleTitle'>Javascipt classes</p>
        <div className='peopleList-user'>
          <img
            className='peopleList-image'
            src='https://cdn.discordapp.com/icons/678433623266820118/be363953a60f6c52bd358a0615072940.png?size=256'
            alt=''
            width='32'
            height='32'
            aria-hidden='true'
          />
          <span className='peopleList-activity' />
          <span className='peopleList-nameOfPeople'>Ahmet Yasin</span>
        </div>
      </div>
    </div>
  );
}

export default ChannelPeoples;
