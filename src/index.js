import { div, h1 } from '../lib/make_element';

const root = document.getElementById('root');

root.appendChild(
  div({ className: 'container' }, [
    h1({ id: 'title' }, [
      'Movie DB UI'
    ])
  ])
);
