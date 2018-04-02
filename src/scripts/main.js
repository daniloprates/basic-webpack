import '../style/main.scss';

import getProfile from './components/getProfile';

window.onload = () => {
  const container = document.querySelector('div.container');
  document.querySelector('form').addEventListener('submit', getProfile.bind(this, container));
};
