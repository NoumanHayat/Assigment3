import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';

import {homeStyle as styles} from '../Style/index';
import Icon from 'react-native-vector-icons/AntDesign';

import {ButtonGroup, Card} from 'react-native-elements';
const HomeScreen = props => {
  console.log(props)
  const [DATA, setDATA] = useState([
    {
      id: 0,
      OriginalPrice: '12000',
      Discount: '4000',
      FinalPrice: '8000',
    },
    {
      id: 1,
      OriginalPrice: '12000',
      Discount: '4000',
      FinalPrice: '80000',
    },
    {
      id: 2,
      OriginalPrice: '10000',
      Discount: '4000',
      FinalPrice: '6000',
    },
  ]);
  useEffect(() => {
   setDATA([...DATA,{
    id: DATA.length,
    OriginalPrice: props.route.params[0],
    Discount: props.route.params[1],
    FinalPrice: props.route.params[2],
  }])
  },[]);

  const removeItem = id => {
    var temp = DATA.filter(item => {
      return item.id!==id
    });
     console.log(temp);
    setDATA(temp);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Clear All"
        onPress={() => {
          setDATA([]);
        }}
      />
      <View style={styles.updateAdd}>
        <Card
          style={styles.cardStyle}
          containerStyle={styles.cardStyle}
          wrapperStyle={{}}>
          <Text style={{fontSize: 16}}>
            OriginalPrice - Discount= FinalPrice
          </Text>
        </Card>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[style.separator, highlighted && {marginLeft: 0}]} />
            ))
          }
          data={DATA}
          renderItem={({item}) => {
            return (
              <Card
                style={styles.cardStyle}
                containerStyle={styles.cardStyle}
                wrapperStyle={{}}>
                <View
                  style={{
                    position: 'relative',
                    flexDirection: 'row',
                    flex: 1,
                    // alignItems: 'center',
                  }}>
                  <Text>
                    {item.OriginalPrice}-{item.Discount}={item.FinalPrice}{' '}
                  </Text>
                  <View style={styles.touchableSymble}>
                    <TouchableOpacity
                      style={styles.plus}
                      onPress={() => removeItem(item.id)}>
                      <Icon name={'delete'} size={25} color={'blue'} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
