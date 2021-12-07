import React, {useState, Component, useRef} from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {loginStyle as Styles} from '../Style/index';
import Icon from 'react-native-vector-icons/Entypo';
import {Input, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

const index = props => {
  
  const navigation = props.navigation;
  const [OriginalPrice, setOriginalPrice] = useState(0);
  const [Discount, setDiscount] = useState(0);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../Images/welcomePage.jpg')}
        style={Styles.background}>
        <Text style={Styles.Fitnessio}>Discount Calculator</Text>
      </ImageBackground>

      <View style={Styles.bottom}>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.welcomeText}>Welcome</Text>
          <TouchableOpacity onPress={() => navigation.push('history')}>
            <Text style={{color: 'black'}}>
              Want to check history?{' '}
              <Text style={{color: 'red', fontSize: 16}}>Check history</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.loginContainer}>
        <Input
          placeholder="Original Price"
          onChangeText={v => {
            if(v<0){
              alert("Invalid Price")
            }else{
              setOriginalPrice(v)
            }
            }}
          leftIcon={<Icon name="price-tag" size={15} color="black" />}
        />
        <Input
          placeholder="Discount Percentage"
          onChangeText={v => {
            if(v<0 || v>100){
              alert("Invalid Discount Percentage")
            }else{
              setDiscount(v)
            }
            }}
          leftIcon={<Icon name="paypal" size={15} color="black" />}
        />
        <View style={Styles.ResultContainer}>
          {OriginalPrice !== 0 && Discount !== 0 ? (
            <View>
              <Text style={{fontSize: 20}}>You Save:{OriginalPrice*Discount/100}</Text>
              <Text style={{fontSize: 20}}>Final Price:{OriginalPrice-(OriginalPrice*Discount/100)}</Text>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>
        <LinearGradient
          start={{x: 0.3, y: 0.25}}
          end={{x: 0.5, y: 0.7}}
          locations={[0.3, 1.6, 0.6]}
          colors={['#C0C0C0', '#5b5757', '#808080']}
          style={Styles.linearGradient}>
          <TouchableOpacity onPress={()=>{
            navigation.push('history',[OriginalPrice,(OriginalPrice*Discount/100),( OriginalPrice-(OriginalPrice*Discount/100))])
            }}>
            <Text style={Styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};
export default index;
