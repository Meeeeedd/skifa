## Specification pf domaine model

* `User has a friends array to store friend relationships. Each friend relationship includes the friendId and status (which can be 'pending' or 'accepted').
* Message represents individual messages with content, sender, recipient, and timestamp.
Invitation represents friend invitations with sender, recipient, and status (which can be 'pending', 'accepted', or 'rejected').
* Conversation represents a conversation with participants and an array of messages.