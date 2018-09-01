import React from 'react';
import BackgroundImg from './platform.jpg';
import AppStore from './chromeAppStore.jpg';
import EWLogo from './EWLogo.svg';
import './projects.css';

const dataset = [
  {title: 'React Website', img: "https://res.cloudinary.com/xiaoxu/image/upload/w_200,h_200/v1535257941/homePage/platform.jpg", url:'https://github.com/Xiaoxuhmm/personalWebsite'},
  {title: 'Check List -- A Chrome Extension', img: AppStore, url:'https://github.com/Xiaoxuhmm/checkList'},
  {title: 'Interactive Website', img: EWLogo, url:'https://www.everlastingwardrobe.com/' }
]

const renderList = (dataset) => {
  return dataset.map((project, i) => {
    return (
      <div key={i} className="projects-item-wrapper">
        <div className={'projects-item'} style={{backgroundImage: `url(${project.img})`}}>
          <a target="_blank" rel="noopener noreferrer" href= {project.url}
            style={{display: 'block', height: '100%' }}
          />
        </div>
      </div>
    )
  });
}

const Projects = ()=> {
  return (
      <div className={'projects'}>
        <div className={'projects-title'}>
          <p>WORK</p>
        </div>
        <div className={'projects-list'}>
          {
            renderList(dataset)
          }
        </div>
      </div>
  )
}



export default Projects;
