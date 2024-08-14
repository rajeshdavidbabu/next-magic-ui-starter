import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    content: string;
    date: string;
    author: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    };
    category: string;
  }
}

const STRAPI_API_URL = 'https://your-strapi-cloud-url.com/api'; // Nahraďte skutečnou URL vašeho Strapi Cloud

async function getBlogPost(slug: string): Promise<BlogPost> {
  const res = await fetch(`${STRAPI_API_URL}/blog-posts/${slug}?populate=*`, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog post');
  }
  const data = await res.json();
  return data.data;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${STRAPI_API_URL}/blog-posts?populate=*`, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  const data = await res.json();
  return data.data;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return <div>Příspěvek nebyl nalezen</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <article className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src={post.attributes.image.data.attributes.url}
              alt={post.attributes.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-8">
            <Link href="/blog" className="text-primary-light hover:text-primary transition-colors duration-300 mb-4 inline-block">
              ← Zpět na blog
            </Link>
            <span className="text-primary-light text-sm font-medium mb-2 block">{post.attributes.category}</span>
            <h1 className="text-4xl font-spaceBold text-primary mb-4">{post.attributes.title}</h1>
            <p className="text-sm font-raleway text-primary-light mb-8">
              {post.attributes.date} | {post.attributes.author}
            </p>
            <div 
              className="font-raleway text-primary-light prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.attributes.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}