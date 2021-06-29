import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton,TernaryButton } from '../components/Button';
import AppIntroSlider from 'react-native-app-intro-slider';



const slides = [
  {
    key: 'somethun',
    title: 'CANDY BAR COOKIE DOUGH',
    text: 'Comfort food is, to many families, countries, and cultures, a spectrum. To some, it may be a soothing platter of macaroni and cheese; to others, it’s reaching for a bowll',
    image: require('../../assets/cheesePizza.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'SNICKERDOODLE PROTEIN SCONES',
    text: 'These cinnamon sugar Snickerdoodle scones make a delicious protein breakfast treat for the holidays. With the perfect crunch on the outside and a soft center,',
    image: require('../../assets/meatPizza.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'STUFFED CRUST PROTEIN PIZZA',
    text: 'With stuffed mozzarella crust and garden fresh herbs, this delicious protein pizza will trick your taste buds and fit your macros!',
    image: require('../../assets/cheesePizza.png'),
    backgroundColor: '#22bcb5',
  }
];

const OnBoardScreen = ({ navigation }) => {

  const Button = () => {
    return (
      <>
        <View style={style.indicatorContainer}>
        </View>
       <View  style={{marginBottom:30}}>
       <PrimaryButton 
          onPress={() => navigation.navigate('Home')}
          title="Get Started"
        />
       </View>
       <View  style={{marginBottom:50}}>
       <TernaryButton 
          onPress={() => navigation.navigate('Home')}
          title="Login"
        />
       </View>

      </>
    )
  }

  const RenderItem = ({ item }) => {
    return (
      <SafeAreaView style={{flex:1}}>

        <View style={{height:100, alignItems: 'center' }}>
          <Image
            style={{
              width: '80%',
              resizeMode: 'contain',
              top: -50,
            }}
            source={item.image}
          />
        </View>
        <View>
          <Text style={style.textContainer}>
            {item.title}
          </Text>
          <Text style={{
            marginTop: 10,
            fontSize: 16,
            textAlign: 'center',
            color: COLORS.grey,
            paddingHorizontal:20
          }}>{item.text}</Text>
        </View>

      </SafeAreaView>
    )
  }
  return (
    <ImageBackground style={{ flex: 1, }}>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        showDoneButton={false}
        showNextButton={false}
        dotClickEnabled={false}
        showSkipButton={false}
        doneLabel={false}
        bottomButton
      />
      <Button />
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  textContainer: {
    fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: 'blue',
    marginTop:250,
    color: COLORS.JordyBlue,
  },
});

export default OnBoardScreen;
