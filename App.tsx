import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#000',flex:1}}>
      <StatusBar backgroundColor={'#000'}/>
      <View style={styles.headerContainer}>
      <Text style={styles.header}>GROOVY</Text>
      </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    color:'#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  headerContainer:{
    paddingVertical: 20,
    alignItems: 'center'
  }
})