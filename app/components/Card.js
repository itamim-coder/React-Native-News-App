import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Subtitle from './Subtitle'
import Title from './Title'

export default function Card({style, imageStyle, item}) {
    const {thumbnail, title, desc} = item;
    return (
        <View style={[styles.container, style]}>
        <Image
        style={[styles.image, imageStyle]}
        source={{uri: thumbnail}}
      />
      <View style={styles.content}>
          <Title style={styles.title}>{title}</Title>
          <Subtitle>{desc}</Subtitle>
      </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 280,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginTop: 15
    },
    image:{
        width: '100%',
        height: 200
    },
    content:{              
        padding: 5
    },
  
})
