import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParams} from '../navigation/AppNavigator';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Social App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
