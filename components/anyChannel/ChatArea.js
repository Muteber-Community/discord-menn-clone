import React from 'react';

function ChatArea() {
  return (
    <div className='peopleList-left'>
      <div className='peopleList-messages'>Mesaj 1</div>

      <div className='peopleList-typeMessage'>
        <div className='peopleList-iconsLeft'></div>
        <form className='peopleList-chatForm'>
          <input type='text' placeholder='#chat Kanalına Mesaj Gönder' />
        </form>
        <div className='peopleList-iconsRight'></div>
      </div>
    </div>
  );
}

export default ChatArea;
