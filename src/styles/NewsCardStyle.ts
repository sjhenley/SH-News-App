import { StyleSheet } from 'react-native';

const NewsCardStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 5,
    width: '75%',
  },
  content: {
    fontSize: 12,
    padding: 5,
  },
  header: {
    fontSize: 18,
    padding: 5,
  },
  image: {
    height: 300,
    marginTop: 10,
    width: '100%',
  },
});

export default NewsCardStyle;
