import React from 'react'

const AddChannelModal_1 = ({addServerHandler, setActiveModal}) => {
    return (
        <>
            <div className='addChannelModal_upper'>
            <h2>Bir sunucu oluştur</h2>
            <div
                onClick={addServerHandler}
                className='addChannelModal_closeButton'
            >
                <svg width='24' height='24' viewBox='0 0 24 24'>
                <path
                    fill='currentColor'
                    d='M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z'
                ></path>
                </svg>
            </div>
            <span>
                Sunucun, arkadaşlarınla takıldığınız yerdir. Kendi sunucunu
                oluştur ve konuşmaya başla.
            </span>
            </div>
            <div className='addChannelModal_content'>
            <div
                onClick={() => {
                setActiveModal('addChannelModal_2')
                }}
                className='addChannelModal_createChannel'
            >
                <img
                className='addChannelModal_createChannel_logo'
                src='https://discord.com/assets/79516499036b21acd5f56ccba0635c38.svg'
                />
                <div className='addChannelModal_createChannel_title'>
                Kendim Oluşturayım
                </div>
                <img
                className='addChannelModal_createChannel_arrow'
                src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                />
            </div>
            <span>bİr şablon kullanarak başla</span>
            <div className='addChannelModal_createChannel'>
                <img
                className='addChannelModal_createChannel_logo'
                src='https://discord.com/assets/b13e5fb6748d48b8d32a0a7b720d3a31.svg'
                />
                <div className='addChannelModal_createChannel_title'>Oyun</div>
                <img
                className='addChannelModal_createChannel_arrow'
                src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                />
            </div>
            <div className='addChannelModal_createChannel'>
                <img
                className='addChannelModal_createChannel_logo'
                src='https://discord.com/assets/6670414aa93c6a4b3b5c7f57ead40533.svg'
                />
                <div className='addChannelModal_createChannel_title'>
                Arkadaşlar
                </div>
                <img
                className='addChannelModal_createChannel_arrow'
                src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                />
            </div>
            <div className='addChannelModal_createChannel'>
                <img
                className='addChannelModal_createChannel_logo'
                src='https://discord.com/assets/8ea6fb273c261048c7cfb159b0bd286e.svg'
                />
                <div className='addChannelModal_createChannel_title'>
                Çalışma Grubu
                </div>
                <img
                className='addChannelModal_createChannel_arrow'
                src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                />
            </div>
            <div className='addChannelModal_createChannel'>
                <img
                className='addChannelModal_createChannel_logo'
                src='https://discord.com/assets/5e8985b40ca5104dadceeccaa81c23ca.svg'
                />
                <div className='addChannelModal_createChannel_title'>
                Sanatçılar ve Zanatkarlar
                </div>
                <img
                className='addChannelModal_createChannel_arrow'
                src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                />
            </div>
            <div className='addChannelModal_createChannel'>
                <img
                className='addChannelModal_createChannel_logo'
                src='https://discord.com/assets/d149a7d17b8c891a36059af8d4108813.svg'
                />
                <div className='addChannelModal_createChannel_title'>
                Kulüpler
                </div>
                <img
                className='addChannelModal_createChannel_arrow'
                src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                />
            </div>
            <div className='addChannelModal_createChannel'>
                <img
                className='addChannelModal_createChannel_logo'
                src='https://discord.com/assets/a01602a0c0bd856ebed967db1785d5a7.svg'
                />
                <div className='addChannelModal_createChannel_title'>
                Yerel Topluluk
                </div>
                <img
                className='addChannelModal_createChannel_arrow'
                src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                />
            </div>
            </div>
            <div className='addChannelModal_lower'>
                <h2>Zaten davetin var mı ?</h2>
                <button>Bir Sunucuya Katıl</button>
            </div>
        </>
        );
}

export default AddChannelModal_1;
