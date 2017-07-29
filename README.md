# MovieDb UI

This is solution of MovieDb task. The user has ability to search movie and browser results. The most interesting part of this task, was creating app without any framework. It required to create my own architecture. I created something highly inspired by react and redux, but I had no time to create my own flux implementation. I created functions similar to JSX, used to create HTML elements.

This repo does not contains styles, because I had no time to write them. I also had no time to implement pagination. This repo contains test, but the app is not fully covered because of the small amount of available time and my small experience in frontend testing.



## Run the app

1. Download repo.
2. Install dependencies

```
yarn install
```

3. Run the server

```
yarn dev
```

4. Open app in browser http://localhost:8080/

## Run the tests

### Unit tests

```
yarn test
```

 ### Integration tests

1. Run the server

```
yarn dev
```
2. Open tests in browser http://localhost:8080/test_runner.html/
