
import customFunctions from './customFunctions';
import {getElementCSS} from './element_css';

export const actOnEvent = ({tag, remove}: {tag: string, remove: boolean}) => {
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

const modifyTagFromHTML = (tag: string, value: boolean) => {
  if (document.body.parentElement) {
    document.body.parentElement.dataset[tag] = String(value)
  }
}

const runCustomFunction = (tag: string, action: 'hide' | 'undo') => {
  if (customFunctions[tag]) {
    customFunctions[tag](action)  
  }
}

const addCSS = (css: string, elementId: string) => {
    const headElement = document.head || document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');

    styleElement.id = elementId
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(css));

    headElement.appendChild(styleElement);
}

const removeCSS = (tag: string) => {
  let styleSheet = document.getElementById(tag)
  if (styleSheet) {
    styleSheet.remove()
  }
}