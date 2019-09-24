import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_FOLLOWERS_PENDING,
  FETCH_FOLLOWERS_ERROR,
  FETCH_FOLLOWERS_SUCCESS,
  FETCH_REPOS_ERROR,
  FETCH_REPOS_PENDING,
  FETCH_REPOS_SUCCESS,
} from './actions';

const initialState = {
  pending: false,
  users: [],
  followers: [],
  repos: [],
  error: null,
};

export function usersReducer(
  state = initialState, action,
) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function followersReducer(
  state = initialState, action,
) {
  switch (action.type) {
    case FETCH_FOLLOWERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_FOLLOWERS_SUCCESS:
      return {
        ...state,
        pending: false,
        followers: action.payload,
      };
    case FETCH_FOLLOWERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function reposReducer(
  state = initialState, action,
) {
  switch (action.type) {
    case FETCH_REPOS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        pending: false,
        followers: action.payload,
      };
    case FETCH_REPOS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default { usersReducer, followersReducer, reposReducer };
