
Hacker News Search App:

Using the Javascript framework of your choice, build an application that has two pages users can navigate to:

- “/search” lets the user search the Hacker News Algolia API and displays a list of results (https://hn.algolia.com/api)
- “/history” shows the users a list of their past searches from this session (these do not need to persist through refresh).

We're looking to see what you know in Javascript, querying an API, and state management. We're interested in whether you can write clean code and have the ability to learn/understand new technologies. We don't care about design/UI (for this project).

Resources:

- HN search API:
    - https://hn.algolia.com/api
- Example Javascript Frameworks:
    - https://reactjs.org/docs
    - https://angular.io/docs
    - https://vuejs.org/v2/guide/

# Chosen docker sample:
https://github.com/docker/awesome-compose/tree/master/react-express-mongodb

# Tasks
- [ ] create "/search" page/route
  - [ ] create a search bar
  - [ ] send the search query to the api
  - [ ] display a list of the results from the API
- [ ] create "/history" page/route
  - [ ] display a list of past searches from this session (does not persist through refresh)