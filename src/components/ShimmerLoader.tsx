import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const ShimmerLoader: React.FC = () => {
  const data = Array.from({length: 7}, (_, i) => i + 1);

  const renderItem = () => (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.userContainer}>
        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.contentContainer}>
        <ShimmerPlaceholder style={styles.shimmerText} />
        <ShimmerPlaceholder style={styles.shimmerTitle} />
        <ShimmerPlaceholder style={styles.shimmerBody} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        contentContainerStyle={{padding: 10}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
  },
  shimmerText: {
    width: 100,
    height: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  shimmerTitle: {
    width: '80%',
    height: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  shimmerBody: {
    width: '100%',
    height: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default ShimmerLoader;
