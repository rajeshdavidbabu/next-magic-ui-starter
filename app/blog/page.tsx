import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    excerpt: string;
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

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
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
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return []; // Vrátíme prázdné pole v případě chyby
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-spaceBold text-primary mb-12 text-center">
          Blog DigiMedic
        </h1>
        
        {/* Featured Post */}
        {featuredPost && (
          <article className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={featuredPost.attributes.image.data.attributes.url}
                  alt={featuredPost.attributes.title}
                  width={600}
                  height={400}
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <span className="text-primary-light text-sm font-medium mb-1">{featuredPost.attributes.category}</span>
                <h2 className="text-3xl font-spaceBold text-primary mb-2">{featuredPost.attributes.title}</h2>
                <p className="text-sm font-raleway text-primary-light mb-4">
                  {featuredPost.attributes.date} | {featuredPost.attributes.author}
                </p>
                <p className="font-raleway text-primary-light mb-4">{featuredPost.attributes.excerpt}</p>
                <Link href={`/blog/${featuredPost.id}`} className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
                  Číst více →
                </Link>
              </div>
            </div>
          </article>
        )}
        
        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={post.attributes.image.data.attributes.url}
                  alt={post.attributes.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <span className="text-primary-light text-sm font-medium mb-1">{post.attributes.category}</span>
                <h2 className="text-2xl font-spaceBold text-primary mb-2">{post.attributes.title}</h2>
                <p className="text-sm font-raleway text-primary-light mb-4">
                  {post.attributes.date} | {post.attributes.author}
                </p>
                <p className="font-raleway text-primary-light mb-4">{post.attributes.excerpt}</p>
              </div>
              <div className="p-6 pt-0">
                <Link href={`/blog/${post.id}`} className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
                  Číst více →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}