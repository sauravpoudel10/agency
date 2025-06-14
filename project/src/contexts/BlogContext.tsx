import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime: number;
}

interface BlogState {
  posts: BlogPost[];
}

type BlogAction = 
  | { type: 'ADD_POST'; payload: BlogPost }
  | { type: 'UPDATE_POST'; payload: BlogPost }
  | { type: 'DELETE_POST'; payload: string };

const initialState: BlogState = {
  posts: [
    {
      id: '1',
      title: 'The Future of Digital Marketing: Trends to Watch in 2024',
      excerpt: 'Discover the latest digital marketing trends that will shape the industry in 2024 and beyond.',
      content: `Digital marketing continues to evolve at a rapid pace, and staying ahead of the curve is crucial for businesses looking to maintain their competitive edge. As we move through 2024, several key trends are emerging that will fundamentally reshape how brands connect with their audiences.

**Artificial Intelligence and Machine Learning**

AI is no longer a futuristic concept – it's here and transforming marketing strategies. From predictive analytics to personalized content creation, AI is enabling marketers to deliver more relevant experiences at scale. Machine learning algorithms can now analyze vast amounts of customer data to predict behavior, optimize ad spend, and automatically adjust campaigns in real-time.

**Voice Search Optimization**

With the proliferation of smart speakers and voice assistants, voice search is becoming increasingly important. Marketers need to optimize their content for conversational queries and long-tail keywords that people use when speaking rather than typing.

**Privacy-First Marketing**

As privacy regulations become more stringent and consumers become more conscious about their data, marketers must adapt to a privacy-first world. This means focusing on first-party data collection and building trust through transparent data practices.

**Video Content Dominance**

Video content continues to dominate social media platforms and search results. Short-form videos, live streaming, and interactive video content are becoming essential components of successful marketing strategies.

The key to success in this evolving landscape is to remain agile, test new approaches, and always keep the customer at the center of your strategy.`,
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Digital Marketing', 'Trends', 'AI', 'Strategy'],
      readTime: 8
    },
    {
      id: '2',
      title: 'Building Brand Authority Through Content Marketing',
      excerpt: 'Learn how to establish your brand as an industry leader through strategic content marketing.',
      content: `Content marketing has evolved from a nice-to-have to an essential component of any successful marketing strategy. In today's saturated digital landscape, brands that consistently deliver valuable, relevant content are the ones that build lasting relationships with their audiences and establish themselves as industry authorities.

**Understanding Your Audience**

The foundation of effective content marketing lies in deeply understanding your audience. This goes beyond basic demographics to include psychographics, pain points, preferences, and behaviors. Create detailed buyer personas and use them to guide your content creation process.

**Consistency is Key**

Building brand authority doesn't happen overnight. It requires consistent effort and a long-term commitment to providing value. Develop a content calendar and stick to it, ensuring that you're regularly publishing high-quality content across all your channels.

**Diversify Your Content Types**

Different people consume content in different ways. Some prefer reading detailed blog posts, others enjoy watching videos, and many like listening to podcasts during their commute. Diversify your content portfolio to reach your audience wherever they are.

**Measure and Optimize**

Track the performance of your content using analytics tools. Look at metrics like engagement rates, time on page, social shares, and conversion rates to understand what resonates with your audience and optimize accordingly.

Remember, content marketing is not about selling – it's about providing value and building trust. When you consistently deliver valuable content, sales will naturally follow.`,
      author: 'Michael Chen',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Content Marketing', 'Branding', 'Authority', 'Strategy'],
      readTime: 6
    },
    {
      id: '3',
      title: 'Social Media ROI: Measuring What Matters',
      excerpt: 'Understand how to properly measure and improve your social media return on investment.',
      content: `Social media marketing can feel like a black box when it comes to measuring ROI. Many businesses struggle to connect their social media efforts to tangible business outcomes. However, with the right approach and metrics, you can clearly demonstrate the value of your social media investments.

**Setting Clear Objectives**

Before you can measure ROI, you need to define what success looks like for your business. Are you looking to increase brand awareness, generate leads, drive sales, or improve customer service? Each objective requires different metrics and measurement approaches.

**Beyond Vanity Metrics**

While likes, follows, and shares are easy to track, they don't necessarily translate to business value. Focus on metrics that directly correlate with your business objectives, such as click-through rates, conversion rates, cost per acquisition, and customer lifetime value.

**Attribution Modeling**

Social media often plays a role in the customer journey without being the final touchpoint before conversion. Implement proper attribution modeling to understand how social media contributes to your overall marketing funnel.

**Tools and Tracking**

Utilize social media analytics tools, Google Analytics, and marketing automation platforms to track the customer journey from social media to conversion. Set up proper tracking and UTM parameters to accurately measure the impact of your social media efforts.

**Calculating True ROI**

To calculate ROI, you need to consider both the direct costs (ad spend, tools, salaries) and the indirect costs (time, opportunity cost) of your social media efforts. Compare these costs to the revenue generated from social media-driven conversions.

The key is to be patient and consistent in your measurement approach, as social media ROI often compounds over time.`,
      author: 'Emma Rodriguez',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'ROI', 'Analytics', 'Measurement'],
      readTime: 7
    }
  ]
};

function blogReducer(state: BlogState, action: BlogAction): BlogState {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post => 
          post.id === action.payload.id ? action.payload : post
        )
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    default:
      return state;
  }
}

interface BlogContextType {
  state: BlogState;
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  getPost: (id: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString()
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  const updatePost = (post: BlogPost) => {
    dispatch({ type: 'UPDATE_POST', payload: post });
  };

  const deletePost = (id: string) => {
    dispatch({ type: 'DELETE_POST', payload: id });
  };

  const getPost = (id: string) => {
    return state.posts.find(post => post.id === id);
  };

  return (
    <BlogContext.Provider value={{ state, addPost, updatePost, deletePost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}