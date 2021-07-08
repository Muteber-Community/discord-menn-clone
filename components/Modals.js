ChannelSettingsModal = () => {
  return (
    <div className='channelSettingsModal'>
      <div className='channelSettingsModal_items'>
        <ul className='channelSettingsModal_invitePeople'>
          <li>
            <p>İnsanları Davet Et</p>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z'
              ></path>
            </svg>
          </li>
        </ul>
        <div className='channelSettingsModal_seperator'></div>
        <ul>
          <li>
            <p>Bildirim Ayarları</p>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z'
              ></path>
            </svg>
          </li>
        </ul>
        <div className='channelSettingsModal_seperator'></div>
        <ul>
          <li>
            <p>Kullanıcı Adı Değiştir</p>
            <svg viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z'
                fill='currentColor'
              ></path>
            </svg>
          </li>
        </ul>
        <ul>
          <li>
            <p>Sust. Kanalları Gizle</p>
            <div>
              <svg width='24' height='24' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18.625 3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V5.375C21.0057 4.08803 19.9197 3 18.625 3ZM19 19V5H4.99999V19H19Z'
                  fill='currentColor'
                ></path>
                {/* <path
                  d='M9.58473 14.8636L6.04944 11.4051L4.50003 12.9978L9.58473 18L19.5 8.26174L17.9656 6.64795L9.58473 14.8636Z'
                  class='check-1JyqgN'
                  fill='currentColor'
                ></path> */}
              </svg>
            </div>
          </li>
        </ul>
        <div className='channelSettingsModal_seperator'></div>
        <ul className='channelSettingsModal_leaveChannel'>
          <li>
            <p>Sunucudan Ayrıl</p>
            <svg width='18' height='18' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z'
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

AddChannelModal = () => {
  return (
    <>
      <div className='addChannelModal'>
        <h2>Bir Sunucu Oluştur</h2>
        <span className='addChannelModal_closeButton'></span>
        <p>
          Sunucun, arkadaşlarınla takıldığınız yerdir. Kendi sunucunu oluştur ve
          konuşmaya başla
        </p>
        <div className='addChannelModal_iWillCreateChannel'>
          <div className='addChannelModal_iWillCreateChannel_logo'></div>
          <div className='addChannelModal_iWillCreateChannel_title'>
            Kendim Oluşturayım
          </div>
          <div className='addChannelModal_iWillCreateChannel_arrow'>></div>
        </div>
      </div>
    </>
  );
};

module.exports = {
  ChannelSettingsModal,
  AddChannelModal,
};
