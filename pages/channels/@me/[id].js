import React from "react";
import PrivateChatInfoSection from "@/components/@me/privateChat/PrivateChatInfoSection";
import ChatArea from "@/components/anyChannel/ChatArea";
import LayerContainers from "@/components/anyChannel/LayerContainers";
import Layout_me from '@/components/@me/Layout_me';


function Channel({ id }) {
  return (
      <Layout_me>
        <div className="lists-section">
          <PrivateChatInfoSection />
          <div className="peopleList">
            <ChatArea id={id} />
          </div>
        </div>
      </Layout_me>
  );
}

export default Channel;

Channel.getInitialProps = ({ query }) => {
  const id = query.id;
  return { id: id };
};
