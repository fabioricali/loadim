# loadim

Very simple module that detects when an image is loaded and returns it via callback.

<br/>
<a href="https://travis-ci.org/fabioricali/loadim" target="_blank"><img src="https://travis-ci.org/fabioricali/loadim.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<br/><br/><br/>

## Installation
```
npm install --save loadim
```

## Usage
```javascript

const loadim = require('loadim');

loadim('image.jpg', (err, image) => {
    if(err) 
        throw err;
    else
        document.body.appendChild(image);
});

// CrossOrigin option

loadim('image.jpg', {crossOrigin: 'anonymous'}, (err, image) => {
    if(err) 
        throw err;
    else
        document.body.appendChild(image);
});
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/loadim/blob/master/CHANGELOG.md">here</a>

## License
loadim is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>