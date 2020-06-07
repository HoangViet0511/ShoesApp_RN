import React, {useEffect, useState, useCallback} from 'react';
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
import FeatureProductItem from '../../components/FeatureProductItem'

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

  const [currentItemOnView, setCurrentItemOnView] = useState(0);

  const categoryList = useSelector(state => state.category.categoryList);

  useEffect(() => {
    dispatch(actFetchCategories());
    /*Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();

    Animated.spring(slideAnim, {
      toValue: 0,
      duration: 2000,
      friction: 1, //độ ma sát, càng lớn hoạt cảnh càng chậm
      tension: 1, //độ căn, càng lớn hoạt cảnh càng lâu
    }).start();*/
  }, [dispatch, fadeAnim, slideAnim]);

  const handleChangeCategory = id => () => {
    setSelectedCategory(id);
  };

  //Lưu giá trị vị trí người dùng kéo đến
  const handleChange = useCallback(params => {
    console.log(params.changed);
    setCurrentItemOnView(params.changed[0].index);
  }, []);

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
          viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 80,
          }}
          onViewableItemsChanged={handleChange}
          renderItem={({item, index}) => (
            <FeatureProductItem  item={item} isCurrent={index === currentItemOnView} />
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
});
