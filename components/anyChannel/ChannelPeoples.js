import React from "react";

function ChannelPeoples() {
  return (
    <div className="peopleList-right">
      <div className="peopleList-channel">
        <p className="peopleList-roleTitle">Admin</p>
        <div className="peopleList-user">
          <img
            className="peopleList-image"
            src="https://cdn.discordapp.com/icons/678433623266820118/be363953a60f6c52bd358a0615072940.png?size=256"
            alt=""
            width="32"
            height="32"
            aria-hidden="true"
          />

          <span className="peopleList-activity">
            <svg
              className="avatar-status"
              width="10"
              height="10"
              viewBox="0 0 23 23"
              x="22"
              y="22"
            >
              <circle cx="11.5" cy="11.5" r="11.5" fill="#399F58" />
            </svg>
          </span>
          <span className="peopleList-nameOfPeople">Mehmet Nail Mutlu</span>
        </div>
        <div className="peopleList-user">
          <img
            className="peopleList-image"
            src="https://cdn.discordapp.com/icons/678433623266820118/be363953a60f6c52bd358a0615072940.png?size=256"
            alt=""
            width="32"
            height="32"
            aria-hidden="true"
          />
          <span className="peopleList-activity">
            <svg
              className="avatar-status"
              width="10"
              height="10"
              viewBox="0 0 23 23"
              x="22"
              y="22"
            >
              <circle cx="11.5" cy="11.5" r="11.5" fill="#399F58" />
            </svg>
          </span>{" "}
          <span className="peopleList-nameOfPeople">Ahmet Yasin</span>
        </div>
      </div>
    </div>
  );
}

export default ChannelPeoples;
