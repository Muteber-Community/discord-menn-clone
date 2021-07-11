import React from 'react'

const AddChannelModal_2 = ({addServerHandler, setActiveModal}) => {
    return (
        <>
            <div className='addChannelModal_upper'>
            <h2>Bize sunucundan biraz bahset. </h2>
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
                Kurulumuna yardımcı olmak istiyoruz. Sunucun bir kaç arkadaş için mi yoksa daha büyük bir topluluk için mi? 
            </span>
            </div>
            <div className='addChannelModal_2_content' onClick={() => {setActiveModal('addChannelModal_3')}}>
                <div
                    className='addChannelModal_createChannel'
                >
                    <img
                    className='addChannelModal_createChannel_logo'
                    src='https://discord.com/assets/5e8985b40ca5104dadceeccaa81c23ca.svg'
                    />
                    <div className='addChannelModal_createChannel_title'>
                        Benim ve arkadaşlarım için
                    </div>
                    <img
                    className='addChannelModal_createChannel_arrow'
                    src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                    />
                </div>
                <div className='addChannelModal_createChannel' onClick={() => {setActiveModal('addChannelModal_3')}}>
                    <img
                    className='addChannelModal_createChannel_logo'
                    src='https://discord.com/assets/a01602a0c0bd856ebed967db1785d5a7.svg'
                    />
                    <div className='addChannelModal_createChannel_title'>
                        Bir kulüp veya topluluk için
                    </div>
                    <img
                    className='addChannelModal_createChannel_arrow'
                    src='https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg'
                    />
                </div>
                <span className="addChannelModal_2_contentText">Emin değil misin? Şimdilik <a onClick={() => {setActiveModal('addChannelModal_3')}}>bu soruyu geçebilirsin.</a></span>
            </div>
            <div className='addChannelModal_lower'>
                <div className="addChannelModal_2_back"><span onClick={() => {setActiveModal('addChannelModal_reverse')}}>Geri</span></div>
            </div>
        </>
        );
}

export default AddChannelModal_2;
