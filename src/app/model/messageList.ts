export interface MessageList {
    messages: Array<MessageListItem>;
    pageToken: string;
  }

export interface MessageListItem {
    author: Array<AuthorItem>;
    content: string;
    id: number;
    updated: string;
  }

export interface AuthorItem {
    name: string;
    photoUrl: string;
  }
