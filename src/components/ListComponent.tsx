import React from 'react'
import { View, Text, FlatList } from 'react-native'
import MovieComponent from './MovieComponent';
import { ListComponentProps } from '../interfaces/components';
import { styles } from '../styles/globalStyles';

const ListComponent = ({movies, title, width} : ListComponentProps) => {
  return (
    <View style={styles.cardMedium}>
      <Text style={styles.titleCardMedium}>{title}</Text>
      <FlatList
        data={movies}
        ListEmptyComponent={() => <Text>No hay peliculas</Text>}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View style={styles.containerCardMedium}>
            <MovieComponent
              index={index}
              item={item}
              styleContainer={{width, height: 250, backgroundColor: 'red'}}
              styleItem={styles.itemCardMedium}
              styleImage={styles.imageCardMedium}
              styleLinear={styles.linearCardMedium}
              backgroundFull={true}
            />
            <View style={styles.viewTextCardMedium}>
              <Text style={styles.textCardMedium} numberOfLines={1}>{item.title}</Text>
            </View>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default ListComponent