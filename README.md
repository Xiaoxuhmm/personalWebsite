# Personal Website
[Xiaoxu Li's Portfolio](http://www.xiaoxuli.com)

## Process
* Build website using React.js
* Deploy server on AWS

## Development
* Use React to build front end page.
* Use Webpack to build React project.

### Component Design
* Decide where to put the component,
* Split UI into Container and Component.
* Build from basic component and make sure it is responsive and fully tested, ideally, all changeable invariants in the component should come from a parent container. [responsive Web Design](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893). And make it be able to zoom.
  Use defaultProps to set up initial props.
  Type check with propstype
  Add comment to explain code

* Build Container and decide data source.

### Web Performance
[Google Developer Performance](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)

[Image optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/)
Decide where we should use Progressive Jpeg format to enhance our web performance.
Render small image first then render large image.

* Image in flow: use div with padding-bottom as place holder. https://jmperezperez.com/medium-image-progressive-loading-placeholder/  

[Implementation of react progressive image](https://medium.com/@perjansson/a-progressive-image-loader-in-react-f14ae652619d)

Be attention to the render process. Use onLoad event of img to control the render process.

## Responsive Web design
Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices.

### Mostly Fluid Pattern
* Use meida query make website Responsive
* Use percentage to set the size of different parts in web page

## Deploy server on AWS
* Get project from github
* Use webpack build project
* Serve built project on Port 80
* Bind IP address to domain name.
