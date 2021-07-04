# translatethread-ui

This is the new version of https://translatethread.com. Following is the techstack used for this new version:

- vuejs (frontend)
- golang (backend)
- postgres (database)
- docker (packaging)
- kubernetes (deployment)

## how to setup translatethread-ui on your laptop

- download nodejs from https://nodejs.org/en/download/ for your operating system
- check your version of node and npm 
  - `node -v`
  - `npm -v`
- install git on your laptop
  - https://desktop.github.com/
  - login using your github credentials
  - clone the repo git@github.com:rajatjindal/translatethread-ui.git
- Run: `cd translatethread-ui`
- Run: `npm install`
- Run: `yarn dev`
  - This will start a local live server
  - As and when you make change, it will be compiled and deployed live on your local server
- This should bringup the UI at: http://localhost:3000
- Now navigate to https://e.translatethread.com/thread/1411506884201238529
- In a new window navigate to http://localhost:3000/thread/1411506884201238529

## lets make a small change and observe it getting reflected
- Open file `components/Tweet.vue`
- At line #29, where we currently have `{{ tweet.Author }}`, change it to `{{ tweet.Author }} - this is author username`
- Look at your local live server again, observe that the change is now live.

## All set, start making changes now
