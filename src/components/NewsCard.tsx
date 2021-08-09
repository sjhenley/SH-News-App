import React from 'react';
import { View, Text, Image, Linking, Pressable } from 'react-native';
import NewsArticle from '../models/NewsArticle';
import NewsCardStyle from '../styles/NewsCardStyle';

type Props = {
  article: NewsArticle,
}

const NewsCard: React.FC<Props> = ({ article }) => (
  <Pressable
    onPress={(): Promise<unknown> => Linking.openURL(article.url)}
    style={NewsCardStyle.container}
  >
    <View>
      <Text style={NewsCardStyle.header}>{article.title}</Text>
      <Text style={NewsCardStyle.content}>{article.description}</Text>
      <Image style={NewsCardStyle.image} source={{ uri: article.urlToImage }} />
    </View>
  </Pressable>
);

export default NewsCard;
