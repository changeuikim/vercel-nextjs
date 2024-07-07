import React from 'react';
import ReactMarkdown from 'react-markdown';
import prisma from 'lib/prisma';

async function fetchPost(id: String) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
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
