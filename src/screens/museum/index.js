import {View, Text, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {museumsData} from '../../data/museums';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Fontisto';
// import style from '../../style/style';
import {favoritesContext} from '../../store/context/FavoritesContext';
import {favoritesStorageHelper} from '../../library/helpers/FavoritesStorageHelper';
import Geolocation from 'react-native-geolocation-service';
// import InsetShadow from 'react-native-inset-shadow';
import {getDistance} from 'geolib';
import Overlay from 'react-native-elements';
import {locationContext} from '../../store/context/LocationContext';
import MuseumCard from '../../components/MuseumCard';

const Index = ({navigation}) => {
  const renderMuseum = ({item}) => {
    return <MuseumCard props={item} navigation={navigation} />;
  };

  return (
    <>
      <FlatList data={museumsData} renderItem={renderMuseum} />
    </>
  );
};

export default Index;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  body: {
    // paddingTop: 10,
    // flex:1
  },
  row: {
    location: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontFamily: 'System',
      fontStyle: 'normal',
    },
    name: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
      paddingHorizontal: 10,
      fontFamily: 'System',
      fontStyle: 'normal',
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingVertical: 10,

      text: {
        color: '#909090',
      },
      icon: {
        // color: 'white',
        marginVertical: 5,
      },
    },
  },
  img: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  animation: {
    shadowColor: '#red',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
});
