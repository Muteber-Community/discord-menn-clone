import React from "react";

function ChannelChatSection() {
  const showChannelSettings = () => {
    alert("BASTIN");
  };

  return (
    <div className="chat-section">
      <div onClick={showChannelSettings} className="chat-section-search">
        <h1 className="chatSection_channelName">Nimble Turkiye</h1>
        <div className="chatSection_channelSettings">
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 11L5.5 6L1 11" stroke="white" stroke-width="2" />
            <path d="M10 1L5.5 6L1 1" stroke="white" stroke-width="2" />
          </svg>
        </div>
      </div>
      <div className="chat-section-list">USERS OR CHAT LIST</div>
    </div>
  );
}

export default ChannelChatSection;
