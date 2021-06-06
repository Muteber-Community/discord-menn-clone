import React from 'react'
import MiniProfile from "@/components/MiniProfile"

const ChatSection = () => {
    return (
        <div className="chat-section">
            <div className="chat-section-search">
                <button type="button" className="searchButton">
                    Sohbet bul ya da başlat 
                </button>             
            </div>
            <div className="chat-section-list">
                <a className="chat-section-link" href="/channels/@me">
                    <svg className="friendsIcon"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                    <div className="friendsName">Arkadaşlar</div>
                </a>
                <div className="chat-section-link directMessage" href="/channels/@me">
                    <span className="directMessageText">DİREKT MESAJLAR</span>
                    <div className="directMessageIcon">
                        <svg viewBox="0 0 18 18"><polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                    </div>
                </div>
                <a className="chat-section-link private-chat" href="/channels/@me">
                    <div className="private-chat-avatar">
                        <svg width="32" height="32" viewBox="0 0 32 32"><foreignObject x="0" y="0" width="32" height="32"><img className="avatar-img" src="https://cdn.discordapp.com/avatars/364095318658121729/e8368fbf421cab741cf07ef5ec298eb2.png?size=256"/></foreignObject><svg width='16' height='16' viewBox='0 0 23 23' x="19" y="19"><circle cx='11.5' cy='11.5' r='11.5' fill='#2F3136'/></svg><svg  width='10' height='10' viewBox='0 0 23 23' x="22" y="22"><circle cx='11.5' cy='11.5' r='11.5' fill='#399F58'/></svg></svg>
                    </div>
                    <div className="private-chat-username">mehmetnail0</div>
                    <div className="private-chat-closeButton">
                        <svg  width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
                    </div>
                </a> 
            </div>
            <MiniProfile/>
        </div>
    )
}

export default ChatSection
