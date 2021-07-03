import React from 'react';

function PeopleRight({}) {
  const testingData = false
  return ( 
    <div className='peopleList-right-me'>
      <div className="peopleList-right-me-body">
        <h3 className="peopleList-right-me-title">Şimdi Aktif</h3>
          {
            testingData ? 
            <div className="peopleList-right-me-active_friends">
              <a className="peopleList-right-me-person" href="/channels/@me">
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
                <div>
                  <div className="peopleList-left-me-person_username">
                    <span>mehmetnail0</span>
                    <span className="peopleList-left-me-person_id">#7777</span>
                  </div>
                  <div className="peopleList-left-me-person_status">Çevrimiçi</div>
                </div>
              </a>
            </div>
             :
            <div className="peopleList-right-me-no_active_friends">
              <span className="peopleList-right-me-no_active_friends-title">
                Burası şimdilik sessiz...
              </span>
              <p className="peopleList-right-me-no_active_friends-text">
                Bir arkadaşın, bir oyun oynamak veya bir sesli sohbete katılmak gibi bir etkinliğe başladığında burada göstereceğiz!
              </p>
            </div>
          }
        
      </div>
    </div>

  )}

export default PeopleRight;
