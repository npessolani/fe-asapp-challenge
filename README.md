# Fe-asapp-challenge
ASAPP frontend challenge

## Environment setup

 - Install [Node.js](https://nodejs.org/)
   - Recommended method is by using [NVM](https://github.com/creationix/nvm)
   - Recommended Node.js version is the latest LTS
 - Update `npm` to the latest version by running `npm i -g npm@latest`
 - Run `npm install` to install the project dependencies

## Development

### 1) Build the assets:

```
npm run build
```

### 2) Run the app:

```
npm run start
```

### 3) Run the development:

```
npm run dev
```

### 4) Navigate to:
```
https://localhost:3000/messaging/
```

### 5) Run the test:
```
npm run test
```

# Info Challenge
ASAPP Frontend Challenge
========================

Welcome to your challenge project!

For this challenge, we ask that you implement a solution at home in your own time. When you're ready, please send us your results - including code, commit history if available, and a readme with setup instructions.


The Details
-----------

Your challenge is to build a split screen chat interface. In one browser tab, there should be two side-by-side chat windows. On the left is Laura's chat window and she's talking to Rob. On the right is Rob's chat window and he's talking to Laura.

In her window, Laura is able to type and send a message to Rob. The message should appear as a sent message in her window and as a received message in his window. Additionally, when Laura is in the middle of typing, there should be an indicator in Rob's window that she's typing. And all this should work in the other direction for Rob sending a message to Laura.

This challenge is contained to one browser tab, but in real life, Laura and Rob would be on different devices and messages would be sent over a central server. Building a server isn’t part of this challenge, but we ask that you structure your code in such a way that it’d be straightforward to get rid of the split screen and plug in a server to support real remote chatting.


Suggestions
-----------

- At ASAPP, we use a lot of React. For the challenge, we'd recommend any JavaScript based framework such as React or Angular.
- Use open source libraries rather than reinventing the wheel (just keep in mind there should be enough original code to show off your coding ability). Here are a couple of relevant tools that we use:
    github.com/facebook/react
    github.com/moment/moment
- Focus on both user experience and code quality. What’s the UI/UX like for typical chat applications (think Slack, iMessage, etc)? What are standard best practices for a modern javascript, single page application? How will your code extend if features are added or requirements change?
- The project is designed to not need a server, because we want to see you shine on frontend development. If you really want to build a backend, we ask that you only do so if you feel the backend will be a good reflection of your coding abilities.
- Have fun!