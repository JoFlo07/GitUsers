export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_FOLLOWERS_PENDING = 'FETCH_FOLLOWERS_PENDING';
export const FETCH_FOLLOWERS_SUCCESS = 'FETCH_FOLLOWERS_SUCCESS';
export const FETCH_FOLLOWERS_ERROR = 'FETCH_FOLLOWERS_ERROR';
export const FETCH_REPOS_PENDING = 'FETCH_REPOS_PENDING';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';

// fetch user actions
export function fetchUsersPending() {
  return {
    type: FETCH_USERS_PENDING,
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

export function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    error,
  };
}

// fetch followers actions
export function fetchFollowersPending() {
  return {
    type: FETCH_FOLLOWERS_PENDING,
  };
}

export function fetchFollowersSuccess(followers) {
  return {
    type: FETCH_FOLLOWERS_SUCCESS,
    payload: followers,
  };
}

export function fetchFollowersError(error) {
  return {
    type: FETCH_FOLLOWERS_ERROR,
    error,
  };
}

// fetch repos actions

export function fetchReposPending() {
  return {
    type: FETCH_REPOS_PENDING,
  };
}

export function fetchReposSuccess(repos) {
  return {
    type: FETCH_REPOS_SUCCESS,
    payload: repos,
  };
}

export function fetchReposError(error) {
  return {
    type: FETCH_REPOS_ERROR,
    error,
  };
}
