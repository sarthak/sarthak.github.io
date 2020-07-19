import {bindThreads} from './thread.js';
import {bindCollapsables} from './collapsable.js';

window.onload = () => {
  bindCollapsables(document);
  bindThreads(document);
};
