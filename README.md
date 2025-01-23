# API Explorer: Mastering RESTful Connections

## API Overview

The Movie DataBase(TMDB) provides access to information about various movies, tv shows and the people(cast and crew) behind these shows.

## API Version

The stable version of the TMDB API as at the time of building this project is version 3.

## Available Endpoints

There are several endpoints provided by the TMDB api which you can find [here](https://developer.themoviedb.org/reference/intro/getting-started)

- The Account endpoint

https://api.themoviedb.org/3/account/{account id}

You can use this endpoint to get the public details of an account on TMDB. It contains more child endpoints as well.

- movie and tv shows lists endpoints

- movie ad tv shows details endpoint

- reviews endpoint, endpoints you can use to search for movies, tv shows or people, recommendations, keywords e.t.c.

## Request and Response Format

You can make a request using the base api url and the particular endpoint you want to query.

The only response format supported by the API is JSON.

## Authentication

To be able to access the TMDB api, you need to have an **API key** or **Access Token**.

You can obtain one by:

1. Creating an account on TMDB [here](https://themoviedb.org/login)

2. Registering for an API key [here](https://www.themoviedb.org/settings/api)

You can now make requests to the TMDB api using either a single query parameter, api_key, or by using your access token as a Bearer token

e.g

1. Using query parameter (API key)

```
fetch('https://api.themoviedb.org/3/search/movie?query=Batman&api_key=<YOUR_API_KEY>')
```

2. Using Bearer token (Access token)

```
fetch('https://api.themoviedb.org/3/search/movie?query=Batman',{
  headers:{
    Authorization: 'Bearer <YOUR_ACCESS_TOKEN>'
  }
})
```

## Error Handling

The TMDB api provides a list of errors you might encounter while using the API which can be found [here](https://developer.themoviedb.org/docs/errors)

## Usuage Limits and Best Practices

Although their legacy rate limiting of 40 requests every 10 seconds have been disabled for some time, they still rate limit requests to only 50 requests per second.
