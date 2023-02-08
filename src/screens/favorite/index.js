import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { favoritesContext } from '../../store/context/FavoritesContext'
import { favoritesStorageHelper } from '../../library/helpers/FavoritesStorageHelper';
import MuseumCard from '../../components/MuseumCard';

const Index = ({navigation}) => {



    const { favorites, setfavorites } = useContext(favoritesContext);

    const empty = () => {
        setfavorites([]);
        favoritesStorageHelper.set([]);
    }

    return (<>
        <View>
            <Button title='Empty' onPress={() => empty()}></Button>
            {

       favorites.map(item => <MuseumCard
       props={item}
       navigation={navigation}
       />)


            }
        </View>

    </>
    )
}

export default Index