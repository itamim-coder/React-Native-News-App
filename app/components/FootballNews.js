import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HorizontalList from './HorizontalList'

export default function FootballNews({data}) {
    return (
    <HorizontalList title='Football News' data={data}></HorizontalList>
    )
}

const styles = StyleSheet.create({})