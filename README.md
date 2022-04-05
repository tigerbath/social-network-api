# Social Network API

## Description

A RESTful API application built to grant users the ability to share their thoughts and opinions, make friends and leave comments.

# Links

[Application Walkthrough](https://www.awesomescreenshot.com/video/8241904?key=d82b4b787a69a2b5402e34cec5ee5b08)

## Technologies

- JavaScript
  - node.js
  - express.js
- MongoDB
  - Mongoose

## Getting Started

To start the application please use the following commands.

```
npm i
npm run seed
npm run start
```

## Endpoints

When using the application, please see example responses on the GET, POST, PUT and DELETE requests.

### API Routes

### `GET` all users

**`/api/users`**

```json
// sample response
{
  "success": true,
  "data": [
    {
      "_id": "624c236e4a5e7c83d58fa0b3",
      "username": "WillSmith",
      "email": "bigwillystyle@gmail.com",
      "thoughts": ["624c236e4a5e7c83d58fa0b9"],
      "friends": ["624c236e4a5e7c83d58fa0b5"],
      "__v": 0
    },
    {
      "_id": "624c236e4a5e7c83d58fa0b4",
      "username": "Eminem",
      "email": "therealslimshady@gmail.com",
      "thoughts": [],
      "friends": ["624c236e4a5e7c83d58fa0b3", "624c236e4a5e7c83d58fa0b5"],
      "__v": 0
    },
    {
      "_id": "624c236e4a5e7c83d58fa0b5",
      "username": "TheRock",
      "email": "peopleschamp@gmail.com",
      "thoughts": ["624c236e4a5e7c83d58fa0be"],
      "friends": ["624c236e4a5e7c83d58fa0b6", "624c236e4a5e7c83d58fa0b4"],
      "__v": 0
    },
    {
      "_id": "624c236e4a5e7c83d58fa0b6",
      "username": "ChrisRock",
      "email": "backhandedontv@gmail.com",
      "thoughts": [],
      "friends": ["624c236e4a5e7c83d58fa0b3"],
      "__v": 0
    },
    {
      "_id": "624c23c0a4c567a377d52aa9",
      "username": "StoneColdSteveAustin",
      "email": "texasrattlesnake@gmail.com",
      "thoughts": [],
      "friends": [],
      "__v": 0
    }
  ]
}
```

### `GET` an individual user by `_id`

**`/api/users/:userId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "624c236e4a5e7c83d58fa0b3",
    "username": "WillSmith",
    "email": "bigwillystyle@gmail.com",
    "thoughts": ["624c236e4a5e7c83d58fa0b9"],
    "friends": ["624c236e4a5e7c83d58fa0b5"],
    "__v": 0
  }
}
```

### `POST` a new user:

**`/api/users`**

```json
// example data
{
  "username": "StoneColdSteveAustin",
  "email": "texasrattlesnake@gmail.com"
}
```

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "624c23c0a4c567a377d52aa9",
    "username": "StoneColdSteveAustin",
    "email": "texasrattlesnake@gmail.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
  }
}
```

### `PUT` to update a user by its `_id`

**`/api/users/:userId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "624c17ee3bdd0fdb027a97ee",
    "username": "forestgump",
    "email": "gumpy@email.com",
    "thoughts": ["624c17ee3bdd0fdb027a97f4"],
    "friends": [
      "624c17ee3bdd0fdb027a97ef",
      "624c17ee3bdd0fdb027a97f1",
      "624c17ee3bdd0fdb027a97f0"
    ],
    "__v": 0
  }
}
```

### `DELETE` to remove user by its `_id`

**`/api/users/:userId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "624c236e4a5e7c83d58fa0b3",
    "username": "WillSmith",
    "email": "bigwillystyle@gmail.com",
    "thoughts": ["624c236e4a5e7c83d58fa0b9"],
    "friends": ["624c236e4a5e7c83d58fa0b5"],
    "__v": 0
  }
}
```

---

### `POST` to add a new friend to a user's friend list

**`/api/users/:userId/friends/:friendId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "624c23c0a4c567a377d52aa9",
    "username": "StoneColdSteveAustin",
    "email": "texasrattlesnake@gmail.com",
    "thoughts": [],
    "friends": ["624c219078aa2003a036dd7e"],
    "__v": 0
  }
}
```

### `GET` to get all thoughts

**`/api/thoughts`**

```json
// sample response
{
  "success": true,
  "data": [
    {
      "_id": "624c236e4a5e7c83d58fa0b9",
      "thoughtText": "I'm living the dream, I'm the fresh prince",
      "username": "WillSmith",
      "reactions": [
        {
          "reactionId": "624c236e4a5e7c83d58fa0ba",
          "reactionBody": "Woooooooooow!",
          "username": "ChrisRock",
          "createdAt": "2022-04-05T11:09:34.140Z",
          "_id": "624c236e4a5e7c83d58fa0bb"
        },
        {
          "reactionId": "624c236e4a5e7c83d58fa0bc",
          "reactionBody": "This looks like a job for me!",
          "username": "Eminem",
          "createdAt": "2022-04-05T11:09:34.140Z",
          "_id": "624c236e4a5e7c83d58fa0bd"
        }
      ],
      "__v": 0,
      "reactionCount": 2
    },
    {
      "_id": "624c236e4a5e7c83d58fa0be",
      "thoughtText": "If you smell what the rock is cooking",
      "username": "TheRock",
      "reactions": [
        {
          "reactionId": "624c236e4a5e7c83d58fa0bf",
          "reactionBody": "So cool!",
          "username": "Eminem",
          "createdAt": "2022-04-05T11:09:34.140Z",
          "_id": "624c236e4a5e7c83d58fa0c0"
        },
        {
          "reactionId": "624c236e4a5e7c83d58fa0c1",
          "reactionBody": "Nice!",
          "username": "WillSmith",
          "createdAt": "2022-04-05T11:09:34.140Z",
          "_id": "624c236e4a5e7c83d58fa0c2"
        }
      ],
      "__v": 0,
      "reactionCount": 2
    },
    {
      "_id": "624c236e4a5e7c83d58fa0c3",
      "thoughtText": "Life is like a box of chocolates",
      "username": "ForestGump",
      "reactions": [
        {
          "reactionId": "624c236e4a5e7c83d58fa0c4",
          "reactionBody": "THIS.",
          "username": "WillSmith",
          "createdAt": "2022-04-05T11:09:34.140Z",
          "_id": "624c236e4a5e7c83d58fa0c5"
        }
      ],
      "__v": 0,
      "reactionCount": 1
    },
    {
      "_id": "624c2420a4c567a377d52aae",
      "thoughtText": "can you smell what the rock is cooking",
      "username": "TheRock",
      "reactions": [],
      "__v": 0,
      "reactionCount": 0
    },
    {
      "_id": "624c2422a4c567a377d52ab0",
      "thoughtText": "can you smell what the rock is cooking",
      "username": "TheRock",
      "reactions": [
        {
          "reactionId": "624c246ba4c567a377d52abd",
          "reactionBody": "Austin 3:16 says i just whooped your ass",
          "username": "StoneColdSteveAustin",
          "createdAt": "2022-04-05T11:09:45.361Z",
          "_id": "624c246ba4c567a377d52abe"
        }
      ],
      "__v": 0,
      "reactionCount": 1
    }
  ]
}
```

### `GET` to get a single thought by its `_id`

**`/api/thoughts/:thoughtId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "624c236e4a5e7c83d58fa0b9",
    "thoughtText": "I'm living the dream, I'm the fresh prince",
    "username": "WillSmith",
    "reactions": [
      {
        "reactionId": "624c236e4a5e7c83d58fa0ba",
        "reactionBody": "Woooooooooow!",
        "username": "ChrisRock",
        "createdAt": "2022-04-05T11:09:34.140Z",
        "_id": "624c236e4a5e7c83d58fa0bb"
      },
      {
        "reactionId": "624c236e4a5e7c83d58fa0bc",
        "reactionBody": "This looks like a job for me!",
        "username": "Eminem",
        "createdAt": "2022-04-05T11:09:34.140Z",
        "_id": "624c236e4a5e7c83d58fa0bd"
      }
    ],
    "__v": 0,
    "reactionCount": 2
  }
}
```

### `POST` to add a new thought

**`/api/thoughts/:thoughtId`**

```json
// example data
{
  "thoughtText": "can you smell what the rock is cooking",
  "username": "TheRock"
}
```

```json
// sample response
{
  "success": true,
  "data": {
    "thoughtText": "can you smell what the rock is cooking",
    "username": "TheRock",
    "_id": "624c2422a4c567a377d52ab0",
    "reactions": [],
    "__v": 0,
    "reactionCount": 0
  }
}
```

---

### `POST` to add a reaction stored in a individual thought's `reactions` array

**`/api/thoughts/:thoughtId/reactions`**

```json
// sample response
{
  "reactionBody": "Austin 3:16 says i just whooped your ass",
  "username": "StoneColdSteveAustin"
}
```
