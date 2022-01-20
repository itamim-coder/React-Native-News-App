import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import HalfCard from './HalfCard'
import Title from './Title'

export default function HorizontalList({title, data}) {
    return (
     <View style={styles.container}>
         <Title size={20}>{title}</Title>
         <FlatList data={data} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <HalfCard item={item}></HalfCard> }  ></FlatList>
     </View>
     
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
    }
})
