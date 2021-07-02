import React from "react";

function ChannelPeoples() {
  return (
    <div className="peopleList-right">
      <div className="peopleList-channel">
        <p className="peopleList-roleTitle">Admin</p>
        <div className="peopleList-user">
          <div className="private-chat-avatar">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <foreignObject x="0" y="0" width="32" height="32">
                <img
                  className="avatar-img"
                  src="https://cdn.discordapp.com/avatars/364095318658121729/64c9b3a2111c69340537515f04613322.png?size=256"
                />
              </foreignObject>
              <svg width="16" height="16" viewBox="0 0 23 23" x="19" y="19">
                <circle cx="11.5" cy="11.5" r="11.5" fill="#2F3136" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 23 23" x="22" y="22">
                <circle cx="11.5" cy="11.5" r="11.5" fill="#399F58" />
              </svg>
            </svg>
          </div>
          <span className="peopleList-nameOfPeople">Mehmet Nail Mutlu</span>
        </div>
      </div>
    </div>
  );
}

export default ChannelPeoples;
