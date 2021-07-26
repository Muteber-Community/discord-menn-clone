import React from 'react'
import ChannelBar from "@/components/ChannelBar";

const Layout = ({children}) => {
    return (
        <div className="main">
            <ChannelBar/>
            {children}
        </div>
    )
}

export default Layout
