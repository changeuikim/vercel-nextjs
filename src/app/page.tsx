import React from 'react';
import Post, { PostProps } from '@/components/Post';
import prisma from 'lib/prisma';

async function fetchFeed() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
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
