import React from 'react';
import './ConversationSearch.css';
import Message from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton'
import { Tooltip } from '@material-ui/core';

export default function ConversationSearch() {
    return (
      <div className="conversation-search">
        <div className="toolbar">
          <Tooltip title="New Message">
          <IconButton size="large">
          <Message fontSize="large"/>
          </IconButton>
          </Tooltip>
        </div>
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
}