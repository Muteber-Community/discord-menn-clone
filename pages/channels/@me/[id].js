import React, { useEffect, useState } from "react";
import ChatSection from "@/components/@me/ChatSection";
import PrivateChatInfoSection from "@/components/@me/privateChat/PrivateChatInfoSection";
import ChatArea from "@/components/anyChannel/ChatArea";
import ChannelBar from "@/components/ChannelBar";
import LayerContainers from "@/components/anyChannel/LayerContainers";

function Channel({ id }) {
  const [isSmallerThanHundred, setIsSmallerThanHundred] = useState(false);
  useEffect(() => {
    const px_ratio =
      window.devicePixelRatio ||
      window.screen.availWidth / document.documentElement.clientWidth;
    if (px_ratio < 1.0) {
      setIsSmallerThanHundred(false);
    } else {
      setIsSmallerThanHundred(true);
      return isSmallerThanHundred;
    }
  });
  return (
    <div className="main">
      <ChannelBar />
      <div className="section-2">
        <ChatSection />
        <div className="lists-section">
          <PrivateChatInfoSection />
          <div
            className={isSmallerThanHundred ? "peopleListSmall" : "peopleList"}
          >
            <ChatArea id={id} />
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
