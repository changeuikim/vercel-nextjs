import React from 'react';
import Post, { PostProps } from '@/components/Post';

async function fetchFeed() {
  const feed = [
    {
      id: '1',
      title: 'Prisma는 Next.js에 최적화된 ORM입니다',
      content:
        '[Prisma](https://github.com/prisma/prisma)와 Next.js는 꽤 잘 어울립니다.',
      published: false,
      author: {
        name: '익명의 작가',
        email: 'noname@email.com',
      },
    },
  ];
  return feed;
}

const FeedPage: React.FC = async () => {
  const feed: PostProps[] = await fetchFeed();

  return (
    <>
      <div className="page p-6">
        <h1 className="mb-6 text-3xl font-bold">피드</h1>
        <main>
          {feed.map((post) => (
            <div
              key={post.id}
              className="post mb-6 bg-white p-4 shadow transition-shadow duration-200 hover:shadow-md"
            >
              <Post {...post} />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default FeedPage;
