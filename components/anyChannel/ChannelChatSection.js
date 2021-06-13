import React, { useState } from "react";

function ChannelChatSection() {
  const [menuActive, setMenuActive] = useState(false);
  const showChannelSettings = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="chat-section">
      <ul onClick={showChannelSettings} className="chat-section-search">
        <li className="chatSection_channelName">Nimble Turkiye</li>
        <li className="chatSection_channelSettings">
          <svg
            width="18"
            height="18"
            className={menuActive ? "bold arrowActive" : "bold arrow"}
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h18v18H0"></path>
              <path
                stroke="currentColor"
                d="M4.5 4.5l9 9"
                strokeLinecap="round"
              ></path>
              <path
                stroke="currentColor"
                d="M13.5 4.5l-9 9"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
          <div
            className={
              menuActive ? "arrowActive lowerArrowActive" : "arrow lowerArrow"
            }
          ></div>
        </li>
      </ul>
      <div className="chat-section-list">USERS OR CHAT LIST</div>
    </div>
  );
}

export default ChannelChatSection;
