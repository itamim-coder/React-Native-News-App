import React from 'react'
import { Image, StyleSheet,View } from 'react-native'
import Subtitle from './Subtitle';
import Title from './Title';

export default function CricketNews2({data}) {
    const {thumbnail, title, desc} = data;
    return (
        <View style={styles.container}>
                <Image
          style={styles.image}
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
       paddingHorizontal: 5
  
    }
})
