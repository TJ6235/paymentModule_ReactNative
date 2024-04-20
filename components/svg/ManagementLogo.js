import { View, StyleSheet } from 'react-native'
import React from 'react'
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

export default function ManagementLogo() {
  return (
    <View style={styles.container}>
     <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={styles.svg}>
     <Path xmlns="http://www.w3.org/2000/svg" fill={'white'} d="M23 52h-1v-6.95a1 1 0 0 0-.133-.5l-6.912-11.968a2.279 2.279 0 0 0-.14-.212A4.036 4.036 0 0 0 12 30.633V22a4 4 0 0 0-8 0v24a1 1 0 0 0 .219.625L8 51.351V52H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1ZM9.781 50.375 6 45.649V22a2 2 0 0 1 4 0v8.905a4.317 4.317 0 0 0-.5.23A4.014 4.014 0 0 0 8.034 36.6l5.72 9.9 1.732-1-5.72-9.9a2.007 2.007 0 0 1 .725-2.73 1.856 1.856 0 0 1 .651-.231c.034-.005.314-.04.358-.04a1.95 1.95 0 0 1 1.008.28 1.886 1.886 0 0 1 .653.615c.019.028.052.079.073.105L20 45.317V52H10v-1a1 1 0 0 0-.219-.625ZM22 60H8v-6h14Z"/>
     <Path xmlns="http://www.w3.org/2000/svg" fill={'white'} d="M18 56h2v2h-2zM56 18a4 4 0 0 0-4 4v8.633a3.852 3.852 0 0 0-1.492.506 3.893 3.893 0 0 0-1.322 1.23 2.354 2.354 0 0 0-.152.231l-6.9 11.951a1 1 0 0 0-.133.5V52H41a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1v-.649l3.781-4.726A1 1 0 0 0 60 46V22a4 4 0 0 0-4-4Zm0 42H42v-6h14Zm2-14.351-3.781 4.726A1 1 0 0 0 54 51v1H44v-6.683l6.779-11.74c.022-.027.041-.054.06-.082A2.031 2.031 0 0 1 52.5 32.6c.044 0 .324.035.357.04a1.837 1.837 0 0 1 .641.225 2.009 2.009 0 0 1 .735 2.735l-5.719 9.9 1.732 1 5.72-9.9A3.908 3.908 0 0 0 54 30.905V22a2 2 0 0 1 4 0Z"/>
     <Path xmlns="http://www.w3.org/2000/svg" fill={'white'} d="M44 56h2v2h-2zM18.858 18.99l2.682.383a10.96 10.96 0 0 0 .678 1.639l-1.624 2.166a1 1 0 0 0 .093 1.307l2.828 2.828a1 1 0 0 0 1.307.093l2.166-1.624a10.96 10.96 0 0 0 1.639.678l.383 2.682A1 1 0 0 0 30 30h4a1 1 0 0 0 .99-.858l.383-2.682a10.9 10.9 0 0 0 1.639-.678l2.167 1.624a1 1 0 0 0 1.306-.093l2.828-2.828a1 1 0 0 0 .093-1.307l-1.625-2.166a10.86 10.86 0 0 0 .679-1.639l2.682-.383A1 1 0 0 0 46 18v-4a1 1 0 0 0-.858-.99l-2.682-.383a10.86 10.86 0 0 0-.679-1.639l1.625-2.166a1 1 0 0 0-.093-1.307l-2.828-2.828a1 1 0 0 0-1.306-.093l-2.167 1.624a10.9 10.9 0 0 0-1.639-.678l-.383-2.682A1 1 0 0 0 34 2h-4a1 1 0 0 0-.99.858l-.383 2.682a10.96 10.96 0 0 0-1.639.678l-2.166-1.624a1 1 0 0 0-1.307.093l-2.828 2.828a1 1 0 0 0-.093 1.307l1.624 2.166a10.96 10.96 0 0 0-.678 1.639l-2.682.383A1 1 0 0 0 18 14v4a1 1 0 0 0 .858.99ZM20 14.867l2.463-.352a1 1 0 0 0 .828-.743 8.892 8.892 0 0 1 .975-2.356 1 1 0 0 0-.06-1.111l-1.492-1.99 1.6-1.6 1.99 1.492a1 1 0 0 0 1.111.06 8.892 8.892 0 0 1 2.356-.975 1 1 0 0 0 .743-.828L30.867 4h2.266l.351 2.463a1 1 0 0 0 .744.828 8.859 8.859 0 0 1 2.356.975 1 1 0 0 0 1.11-.06l1.991-1.492 1.6 1.6-1.492 1.99a1 1 0 0 0-.061 1.111 8.923 8.923 0 0 1 .977 2.357 1 1 0 0 0 .827.742l2.464.353v2.266l-2.463.352a1 1 0 0 0-.827.742 8.923 8.923 0 0 1-.977 2.357 1 1 0 0 0 .061 1.111l1.492 1.99-1.6 1.6-1.991-1.492a1 1 0 0 0-1.11-.06 8.859 8.859 0 0 1-2.356.975 1 1 0 0 0-.744.828L33.133 28h-2.266l-.352-2.463a1 1 0 0 0-.743-.828 8.892 8.892 0 0 1-2.356-.975 1 1 0 0 0-1.111.06l-1.99 1.492-1.6-1.6 1.492-1.99a1 1 0 0 0 .06-1.111 8.892 8.892 0 0 1-.975-2.356 1 1 0 0 0-.828-.743L20 17.133Z"/>
     <Path xmlns="http://www.w3.org/2000/svg" fill={'white'} d="M32 22a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6Zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4ZM31 6h2v2h-2zM24.222 9.636l1.414-1.414 1.414 1.414-1.414 1.414zM22 15h2v2h-2zM24.222 22.364l1.414-1.414 1.414 1.414-1.414 1.414zM31 24h2v2h-2zM36.95 22.364l1.414-1.414 1.414 1.414-1.414 1.414zM40 15h2v2h-2zM36.95 9.636l1.414-1.414 1.414 1.414-1.414 1.414zM50 10a1 1 0 0 1 1-1h5.586l-1.293 1.293 1.414 1.414 3-3a1 1 0 0 0 0-1.414l-3-3-1.414 1.414L56.586 7H51a3 3 0 0 0-3 3v10h2ZM48 22h2v2h-2zM48 26h2v2h-2z"/>
     <Path xmlns="http://www.w3.org/2000/svg" fill={'white'} d="M52 11h2v2h-2zM52 15h2v2h-2zM7.293 11.707l1.414-1.414L7.414 9H13a1 1 0 0 1 1 1v10h2V10a3 3 0 0 0-3-3H7.414l1.293-1.293-1.414-1.414-3 3a1 1 0 0 0 0 1.414ZM14 22h2v2h-2zM14 26h2v2h-2z"/>
     <Path xmlns="http://www.w3.org/2000/svg" fill={'white'} d="M10 11h2v2h-2zM10 15h2v2h-2zM26.293 32.293l-3 3 1.414 1.414L26 35.414V43h2v-7.586l1.293 1.293 1.414-1.414-3-3a1 1 0 0 0-1.414 0ZM26 45h2v2h-2zM26 49h2v2h-2zM40.707 35.293l-3-3a1 1 0 0 0-1.414 0l-3 3 1.414 1.414L36 35.414V43h2v-7.586l1.293 1.293ZM36 45h2v2h-2zM36 49h2v2h-2z"/>
    </Svg>

        </View>
  )


}