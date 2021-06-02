import React from 'react'

const channelsPage = () => {
    return (
        <div className="main">
            <nav className="section-1">
                <span>Server</span>
                <span>Server</span>
                <span>Server</span>
                <span>Server</span>
            </nav>
            <div className="section-2">
                <div className="chat-section">
                    <div className="chat-section-search">Sohbet Bul Ya da Başlat</div>
                    <div className="chat-section-list">
                        <span>chat</span>
                        <span>chat</span>
                        <span>chat</span>
                        <span>chat</span>
                    </div>
                </div>
                <div className="lists-section">
                    <div className="icons-section">
                        <span>İcon</span>
                        <span>İcon</span>
                        <span>İcon</span>
                        <span>İcon</span>
                    </div>
                    <div className="peopleList">
                        <div className="peopleList-left">
                            <span>kişi</span>
                            <span>kişi</span>
                        </div>
                        <div className="peopleList-right">
                            <span>aktif</span>
                            <span>aktif</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default channelsPage
