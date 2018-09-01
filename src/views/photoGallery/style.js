import React from 'react';
import styled from 'styled-components';
import {
  FlexCol,
  FlexRow,
  zIndex,
  Image
} from '../../components/globals';
import {
  CLOUDINARY_URL,
  PHOTO_PATH
} from '../../api/index';

export const PhotoGalleryWrapper = styled(FlexRow)`
  width: 100%;
  height: 100%;
  z-index: ${zIndex.base};
  justify-content: space-evenly;
  vertical-align: top;
`

export const PhotoFrameWrapper = styled.div`
  box-sizing: border-box;
  border-style: solid;
  border-color: black;
  border-width: 8px;
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '200px'};
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
  border-style: inset;
  padding: 50px;
  margin: 20px;
  zIndex: ${zIndex.card};

  &:hover{
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export const PhotoWrapper = styled.div`
  border-style: solid;
  border-color: black;
  border-width: 2px;
  width: 100%;
  height: 100%;
  zIndex: ${zIndex.avatar};
  background: white;
  position: relative;
`

export const ImageWrapper = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
`

export const Photo = ({width, height, fileName}) => (
  <PhotoFrameWrapper
    width={width}
    height={height}
  >
    <PhotoWrapper>
      <ImageWrapper
        src={CLOUDINARY_URL + 'w_300,fl_progressive'+ PHOTO_PATH + fileName}
      />
    </PhotoWrapper>
  </PhotoFrameWrapper>
)



export const PhotoList = ({photos}) => {
  const renderPhotos = (photos) => {
    return photos.map( (photo, i) => {
      return (
        <Photo
          key={i}
          width = "370px"
          height= {`${photo.height / photo.width * 250 + 120}px`}
          fileName={photo.fileName}
        />
      )
    })
  }

  return (
    <FlexCol>
      {photos && renderPhotos(photos)}
    </FlexCol>
  )
}
