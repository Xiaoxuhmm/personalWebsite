import styled from 'styled-components';

import {
  FlexRow,
  FlexCol,
  P,
  theme,
  zIndex,
} from '../../components/globals';

export const ChatRoomArea = styled(FlexRow)`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: ${zIndex.background};
`

export const UserListWrapper = styled(FlexCol)`
  width: 300px;
  height: 100vh;
  background-color: ${theme.background.default};
  position: absolute;
  z-index: ${zIndex.card};
  left: 0;
  top: 0;
`

export const NameCardWrapper = styled(FlexRow)`
  width: 270px;
  height: 100px;
  margin: 0 auto 0 auto;

  &:hover {
    background-color: ${theme.background.textHover};
  }
`;

export const NameCardText = styled(P)`
  margin: 0 15px 15px 15px;
`;

export const NameCardAvatar = styled.img`
  width: 50px;
  height: 50px;
  display: inline-block;
`




// Text Area
export const ChatAreaWrapper = styled(FlexCol)`
  width: 100%;
  height: 100%;
  padding-left: 300px;
  position: relative;
  z-index: ${zIndex.base};
`

export const MessageWrapper = styled(FlexRow)`
  height: 100%;
  width: 100%;
  padding: 0 0 300px 0;
  background-color: ${theme.background.text};
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  background-color: white;
  bottom: 0;
  left: 0;
`

export const InputArea = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 300px;
`
