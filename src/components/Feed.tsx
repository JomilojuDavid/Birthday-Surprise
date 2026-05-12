import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from 'lucide-react';
import type { Message } from '../types';

const images = [
  '/gallery/img1.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img6.jpg',
];

interface Post {
  id: string;
  type: 'text' | 'image' | 'video';
  author: string;
  avatar: string;
  content: string;
  image?: string;
  video?: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const Feed = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch('/messages.json')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const posts: Post[] = [
    {
      id: 'birthday-message',
      type: 'text',
      author: 'Birthday Surprise',
      avatar: '🎂',
      content: 'Happy Birthday Abisinuola! 🎉✨ This is a special day made just for you. I hope you feel loved and appreciated today and every day. You deserve all the happiness in the world! 💕',
      timestamp: '2h',
      likes: 42,
      comments: 8
    },
    ...messages.slice(0, 3).map((message, index) => ({
      id: `message-${index}`,
      type: 'text' as const,
      author: message.name,
      avatar: message.name.charAt(0).toUpperCase(),
      content: message.message,
      timestamp: `${Math.floor(Math.random() * 24) + 1}h`,
      likes: Math.floor(Math.random() * 20) + 5,
      comments: Math.floor(Math.random() * 5) + 1
    })),
    ...images.slice(0, 3).map((image, index) => ({
      id: `gallery-${index}`,
      type: 'image' as const,
      author: 'Our Memories',
      avatar: '💕',
      content: `Memory #${index + 1} — one of my favorite moments with you ❤️`,
      image,
      timestamp: `${Math.floor(Math.random() * 48) + 1}h`,
      likes: Math.floor(Math.random() * 50) + 20,
      comments: Math.floor(Math.random() * 10) + 3
    }))
  ];

  return (
    <div className="bg-black">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          className="border-b border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Post Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full p-0.5">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {post.avatar}
                </div>
              </div>
              <div>
                <span className="text-white font-medium text-sm">{post.author}</span>
                <span className="text-gray-400 text-xs ml-2">• {post.timestamp}</span>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>

          {/* Post Content */}
          {post.type === 'image' && post.image && (
            <div className="relative">
              <img
                src={post.image}
                alt="Post content"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          )}

          {post.type === 'video' && post.video && (
            <div className="relative">
              <video
                src={post.video}
                className="w-full aspect-square object-cover"
                controls
                preload="metadata"
              />
            </div>
          )}

          {/* Post Actions */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleLike(post.id)}
                  className="post-action"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      likedPosts.has(post.id) ? 'text-red-500 fill-red-500' : 'text-white'
                    }`}
                  />
                </motion.button>
                <motion.button className="post-action">
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button className="post-action">
                  <Share className="w-6 h-6 text-white" />
                </motion.button>
              </div>
              <Bookmark className="w-6 h-6 text-white" />
            </div>

            {/* Likes */}
            <div className="text-sm text-white font-medium mb-1">
              {likedPosts.has(post.id) ? post.likes + 1 : post.likes} likes
            </div>

            {/* Caption */}
            <div className="text-sm">
              <span className="text-white font-medium mr-2">{post.author}</span>
              <span className="text-gray-300">{post.content}</span>
            </div>

            {/* Comments */}
            {post.comments > 0 && (
              <div className="text-sm text-gray-400 mt-1">
                View all {post.comments} comments
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Feed;