import React from 'react';

function ChannelInfoSection() {
  return (
    <div className='icons-section'>
      <div className="infoSection-channel_info">
        <svg className="infoSection-channel_logo" x="0" y="0" width="24" height="24" viewBox="0 0 24 24"><path fill='#72767d' d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg>
        <div className='infoSection_roomName'>senseii-chat</div>
        <svg style={{margin: "4px 0 0 8px"}} className="user_status" width="10" height="15" viewBox="0 0 10 15"><mask id="694e27c6-54f4-49c1-8aad-640a8d9b3c42"><rect x="0" y="2.5" width="10" height="10" rx="5" ry="5" fill="white"></rect><rect x="2.5" y="5" width="5" height="5" rx="2.5" ry="2.5" fill="black"></rect><polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" ></polygon><circle fill="black" cx="5" cy="7.5" r="0"></circle></mask><rect x="0" y="0" width="10" height="15" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)" mask="url(#694e27c6-54f4-49c1-8aad-640a8d9b3c42)"></rect></svg>
      </div>
      <div className='infoSection_toolBar'>
        <div className='infoSection_toolIcons'>
          <svg x="0" y="0" className='infoSection_icon' width="24" height="24" viewBox="0 0 24 24"><path fill='#b9bbbe' d="M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z"></path></svg>
          <svg x="0" y="0" className='infoSection_icon' width="24" height="24" viewBox="0 0 24 24"><path fill='#b9bbbe' d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"></path></svg>
          <svg
            x='0'
            y='0'
            className='infoSection_icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='#b9bbbe'
          >
            <path
              d='M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z'
            ></path>
          </svg>
          <svg className='infoSection_icon' x="0" y="0" width="24" height="24" viewBox="0 0 24 24"><path fill='#b9bbbe' d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"></path></svg>
        </div>
        <div className='infoSection_searchInChannel'>
          <input placeholder="Ara" className='infoSection_searchInput'/>
          <svg className="infoSection_searchInChannel_searchIcon" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"></path></svg>
        </div>
        <div className="infoSection-helperIcons">
          <svg
            x='0'
            y='0'
            className='infoSection_icon '
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='#b9bbbe'
          >
            <path
              d='M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z'
            ></path>
          </svg>
          <svg
            x='0'
            y='0'
            className='infoSection_icon '
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='#b9bbbe'
          >
            <path
              d='M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ChannelInfoSection;
