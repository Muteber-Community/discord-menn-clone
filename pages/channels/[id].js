import React, { useState } from "react";
import ChannelChatSection from "@/components/anyChannel/ChannelChatSection";
import ChannelInfoSection from "@/components/anyChannel/ChannelInfoSection";
import ChatArea from "@/components/anyChannel/ChatArea";
import ChannelPeoples from "@/components/anyChannel/ChannelPeoples";
import LayerContainers from "@/components/anyChannel/LayerContainers";

function Channel({ id }) {
  const [display, setDisplay] = useState(true)
  return (
      <div className="section-2">
        <ChannelChatSection />
        <div className="lists-section">
          <ChannelInfoSection setDisplay={setDisplay} display={display} />
          <div className="peopleList">
            <ChatArea id={id} />
            <ChannelPeoples display={display} />
          </div>
        </div>
      </div>
  );
}

export default Channel;

Channel.getInitialProps = ({ query }) => {
  const id = query.id;
  return { id: id };
};
