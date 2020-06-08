export type Post = {
  id: string;
  title: string;
  body: string;
  publishedAt: Date;
  author: {
    id: string;
    name: string;
  };
};

export type Posts = Post[];