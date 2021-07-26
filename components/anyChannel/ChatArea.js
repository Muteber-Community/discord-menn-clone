import React from "react";

function ChatArea({ id }) {
  return (
    <div className="chatArea_body">
      <div className="chatArea_innerBody">
        <div className="chatArea-messagesBody">
          <div className="chatArea-messages">
            <div className="chatArea-messages-userInfo">
              <div>
                <img className="chatArea-message-userInfo-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
              </div>
              <h2 className="chatArea-message-userInfo-username">ahmet_yasin</h2>
              <div className="chatArea-message-userInfo-description">Bu <strong>@ahmet_yasin</strong> kullanıcısıyla olan direkt mesaj geçmişinin başlangıcıdır.</div>
            </div>
            
            <div className="chatArea-userMessages">
              <div className="chatArea-message">
                <div>
                  <img className="chatArea-message-avatar_img" src="https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png"/>
                </div>
                <div className="chatArea-messageContent">
                  <span className="chatArea-messageWriter">Mehmet Nail</span>
                  <div className="chatArea-messageText">
                    Selamun aleyküm
                  </div>
                </div>
                <div className="chatArea-message_icons header_message">
                  <div className="chatArea-message_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"></path><path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor"></path></svg>
                  </div>
                  <div className="chatArea-message_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg>
                  </div>
                  <div className="chatArea-message_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="chatArea-message">
                <div className="chatArea-messageText chatArea-additional_messageText">
                  Naber
                </div>
                <div className="chatArea-message_icons">
                  <div className="chatArea-message_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"></path><path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor"></path></svg>
                  </div>
                  <div className="chatArea-message_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg>
                  </div>
                  <div className="chatArea-message_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"></path></svg>
                  </div>
                </div>
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
