import React, { useEffect, useState } from "react";
import ChannelChatSection from "@/components/anyChannel/ChannelChatSection";
import ChannelInfoSection from "@/components/anyChannel/ChannelInfoSection";
import ChatArea from "@/components/anyChannel/ChatArea";
import ChannelPeoples from "@/components/anyChannel/ChannelPeoples";
import ChannelBar from "@/components/ChannelBar";
import LayerContainers from "@/components/anyChannel/LayerContainers";

function Channel({ id }) {
  const [display, setDisplay] = useState(true)
  return (
    <div className="main">
      <ChannelBar />
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
      <LayerContainers />
    </div>
  );
}

export default Channel;

Channel.getInitialProps = ({ query }) => {
  const id = query.id;
  return { id: id };
};
