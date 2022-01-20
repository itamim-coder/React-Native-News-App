import React from 'react'
import {Image, StyleSheet, View } from 'react-native'
import Subtitle from './Subtitle';
import Title from './Title';

export default function RowCard({data}){
    const {title, desc, thumbnail} = data;
    return (
          <View style={styles.container}>
      
       
      <View style={styles.content}>
          <Title style={styles.title}>{title}</Title>
          <Subtitle>{desc}</Subtitle>
      </View>
      <Image
        style={styles.image}
        source={{uri: thumbnail}}
      />
     

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 8,
        height:80,
        
        },
  
    image:{
        flex: 0.35,
        height: '100%'
    },
    content:{
        flex: 0.65,
      
  
    }
})
