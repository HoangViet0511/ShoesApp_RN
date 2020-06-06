import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {actFetchCategories} from '../../redux/actions';
import Icon from 'react-native-vector-icons/AntDesign';

const PRODUCTS = [
  {
    id: 1,
    name: 'Adidas Prophere',
    alias: 'adidas-prophere',
    price: 350,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 995,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 3,
        name: 'Adidas Prophere Customize',
        alias: 'adidas-prophere-customize',
        feature: false,
        price: 375,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
      },
      {
        id: 5,
        name: 'Adidas Swift Run',
        alias: 'adidas-swift-run',
        feature: false,
        price: 550,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Adidas Prophere Black White',
    alias: 'adidas-prophere-black-white',
    price: 450,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 990,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        feature: false,
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
      },
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 6,
        name: 'Adidas Tenisky Super Star',
        alias: 'adidas-tenisky-super-star',
        feature: false,
        price: 250,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Adidas Prophere Customize',
    alias: 'adidas-prophere-customize',
    price: 375,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 415,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 5,
        name: 'Adidas Swift Run',
        alias: 'adidas-swift-run',
        feature: false,
        price: 550,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
      },
      {
        id: 7,
        name: 'Adidas Ultraboost 4',
        alias: 'adidas-ultraboost-4',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Adidas Super Star Red',
    alias: 'adidas-super-star-red',
    price: 465,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 542,
    image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 7,
        name: 'Adidas Ultraboost 4',
        alias: 'adidas-ultraboost-4',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
      },
      {
        id: 8,
        name: 'Adidas Yeezy 350',
        alias: 'adidas-yeezy-350',
        feature: false,
        price: 750,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
      },
      {
        id: 6,
        name: 'Adidas Tenisky Super Star',
        alias: 'adidas-tenisky-super-star',
        feature: false,
        price: 250,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
      },
    ],
  },
  {
    id: 5,
    name: 'Adidas Swift Run',
    alias: 'adidas-swift-run',
    price: 550,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 674,
    image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 3,
        name: 'Adidas Prophere Customize',
        alias: 'adidas-prophere-customize',
        feature: false,
        price: 375,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
      },
      {
        id: 8,
        name: 'Adidas Yeezy 350',
        alias: 'adidas-yeezy-350',
        feature: false,
        price: 750,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
      },
    ],
  },
  {
    id: 6,
    name: 'Adidas Tenisky Super Star',
    alias: 'adidas-tenisky-super-star',
    price: 250,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 456,
    image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 3,
        name: 'Adidas Prophere Customize',
        alias: 'adidas-prophere-customize',
        feature: false,
        price: 375,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
      },
    ],
  },
  {
    id: 7,
    name: 'Adidas Ultraboost 4',
    alias: 'adidas-ultraboost-4',
    price: 450,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 854,
    image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 8,
        name: 'Adidas Yeezy 350',
        alias: 'adidas-yeezy-350',
        feature: false,
        price: 750,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
      },
      {
        id: 2,
        name: 'Adidas Prophere Black White',
        alias: 'adidas-prophere-black-white',
        feature: false,
        price: 450,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
      },
      {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        feature: false,
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
      },
    ],
  },
  {
    id: 8,
    name: 'Adidas Yeezy 350',
    alias: 'adidas-yeezy-350',
    price: 750,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 524,
    image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        feature: false,
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
      },
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
      },
      {
        id: 6,
        name: 'Adidas Tenisky Super Star',
        alias: 'adidas-tenisky-super-star',
        feature: false,
        price: 250,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
      },
    ],
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-200));

  const categoryList = useSelector(state => state.category.categoryList);

  useEffect(() => {
    dispatch(actFetchCategories());
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();

    Animated.spring(slideAnim,{
        toValue: 0,
        duration: 2000,
        friction: 1,//độ ma sát, càng lớn hoạt cảnh càng chậm
        tension: 1,//độ căn, càng lớn hoạt cảnh càng lâu
    }).start();
  }, [dispatch]);

  const handleChangeCategory = id => () => {
    setSelectedCategory(id);
  };

  return (
    <SafeAreaView>
      <Header title="Discover" />
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryList}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item, index}) => {
            const isSelected = item.id === selectedCategory;
            const categoryNameStyle = isSelected
              ? {...styles.categoryName, ...styles.active}
              : styles.categoryName;
            return (
              <TouchableOpacity
                onPress={handleChangeCategory(item.id)}
                style={styles.categoryItem}>
                <Text style={categoryNameStyle}>{item.category}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <FlatList
          data={PRODUCTS}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}) => (
            <Animated.View
              style={{
                ...styles.productContainer,
                opacity: fadeAnim,
                transform: [{translateY: slideAnim}],
              }}>
              <View style={styles.productInfo}>
                <Text style={styles.productCate}>
                  {item.categories[0].category}
                </Text>
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
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 20,
  },
  categoryItem: {
    marginHorizontal: 15,
  },
  categoryName: {
    fontSize: 17,
  },
  active: {
    color: 'red',
  },
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
