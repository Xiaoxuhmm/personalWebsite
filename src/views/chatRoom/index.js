import React from 'react';
import UserList from './components/userList';
import ChatArea from './components/chatArea';
import {
  ChatRoomArea
} from './style';

const ChatRoom = ()=>{
  return (
    <ChatRoomArea>
      <UserList />
      <ChatArea />
    </ChatRoomArea>
  )
}

export default ChatRoom;
