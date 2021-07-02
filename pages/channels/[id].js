import React, { useEffect, useState } from "react";
import ChannelChatSection from "@/components/anyChannel/ChannelChatSection";
import ChannelInfoSection from "@/components/anyChannel/ChannelInfoSection";
import ChatArea from "@/components/anyChannel/ChatArea";
import ChannelPeoples from "@/components/anyChannel/ChannelPeoples";
import ChannelBar from "@/components/ChannelBar";
import LayerContainers from "@/components/anyChannel/LayerContainers";

function Channel({ id }) {
  const [isSmallerThanHundred, setIsSmallerThanHundred] = useState(false);
  useEffect(() => {
    const px_ratio =
      window.devicePixelRatio ||
      window.screen.availWidth / document.documentElement.clientWidth;
    if (px_ratio < 1.0) {
      console.log("aga bak", px_ratio);

      setIsSmallerThanHundred(false);
    } else {
      console.log(isSmallerThanHundred);
      setIsSmallerThanHundred(true);
      return isSmallerThanHundred;
    }
  });
  return (
    <div className="main">
      <ChannelBar />
      <div className="section-2">
        <ChannelChatSection />
        <div className="lists-section">
          <ChannelInfoSection />
          <div
            className={isSmallerThanHundred ? "peopleListSmall" : "peopleList"}
          >
            <ChatArea id={id} />
            <ChannelPeoples />
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
