import React from "react";

function ChatArea({ id }) {
  return (
    <div className="chatArea_body">
      <div className="chatArea_innerBody">
        <div className="chatArea-messages"> 
          {/* {id} */}
          <div className="chatArea-message">
            <div>
              <img className="chatArea-message-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
            </div>
            <div className="chatArea-messageContent">
              <span className="chatArea-messageWriter">Mehmet Nail</span>
              <div className="chatArea-messageText">
                Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
                farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
                istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
                üçü/dördü yeterli olur muhtemelen :slight_smile:
              </div>
            </div>
          </div>
          <div className="chatArea-message">
            <div>
              <img className="chatArea-message-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
            </div>
            <div className="chatArea-messageContent">
              <div className="chatArea-messageWriter"><span>Ahmet Yasin</span></div>
              <div className="chatArea-messageText">
                Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
                farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
                istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
                üçü/dördü yeterli olur muhtemelen :slight_smile:
              </div>
            </div>
          </div>
          <div className="chatArea-message">
            <div>
              <img className="chatArea-message-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
            </div>
            <div className="chatArea-messageContent">
              <div className="chatArea-messageWriter"><span>Ahmet Yasin</span></div>
              <div className="chatArea-messageText">
                Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
                farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
                istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
                üçü/dördü yeterli olur muhtemelen :slight_smile:
              </div>
            </div>
          </div>
          <div className="chatArea-message">
            <div>
              <img className="chatArea-message-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
            </div>
            <div className="chatArea-messageContent">
              <div className="chatArea-messageWriter"><span>Ahmet Yasin</span></div>
              <div className="chatArea-messageText">
                Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
                farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
                istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
                üçü/dördü yeterli olur muhtemelen :slight_smile:
              </div>
            </div>
          </div>
          <div className="chatArea-message">
            <div>
              <img className="chatArea-message-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
            </div>
            <div className="chatArea-messageContent">
              <div className="chatArea-messageWriter"><span>Ahmet Yasin</span></div>
              <div className="chatArea-messageText">
                Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
                farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
                istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
                üçü/dördü yeterli olur muhtemelen :slight_smile:
              </div>
            </div>
          </div>
          <div className="chatArea-message">
            <div>
              <img className="chatArea-message-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
            </div>
            <div className="chatArea-messageContent">
              <div className="chatArea-messageWriter"><span>Ahmet Yasin</span></div>
              <div className="chatArea-messageText">
                Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
                farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
                istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
                üçü/dördü yeterli olur muhtemelen :slight_smile:
              </div>
            </div>
          </div>
        </div>
        <div className="chatArea-chatArea">
          <div className="chatArea-typeMessage">
            <div className="chatArea-iconsLeft">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                ></path>
              </svg>
            </div>
            <form className="chatArea-chatForm">
              <input
                className="chatArea-formInput"
                type="text"
                placeholder="#chat Kanalına Mesaj Gönder"
              />
            </form>
            <div className="chatArea-iconsRight">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="currentColor" />
                <path d="M18 12L7 7L11.125 12L7 17L18 12Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ChatArea;
