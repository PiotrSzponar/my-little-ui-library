import Tooltip from './my-little-ui/tooltip';
import Dropdown from './my-little-ui/dropdown';
import Tab from './my-little-ui/tab';
import Toast from './my-little-ui/toast';

// create Tooltip
const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
  const instance = new Tooltip(tooltip);
  instance.init();
});

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => {
  let id = 0;
  tab.setAttribute('id', `tab-${id}`);
  const instance = new Tab(tab);
  instance.init();
  id += 1;
});

// create toast
const toastButtons = document.querySelectorAll('.toast-trigger');
toastButtons.forEach(toastButton => {
  const instance = new Toast(toastButton);
  instance.init();
});
