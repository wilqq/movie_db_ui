function appendText(el, text) {
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
}

function applyProps(el, props) {
  Object.keys(props).forEach((propName) => {
    if (propName in el) {
      const value = props[propName];

      el[propName] = value;
    } else {
      console.warn(`${propName} is not a valid property of a <${el.nodeName}>`);
    }
  });
}

function appendArray(el, children) {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      appendArray(el, child);
    } else if (child instanceof window.Element) {
      el.appendChild(child);
    } else if (typeof child === 'string') {
      appendText(el, child);
    }
  });
}

export function makeElement(type, props, children) {
  const el = document.createElement(type);

  if (props) {
    applyProps(el, props);
  }

  if (children) {
    appendArray(el, children);
  }

  return el;
}

export const div = (...args) => makeElement('div', ...args);
export const h1 = (...args) => makeElement('h1', ...args);
export const h3 = (...args) => makeElement('h3', ...args);
export const p = (...args) => makeElement('p', ...args);
