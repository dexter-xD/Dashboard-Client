export type Post = {
    id: string;
    isLatest: boolean;
    isFeatured: boolean;
    publishDate: string;
    updatedAt: string;
    category: string[];
    tag: string[];
    slug: string;
    title: string;
    excerpt: {
      text: string;
    };
    coverImg: {
      url: string;
    };
    content: {
      markdown: string;
    };
    author: string;
  };

  export type HygraphEnv = {
    HYGRAPH_API_URL: string;
    HYGRAPH_API_TOKEN: string;
  };
  

export interface UserInfo {
  id: string;
  name: string;
  email: string;
}
  
export interface AuthState {
  userInfo: UserInfo | null;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}