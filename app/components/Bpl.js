import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import VerticleList from './VerticleList';

export default function Bpl({data}) {
  return (
    <View>
    <VerticleList title="Bpl News" data={data}></VerticleList>
</View>
  );
}

const styles = StyleSheet.create({});
