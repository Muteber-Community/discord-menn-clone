import React from 'react';

function PeopleLeft() {
  return(
  <div className='peopleList-left-me'>
    <div className="cleaner"></div>
    <div className="peopleList-left-me-body">
      <h2 className="peopleList-left-me-title">
        Çevrimiçi - 0
      </h2>
      <div className="peopleList-left-me-persons">
        <a className="peopleList-left-me-person" href="/channels/@me">
          <div className="peopleList-left-me-person_profile">
            <div className="peopleList-left-me-person-avatar">
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
            <div className="peopleList-left-me-person_info"> 
              <div className="peopleList-left-me-person_username">
                <span>mehmetnail0</span>
                <span className="peopleList-left-me-person_id">#7777</span>
              </div>
              <div className="peopleList-left-me-person_status">Çevrimiçi</div>
            </div>
          </div>
          <div className="peopleList-left-me-icons">
            <div className="peopleList-left-me-icon"> 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"></path></svg>
            </div>
            <div className="peopleList-left-me-icon"> 
              <svg width="20" height="20" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"></path></g></svg>
            </div>
          </div>
        </a>
        
      </div>
    </div>
  </div>
  );
}

export default PeopleLeft;
