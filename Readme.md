WORK IN PROGRESS

Current features:
- basic chat app (MEAN Stack, Socket.io, jQuery)
- user can login (if username does not exist, an account with the desired username and password is created)
- app runs on localhost
  - if multiple browser windows are opened, each can function as an account and send messages
  - if one window sends a message, the other windows automatically update that message (using Socket.io)
  
Todo (short-term): 
- some issues with password
  - encrypt the password at some point before storing it
- add separate chats between:
  - pairs of users
  - groups of users
- add tangent feature
- construct a viable schema for all of the above
- quality of life
  - have scroll bar snap to bottom when user chats
  - have auto update for all users in a chat when someone posts something

Todo (medium-term):
- add a remote client
- and a remote server

Potential long-term questions:
1. How to dump data we don't need (old testing, etc.)
  a. For now we can just delete things in mLab, but when we get larger datasets (in prod) we will need to do it programatically
2. Update-proofing (changes in schema, moving the DB to another host, etc.)
  a. Confirmed: Old schema related messages render properly for our purposes
