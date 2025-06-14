import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { Calendar, User, Clock, ArrowLeft, Share2, BookmarkPlus } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const { getPost } = useBlog();
  
  const post = getPost(id || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }
      if (paragraph.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Share */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Share this post</h3>
                <div className="flex space-x-3">
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Share2 size={16} />
                  </button>
                  <button className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <BookmarkPlus size={16} />
                  </button>
                </div>
              </div>

              {/* Author */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author}</div>
                    <div className="text-sm text-gray-500">Marketing Expert</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Experienced marketing professional helping businesses grow through strategic campaigns and data-driven insights.
                </p>
              </div>

              {/* Tags */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-emerald-300 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how our marketing strategies can help you achieve your goals.
          </p>
          <button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;