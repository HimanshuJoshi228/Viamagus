import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {bitcoinbg, coin} from '../assets/images';

const TodaysGame = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Text style={styles.heading}>Today’s Games</Text>
        <View style={styles.cardContainer}>
          <LinearGradient
            start={{x: 0.7, y: 0}}
            end={{x: 3.5, y: 0}}
            colors={[COLORS.bottomTabActive, COLORS.gradientColorEnd]}
            style={styles.linearGradient}>
            <View style={styles.bitBG}>
              <Image
                source={bitcoinbg}
                resizeMode={'stretch'}
                style={{width: 80, height: 50}}
              />
            </View>
            <View style={[styles.flexBox, {marginBottom: 16}]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.topText}>Under or Over</Text>
                <MaterialIcons
                  name="info-outline"
                  color={COLORS.text2}
                  size={13}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.startText}>Starting in</Text>
                <MaterialCommunityIcons
                  name="clock"
                  color={COLORS.text2}
                  size={13}
                />
                <Text style={styles.timeText}>03:23:12</Text>
              </View>
            </View>
            <View>
              <Text style={styles.titleLight}>Bitcoin price will be under</Text>
              <Text style={styles.titleBold}>
                $24,524 at 7 a ET on 22nd Jan’21
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.middleContent}>
            <View style={styles.flexBox}>
              <View>
                <Text style={styles.tableHeading}>Prize Pool</Text>
                <Text style={styles.tableValue}>$12,000</Text>
              </View>
              <View>
                <Text style={styles.tableHeading}>Under</Text>
                <Text style={styles.tableValue}>3.25x</Text>
              </View>
              <View>
                <Text style={styles.tableHeading}>Over</Text>
                <Text style={styles.tableValue}>1.25x</Text>
              </View>
              <View>
                <Text style={styles.tableHeading}>Entry Fees</Text>
                <View style={[styles.flexBox, {justifyContent: 'flex-end'}]}>
                  <Text style={styles.tableValue}>5</Text>
                  <Image source={coin} style={styles.coin} />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.questionText}>What’s your prediction?</Text>
              <View style={styles.flexBox}>
                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons
                    name="arrow-down-bold"
                    size={13}
                    color={COLORS.white}
                  />
                  <Text style={styles.btnText}>Under</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {backgroundColor: COLORS.bottomTabActive},
                  ]}>
                  <MaterialCommunityIcons
                    name="arrow-up-bold"
                    size={13}
                    color={COLORS.white}
                  />
                  <Text style={styles.btnText}>Over</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View>
                <MaterialCommunityIcons
                  name="arrow-up-bold"
                  size={13}
                  color={COLORS.white}
                />
                <Text>355 Players</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="arrow-up-bold"
                  size={13}
                  color={COLORS.white}
                />
                <Text>355 Players</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default TodaysGame;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text1,
    marginTop: 13,
  },
  cardContainer: {
    borderColor: COLORS.gray,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    marginTop: 17,
  },
  linearGradient: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 4,
  },
  bitBG: {
    backgroundColor: COLORS.voilet,
    paddingTop: 7,
    width: 130,
    borderTopEndRadius: 70,
    borderTopStartRadius: 200,
    alignItems: 'flex-end',
    paddingRight: 15,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  topText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text2,
    marginRight: 8,
    textTransform: 'uppercase',
  },
  startText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.text3,
    marginRight: 8,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text2,
    marginLeft: 8,
  },
  titleLight: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text2,
  },
  titleBold: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
  },
  middleContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tableHeading: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.placeholder,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  tableValue: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text1,
    marginRight: 8,
  },
  coin: {
    width: 13,
    height: 13,
  },
  questionText: {
    marginTop: 20,
    marginBottom: 14,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text4,
    lineHeight: 17,
  },
  btn: {
    backgroundColor: '#452C55',
    borderRadius: 45,
    paddingVertical: 11,
    paddingHorizontal: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
    lineHeight: 17,
    marginLeft: 4,
  },
});
