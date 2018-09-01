import styled, {css} from 'styled-components';
import React from 'react';
import './spinner.css';

export const fontStack = css`
  font-family:  Ubuntu, sans-serif;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: top;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const H1 = styled.h1`
  ${fontStack};
  color: ${({ theme }) => theme.text.default};
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
color: ${({ theme }) => theme.text.default};
${fontStack};
font-weight: 700;
font-size: 1.25rem;
line-height: 1.25;
margin: 0;
padding: 0;
`;

export const H3 = styled.h3`
color: ${({ theme }) => theme.text.default};
${fontStack};
font-weight: 500;
font-size: 1rem;
line-height: 1.5;
margin: 0;
padding: 0;
`;

export const H4 = styled.h4`
color: ${({ theme }) => theme.text.default};
${fontStack};
font-weight: 500;
font-size: 0.875rem;
line-height: 1.4;
margin: 0;
padding: 0;
`;

export const H5 = styled.h5`
color: ${({ theme }) => theme.text.default};
${fontStack};
font-weight: 500;
font-size: 0.75rem;
line-height: 1.4;
margin: 0;
padding: 0;
`;

export const H6 = styled.h6`
color: ${({ theme }) => theme.text.default};
${fontStack};
font-weight: 600;
text-transform: uppercase;
font-size: 0.675rem;
line-height: 1.5;
margin: 0;
padding: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const P = styled.p`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const Spinner = () => (
  <div className="sk-circle">
    <div className="sk-circle1 sk-child"></div>
    <div className="sk-circle2 sk-child"></div>
    <div className="sk-circle3 sk-child"></div>
    <div className="sk-circle4 sk-child"></div>
    <div className="sk-circle5 sk-child"></div>
    <div className="sk-circle6 sk-child"></div>
    <div className="sk-circle7 sk-child"></div>
    <div className="sk-circle8 sk-child"></div>
    <div className="sk-circle9 sk-child"></div>
    <div className="sk-circle10 sk-child"></div>
    <div className="sk-circle11 sk-child"></div>
    <div className="sk-circle12 sk-child"></div>
  </div>
)

export const theme = {
  text: {
    default : 'black',
  },
  background:{
    default: '#e7e8e5',
    text: '#f2f2f2',
    textHover: '#e0d8ce',
  }
}

export const zIndex = new function() {
  // Write down a camel-cased element descriptor as the name (e.g. modal or chatInput).
  // Define at a component level here, then use math to handle order at a local level.
  // (e.g. const ModalInput = styled.input`z-index: zIndex.modal + 1`;)
  // This uses constructor syntax because that allows self-referential math

  this.base = 1; // z-index: auto content will go here or inherit z-index from a parent

  this.background = this.base - 1; // content that should always be behind other things (e.g. textures/illos)
  this.hidden = this.base - 2; // this content should be hidden completely (USE ADD'L MEANS OF HIDING)

  this.card = this.base + 1; // all cards should default to one layer above the base content
  this.loading = this.card + 1; // loading elements should never appear behind cards
  this.avatar = this.card + 1; // avatars should never appear behind cards
  this.form = this.card + 1; // form elements should never appear behind cards
  this.search = this.form; // search is a type of form and should appear at the same level
  this.dmInput = this.form;

  this.composerToolbar = 2000; // composer toolbar - should sit in between most elements

  this.chrome = 3000; // chrome should be visible in modal contexts
  this.navBar = this.chrome; // navBar is chrome and should appear at the same level
  this.mobileInput = this.chrome + 1; // the chatInput on mobile should appear above the navBar
  this.dropDown = this.chrome + 1; // dropDowns shouldn't appear behind the navBar

  this.slider = window.innerWidth < 768 ? this.chrome + 1 : this.chrome; // slider should appear significantly above the base to leave room for other elements
  this.composer = this.slider - 2; // composer should never appear above the slider
  this.chatInput = this.slider + 1; // the slider chatInput should always appear above the slider
  this.flyout = this.chatInput + 3; // flyout may overlap with chatInput and should take precedence

  this.fullscreen = 4000; // fullscreen elements should cover all screen content except toasts

  this.modal = 5000; // modals should completely cover base content and slider as well
  this.gallery = this.modal + 1; // gallery should never appear behind a modal

  this.toast = 6000; // toasts should be visible in every context
  this.tooltip = this.toast + 1; // tooltips should always be on top
}();
