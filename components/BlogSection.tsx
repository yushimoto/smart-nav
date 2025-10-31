"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogConfig } from '@/config/blog';

interface BlogPost {
  _id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: string;
  tags: any[]; // Hashnode tags can have different structures
}

interface BlogSectionProps {
  username?: string; // Your Hashnode username (optional, will use config default)
}

const BlogSection: React.FC<BlogSectionProps> = ({ username = blogConfig.hashnodeUsername }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using Hashnode's new API structure
        const query = `
          query Publication {
            publication(host: "${username}.hashnode.dev") {
              posts(first: ${blogConfig.display.maxPosts}) {
                edges {
                  node {
                    id
                    title
                    brief
                    slug
                    coverImage {
                      url
                    }
                    publishedAt
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `;

        // Use the new Hashnode API structure
        const response = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Hashnode API response:', data); // Debug log
        
        if (data.data?.publication?.posts?.edges) {
          const posts = data.data.publication.posts.edges.map((edge: any) => ({
            _id: edge.node.id,
            title: edge.node.title,
            brief: edge.node.brief,
            slug: edge.node.slug,
            coverImage: edge.node.coverImage?.url || '',
            dateAdded: edge.node.publishedAt,
            tags: edge.node.tags || [],
          }));
          setPosts(posts);
        } else {
          console.log('No posts found in API response');
          setPosts([]);
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(`Failed to fetch blog posts: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchBlogPosts();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-[200px] bg-gray-300 rounded-[15px] mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Unable to load blog posts at the moment.</p>
        <Link
          href={`https://${username}.hashnode.dev`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-colorOrangyRed hover:underline mt-2 inline-block"
        >
          Visit our blog directly
        </Link>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No blog posts found.</p>
        <Link
          href={`https://${username}.hashnode.dev`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-colorOrangyRed hover:underline mt-2 inline-block"
        >
          Start writing on Hashnode
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <article 
          key={post._id} 
          className="jos group rounded-[20px] bg-colorLinenRuffle p-6 transition-all duration-300 hover:shadow-lg" 
          data-jos_animation="fade-up" 
          data-jos_delay={`${(index + 1) * 0.1}`}
        >
          <div className="mb-4 overflow-hidden rounded-[15px]">
            <Image
              src={post.coverImage || '/assets/img_placeholder/ai-labs-blog-default.svg'}
              alt={post.title}
              width={400}
              height={250}
              className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to default image if Hashnode image fails
                const target = e.target as HTMLImageElement;
                target.src = '/assets/img_placeholder/ai-labs-blog-default.svg';
              }}
            />
          </div>
          
          <div className="mb-4">
            {post.tags && post.tags.length > 0 && (
              <span className="inline-block rounded-full bg-colorOrangyRed px-3 py-1 text-sm font-medium text-white">
                {post.tags[0]?.name || 'AI'}
              </span>
            )}
          </div>
          
          <h3 className="mb-3 text-xl font-semibold leading-tight group-hover:text-colorOrangyRed line-clamp-2">
            {post.title}
          </h3>
          
          <p className="mb-4 text-gray-600 line-clamp-3">
            {post.brief}
          </p>
          
          <div className="flex items-center justify-between">
            <Link
              href={`https://${username}.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-colorOrangyRed hover:text-orange-600"
            >
              Read More
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <span className="text-sm text-gray-500">
              {new Date(post.dateAdded).toLocaleDateString()}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogSection;
