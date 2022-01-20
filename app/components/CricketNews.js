import React from 'react'
import {Image, StyleSheet, View } from 'react-native'
import Subtitle from './Subtitle';
import Title from './Title';
import VerticleList from './VerticleList';

export default function RowCard({data}){
  
    return (
        <VerticleList title="Cricket News" data={data}></VerticleList>
    )
}

const styles = StyleSheet.create({
   
})

