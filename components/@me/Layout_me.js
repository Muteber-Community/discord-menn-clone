import React from 'react'
import ChatSection from './ChatSection';

const Layout_me = ({children}) => {
    return (
        <div className="section-2">
            <ChatSection />
            {children}
        </div>
    )
}

export default Layout_me;
