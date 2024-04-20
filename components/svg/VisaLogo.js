import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Svg, {  Path,Polygon  } from 'react-native-svg';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    svg: {
      width: 50, 
      height: 50,
  
    },
  });
const VisaLogo = () => {
  return (
    <View style={styles.container}>
     <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={styles.svg}>

      <Polygon xmlns="http://www.w3.org/2000/svg" fill="#1565c0" points="17.202 32.269 21.087 32.269 23.584 16.732 19.422 16.732"/>
      <Path xmlns="http://www.w3.org/2000/svg" fill="#1565c0" d="M13.873 16.454l-3.607 11.098-.681-3.126c-1.942-4.717-5.272-6.659-5.272-6.659l3.456 14.224h4.162l5.827-15.538H13.873zM44.948 16.454h-4.162l-6.382 15.538h3.884l.832-2.22h4.994l.555 2.22H48L44.948 16.454zM39.954 26.997l2.22-5.826 1.11 5.826H39.954zM28.855 20.893c0-.832.555-1.665 2.497-1.665 1.387 0 2.775 1.11 2.775 1.11l.832-3.329c0 0-1.942-.832-3.607-.832-4.162 0-6.104 2.22-6.104 4.717 0 4.994 5.549 4.162 5.549 6.659 0 .555-.277 1.387-2.497 1.387s-3.884-.832-3.884-.832l-.555 3.329c0 0 1.387.832 4.162.832 2.497.277 6.382-1.942 6.382-5.272C34.405 23.113 28.855 22.836 28.855 20.893z"/>
      <Path xmlns="http://www.w3.org/2000/svg" fill="#ff9800" d="M9.711,25.055l-1.387-6.936c0,0-0.555-1.387-2.22-1.387c-1.665,0-6.104,0-6.104,0  S8.046,19.229,9.711,25.055z"/>

    </Svg>
    </View>
  )
}

export default VisaLogo