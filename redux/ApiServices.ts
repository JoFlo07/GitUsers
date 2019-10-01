import {
  fetchUsersPending,
  fetchUsersSuccess,
  fetchUsersError,
  fetchFollowersError,
  fetchFollowersPending,
  fetchFollowersSuccess,
  fetchReposError,
  fetchReposPending,
  fetchReposSuccess,
  fetchUserDetailsError,
  fetchUserDetailsPending,
  fetchUserDetailsSuccess,
} from './actions';

const BASE_URL = 'https://api.github.com/';


export const getUsers = (userName) => (dispatch) => {
  dispatch(fetchUsersPending());
  fetch(`${BASE_URL}search/users?q=${userName}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchUsersSuccess(res.items));
      return res.items;
    })
    .catch((error) => {
      dispatch(fetchUsersError(error));
    });
};


export const getUserFollowers = (userName) => (dispatch) => {
  dispatch(fetchFollowersPending());
  fetch(`${BASE_URL}users/${userName}/followers`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchFollowersSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(fetchFollowersError(error));
    });
};

export const getUserRepos = (userName) => (dispatch) => {
  dispatch(fetchReposPending());
  fetch(`${BASE_URL}users/${userName}/repos`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchReposSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(fetchReposError(error));
    });
};

export const getUserDetails = (userName) => (dispatch) => {
  dispatch(fetchUserDetailsPending());
  fetch(`${BASE_URL}users/${userName}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchUserDetailsSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(fetchUserDetailsError(error));
    });
};


export default { getUsers, getUserFollowers, getUserRepos, getUserDetails };
