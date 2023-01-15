import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../assets/colors';
import {logo} from '../assets/images';

const SplashScreen = ({navigation}) => {
  const timeoutHelper = action => {
    const timer = setTimeout(() => {
      action();
    }, 1500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    timeoutHelper(() => {
      navigation.replace('TodaysScreen');
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image source={logo} resizeMode={'contain'} style={styles.image} />
      </View>

      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 350,
  },
});
