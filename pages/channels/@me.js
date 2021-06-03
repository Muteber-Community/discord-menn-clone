import React from 'react'
import ChannelBar from "@/components/ChannelBar"
import ChatSection from "@/components/ChatSection"

const channelsPage = () => {
    return (
        <div className="main">
            <ChannelBar />
            <div className="section-2">
                <ChatSection />
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
