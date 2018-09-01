import React, {Component} from 'react';
import axios from 'axios';
import {
  PhotoGalleryWrapper,
  PhotoList
} from './style';
import ErrorBoundary from '../error/errorBoundary';

export default class PhotoGrallery extends Component{
  constructor(props){
    super(props);
    this.state = {
      photos : [],
      listNum: Math.max(1, Math.floor(window.innerWidth / 400)),
      photoLists: [],
    }
    this.updateListNum = this.updateListNum.bind(this);
    this.fetchPhotoMetaData = this.fetchPhotoMetaData.bind(this);
  }

  constructPhotoLists = (photos, listNum) => {
    const photoLists = [];
    for(let i = 0; i < listNum; i++){
      photoLists[i] = [];
    }
    for(let i = 0; i < photos.length; i++){
      photoLists[i % listNum].push(photos[i]);
    }
    this.setState({photoLists});
  }

  updateListNum = () => {
    const listNum = Math.max(Math.floor(window.innerWidth / 400), 1);
    if(listNum !== this.state.listNum){
      this.setState({listNum});
    }
    this.constructPhotoLists(this.state.photos, this.state.listNum);
  }

  fetchPhotoMetaData = () => {
    return axios.get('http://localhost:8181/api/photos')
      .then((response) => {
        return response.data._embedded.photos;
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount = async ()=>{
    window.addEventListener("resize", this.updateListNum);
    const photos = await this.fetchPhotoMetaData();
    console.log(photos);
    this.setState({photos});
    this.constructPhotoLists(this.state.photos, this.state.listNum);
  }

  componentWillUnmount = ()=> {
    window.removeEventListener("resize", this.updateListNum);
  }

  renderPhotoLists = (photoLists)=> {
    return(
      photoLists.map((photoList, i) => {
        return (
          <PhotoList
            key = {i}
            photos={photoList}
          />
        )
      })
    )
  }

  render(){
    return (
    <ErrorBoundary>
      <PhotoGalleryWrapper>
        {this.renderPhotoLists(this.state.photoLists)}
      </PhotoGalleryWrapper>
    </ErrorBoundary>
    )
  }
}
