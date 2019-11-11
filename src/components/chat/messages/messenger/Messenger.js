import React from 'react';
import Dashboard from '../../../../dashboard/Dashboard'
import ConversationList from '../conversationlist/index'
import MessageList from '../messagelist/index'
import './Messenger.css';


export default function Messsenger(props) {
    return (
      <Dashboard {...props}>
       <br />
      <div className="messenger">
            <div className="scrollable sidebar">
          <ConversationList />
        </div>
        <div className="scrollable content">
          <MessageList />
        </div>
    </div>
    </Dashboard>
    )
}
