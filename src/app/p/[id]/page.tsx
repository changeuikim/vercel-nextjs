import React from 'react';
import ReactMarkdown from 'react-markdown';

async function fetchPost(id: string) {
  const post = {
    id: '1',
    title: 'Prisma는 Next.js에 최적화된 ORM입니다',
    content:
      '[Prisma](https://github.com/prisma/prisma)와 Next.js는 꽤 잘 어울립니다.',
    published: false,
    author: {
      name: '익명의 작가',
      email: 'noname@email.com',
    },
  };
  return post;
}

interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const post = await fetchPost(params.id);

  if (!post) {
    return <div>포스트가 없습니다</div>;
  }

  let { title } = post;
  if (!post.published) {
    title = `${title} (Draft)`;
  }

  return (
    <div className="bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <p className="mb-4 text-gray-600">
        작성자 : {post?.author?.name || 'Unknown author'}
      </p>
      <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
    </div>
  );
};

export default PostPage;
