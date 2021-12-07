import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
export const loginStyle = StyleSheet.create({
  ResultContainer:{
    paddingBottom:20,
    alignItems: 'center',
   
  },
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2.5,
  },
  logo:{
    width: 150,
    height: 150,
  },
  Fitnessio:{
    color:'white',
    fontSize: 32
  },
  bottom:{
   
    backgroundColor: 'white',
    
    borderTopStartRadius:45,
    borderTopEndRadius:45,
    bottom:35,
    
  },
  bottomContainer:{
    padding:45,
    paddingBottom:10
    
  },
  welcomeText:{
    color:'#1f1b5c',
    fontSize:23
  },
  loginContainer:{
    padding:30,
    paddingTop:10,
    paddingBottom:10
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },

  buttonGroupStyle: {
    width: Dimensions.get('window').width / 1.1,
  },
  cardStyle: {
    width: Dimensions.get('window').width,
  },
  updateAdd: {
    flex: 0.99,
  },
  plus: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  touchableSymble: {
    position: 'relative',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: Dimensions.get('window').width / 3,
    alignItems: 'flex-end',
  },
});
