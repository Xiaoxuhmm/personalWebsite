import React from 'react';
import {
  ChatAreaWrapper,
  MessageWrapper,
  InputWrapper,
  InputArea,
} from '../style';

const ChatArea = () => {
  return(
    <ChatAreaWrapper>
      <MessageWrapper />
      <InputWrapper>
        <InputArea />
      </InputWrapper>
    </ChatAreaWrapper>
  )
}

export default ChatArea;
