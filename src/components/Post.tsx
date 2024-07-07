'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string | null;
    email: string | null;
  } | null;
  content: string | null;
  published: boolean;
};

const Post: React.FC<PostProps> = ({ id, title, author, content }) => {
  const router = useRouter();
  const authorName = author ? author.name : 'Unknown author';

  return (
    <div onClick={() => router.push(`/p/${id}`)}>
      <div className="cursor-pointer p-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <small className="text-gray-600">작성자 : {authorName}</small>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;
