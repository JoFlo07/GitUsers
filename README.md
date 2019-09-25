# GitUsers

GitUsers is a React Native application which allows you to search for any GitUser within GitHub and to receive information about his followers and repositories.


### How it works

GitUsers is consuming the [GitHub API](https://developer.github.com/v3/) to fetch users, repos and followers from their server. The user types the username of the Github User he/she is looking for and receives up to 30 most relevant users from the GitHub API. In case no users are found the screen shows the starting screen so that the user can search again.

The search results are populated in the redux store using redux-thunk for the reason of asnychronisity. The user can then click on one of the returned users which will guide him/her to a new page where one can find all repos and followers listed. To receive this the application fetches twice from the GitHub API and renders them in two seperate lists.

### Tech Stack
* Typescript
* React Native
* Redux
* Redux-Thunk
* React Hooks
* React-Native Elements
* React Navigation

### Developer
Florian Jost [LinkedIn](https://www.linkedin.com/in/fjost/)
