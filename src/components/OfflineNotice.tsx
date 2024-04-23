import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNetInfo} from '@react-native-community/netinfo';

export const OfflineNotice = () => {
  const netInfo = useNetInfo();

  return true ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </SafeAreaView>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: Platform.OS === 'ios' ? 100 : 45,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: '#000',
  },
});
