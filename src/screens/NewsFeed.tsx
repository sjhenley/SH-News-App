import React from 'react';
import { ScrollView } from 'react-native';
import NewsCard from '../components/NewsCard';
import NewsArticles from '../../assets/news.json';
import NewsArticle from '../models/NewsArticle';

import ContainerStyle from '../styles/ContainerStyle';

const NewsFeed: React.FC = () => (
  <ScrollView contentContainerStyle={ContainerStyle.container}>
    {
      NewsArticles.articles.map((article) => (
        <NewsCard key={article.title} article={article as NewsArticle} />
      ))
    }
  </ScrollView>
);

export default NewsFeed;
