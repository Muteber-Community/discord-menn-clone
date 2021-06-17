import React from "react";

function ChatArea({ id }) {
  return (
    <div className="peopleList-left">
      <div className="peopleList-messages">
        {/* {id} */}
        <div className="peopleList-message">
          <span className="peopleList-messageWriter">Mehmet Nail Mutlu</span>
          <div className="peopleList-messageText">
            Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
            farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
            istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
            üçü/dördü yeterli olur muhtemelen :slight_smile:
          </div>
        </div>
        <div className="peopleList-message">
          <span className="peopleList-messageWriter">Ahmet Yasin</span>
          <div className="peopleList-messageText">
            Aslında Full Stack dediği için normal gibi duruyor abi. Tabi iki
            farklı dil olduğu iöin bu kadar fazla. Ama absürt değil bence
            istekler :sweat_smile: bi de hepsini bilmek gerekmiyordur. Beşte
            üçü/dördü yeterli olur muhtemelen :slight_smile:
          </div>
        </div>
      </div>
      <div className="peopleList-chatArea">
        <div className="peopleList-typeMessage">
          <div className="peopleList-iconsLeft">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
              ></path>
            </svg>
          </div>
          <form className="peopleList-chatForm">
            <input
              className="chatArea-formInput"
              type="text"
              placeholder="#chat Kanalına Mesaj Gönder"
            />
          </form>
          <div className="peopleList-iconsRight">
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
  );
}

export default ChatArea;
