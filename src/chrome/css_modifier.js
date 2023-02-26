
import customFunctions from './customFunctions.js';
import {getElementCSS} from './element_css.js';

export const actOnEvent = ({tag, remove}) => {
    let platform = String(tag).split('_')[0]
    
    if (window.location.host.includes(platform)) {
      modifyTagFromHTML(tag, remove);
      if (remove) {
          let overrideCSS = getElementCSS(tag)
          addCSS(overrideCSS, tag);
          runCustomFunction(tag, 'hide')
      } else {
          removeCSS(tag)
          runCustomFunction(tag, 'undo')
      }
    }
}

const modifyTagFromHTML = (tag, value) => {
  document.body.parentElement.dataset[tag] = String(value)
}

const runCustomFunction = (tag, action) => {
  if (customFunctions[tag]) {
    customFunctions[tag](action)  
  }
}

const addCSS = (css, elementId) => {
    const headElement = document.head || document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');

    styleElement.id = elementId
    styleElement.type = 'text/css';
    if (styleElement.styleSheet){
      // This is required for IE8 and below.
      styleElement.styleSheet.cssText = css;
    } else {
      styleElement.appendChild(document.createTextNode(css));
    }

    headElement.appendChild(styleElement);
}

const removeCSS = (tag) => {
  let styleSheet = document.getElementById(tag)
  if (styleSheet) {
    styleSheet.remove()
  }
}