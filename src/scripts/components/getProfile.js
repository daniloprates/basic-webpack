import axios from 'axios';

export default (container, e) => {
  e.preventDefault();

  let { value } = e.target.profile;

  e.target.profile.value = '';
  container.innerHTML = 'Loading';

  axios
    .get(`https://api.github.com/users/${value}`)
    .then(({ data }) => {
      container.innerHTML = `
        <img alt="${data.login}" src="${data.avatar_url}" />
        <h1>${data.name}</h1>
        <p>@${data.login}</p>
        <p>${data.company}</p>
        <p>${data.bio}</p>
      `;
    })
    .catch(() => {
      container.innerHTML = 'Profile not found';
    });
};
