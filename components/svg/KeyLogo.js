import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Svg, {  Path  } from 'react-native-svg';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    svg: {
      width: 20,
      height: 20,
    },
  });


export default function KeyLogo() {
  return (
    <View style={styles.container}>
     <Svg xmlns="http://www.w3.org/2000/svg" fill={'white'} viewBox="0 0 48 48" style={styles.svg}>
     <Path xmlns="http://www.w3.org/2000/svg" d="M43.61 4.39A15 15 0 0 0 19 20.49L1.46 38.12C-.38 40 0 41.53 0 47a1 1 0 0 0 1 1h7.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 0 1 .5-.5h1a2.5 2.5 0 0 0 2.5-2.5c0-2.56-.31-1.78 1.27-3.35.19-.2.19-.15 2.23-.15a2.5 2.5 0 0 0 2.5-2.5v-1.88c0-.29-.33.13 5.71-5.91.12-.13-.17-.13.82.25A14.88 14.88 0 0 0 33 30c13.43 0 20-16.26 10.61-25.61ZM19 36.5c0 .63-.55.5-2.38.5-1.24 0-1.76.72-2.89 1.85-1.52 1.52-.05 4.15-1.23 4.15h-1A2.5 2.5 0 0 0 9 45.5a.5.5 0 0 1-.5.5H2v-4.35c0-1.73-.36-.88 18-19.25a15.12 15.12 0 0 0 1.76 2.46L5.79 40.79a1 1 0 0 0 .71 1.71c.59 0-.69 1.11 16.64-16.22a14.65 14.65 0 0 0 1.8 1.36C18.31 34.28 19 32.83 19 36.5Zm23.19-12.31a13 13 0 1 1 0-18.38 13 13 0 0 1 0 18.38Z"/>
     <Path xmlns="http://www.w3.org/2000/svg" d="M38 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"/>
    </Svg>
    </View>
  )
}