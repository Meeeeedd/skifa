# Design & Implement Chatt application

## Features

1. Authenticate users
2. Subscribe(Connect) to incaming messages
3. Create Chats and messages
4. Add and remove people from chats
5. Edit and delete chat and message data.

## Events
1. onConnect : triger when connection/aurthentication is completed
2. onFailAuth : triger when connection/authentication fail
3. onGetChats : triger when the person fetches their chats history
4. onNewChat : triger when the person create new Chat
5. onEditChat : triger a user edit chat title
6. onDeleteChat : triger when a user one of their chats (must be admin)
7. inAddPerson : triger when a person is added to chat
8. onRemoveChat : triger when a is removed/deleted from a chat
9. onGetMessages : triger when a person get a chat's messages
10. onNewMessage : triger when a person posts a new message in one of the chats
11. onEditMessage : triger a person edits a new message in one of the chats
12. onDeleteMessage: triger when a person deletes a new message in one of the chats

## functions
1. getChats
2. newChats
3. editChat
4. deleteChat
5. addPerson
6. removePerson
7. getMessages
8. sendMessage
9. editMessage
10. deleteMessage

### Chat Object
```json
    {
    "id": 1,
    "admin": "ferid",
    "title": "MERN Js",
    "created": "2024-09-05T20:28:22.352373Z",
    "people": [
        {
            "person": "leila"
        }
    ]
}

```

### Chat/Person Association
```json
    { person: "ferid" }
```

### Message Object
```json
    {
        "id": 1,
        "sender": "ferid",
        "text": "Hello World",
        "created": "2020-09-07T13:20:26.936400Z"
    }
```


