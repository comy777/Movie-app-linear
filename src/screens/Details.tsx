import React from 'react'
import { View, Text } from 'react-native'
import { RootProps } from '../routes/StackRoutes';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootProps, 'details stack'>{}

const Details = ({route} : Props) => {
  const {id} = route.params;
  console.log(id);
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details