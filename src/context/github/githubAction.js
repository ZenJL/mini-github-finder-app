import axios from 'axios';

// from env
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// instance of Axios
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  }
})

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const res = await github.get(`/search/users?${params}`);
  // console.log('res: ', res);
  return res.data.items;

  // const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });

  // const data = await res.json();
  // // console.log('first', data);
  // // const {items} = await res.json();
  // return data.items;
  // // return items;
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`)
  ]);
  // console.log('user: ', user);
  // console.log('repos: ', repos);

  return {user: user.data, repos: repos.data};
}



// // Get single user
// export const getUser = async (login) => {
//   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   })
//   // console.log('res', res);

//   if(res.status === 404) {
//     window.location.href = '/notfound'
//   }
//   else {
//     const data = await res.json();
//     // console.log('data: ', data);

//     // dispatch({
//     //   type: 'GET_USER',
//     //   payload: data,
//     // })
//     return data;
//   }
// }

// // Get user repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10
//   })

//   const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const data = await res.json();

//   // dispatch({
//   //   type: 'GET_REPOS',
//   //   payload: data,
//   // })
//   return data;
// }