import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#141414'}}>
        <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{color:"#fff",textAlign:'center',textAlignVertical:"center",fontFamily:'Gotham-Book',fontSize:18}}>Hello There my name is Veer</Text>
      <Text style={{color:"#fff",textAlign:'center',textAlignVertical:"center",fontSize:18}}>This is my first app on hyprland</Text>
        </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})