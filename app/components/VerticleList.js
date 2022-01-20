import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import CricketNews from './CricketNews'
import RowCard from './RowCard'
import Title from './Title'


export default function VerticleList({title, data}) {


    return (
        <View>
            <Title>{title}</Title>
            <View style={styles.container}>
            {
                data.map(data => <RowCard
                data={data}               
                ></RowCard>)
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
