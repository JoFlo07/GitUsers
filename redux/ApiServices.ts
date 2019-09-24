import {
  fetchUsersPending, fetchUsersSuccess, fetchUsersError,
} from './actions';

const BASE_URL = 'https://api.github.com/';


const getUsers = (userName) => (dispatch) => {
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


export default getUsers;
