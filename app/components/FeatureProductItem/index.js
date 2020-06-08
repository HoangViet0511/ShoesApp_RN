import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const FeatureProductItem = props => {
  const {item, isCurrent} = props;
  const [flipAnim] = useState(new Animated.Value(0));
  const [widthAnim] = useState(new Animated.Value(220));
  const [heightAnim] = useState(new Animated.Value(300));

  useEffect(() => {
    if (isCurrent) {
      //make animation
      Animated.timing(widthAnim, {
        toValue: 330,
        duration: 300,
      }).start();
      Animated.timing(heightAnim, {
        toValue: 400,
        duration: 300,
      }).start();

      Animated.sequence([
        Animated.timing(flipAnim, {
          toValue: 1,
          duration: 300,
        }),

        Animated.spring(flipAnim, {
          toValue: 0,
          duration: 300,
          friction: 1,
          tension: 1,
        }),
      ]).start();
    } else {
      Animated.timing(widthAnim, {
        toValue: 220,
        duration: 300,
      }).start();
      Animated.timing(heightAnim, {
        toValue: 300,
        duration: 300,
      }).start();
    }
  }, [isCurrent, flipAnim]);

  return (
    <Animated.View
      style={{
        ...styles.productContainer,
        transform: [
          {
            rotateY: flipAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '80deg'],
            }),
          },
        ],
        width: widthAnim,
        height: heightAnim,
        //opacity: fadeAnim,
        //transform: [{translateY: slideAnim}],
      }}>
      <View style={styles.productInfo}>
        <Text style={styles.productCate}>{item.categories[0].category}</Text>
        <Text style={styles.productName}>
          {item.name
            .toLowerCase()
            .replace(item.categories[0].category.toLowerCase(), '')
            .trim()}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <Image source={{uri: item.image}} style={styles.productImg} />
      <Icon name="hearto" style={styles.iconHeart} />
    </Animated.View>
  );
};
export default FeatureProductItem;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#517ad5',
    borderRadius: 15,
    width: 220,
    height: 300,
    marginRight: 50,
  },
  productInfo: {
    padding: 20,
    height: 120,
  },
  productCate: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#fff',
  },
  productName: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  productImg: {
    width: '120%',
    height: 120,
    transform: [{rotate: '-30deg'}],
  },
});
