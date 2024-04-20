import { View, Text ,StatusBar,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import React from 'react'

const Newupicreationpage = (props) => {
  return (
    <View styles={styles.Newupimaincontainer}>
    <View style={styles.topmaincontainer}>
        <StatusBar barStyle="light-content" backgroundColor="#00477b" />
        <TouchableOpacity onPress={() => props.navigation.navigate('paymenttoupiid')}>
        <View style={styles.backbuttonconainer}>
          <Icon name="arrow-left" size={20} color="#00477b"/>
        </View>
        </TouchableOpacity>
        <View style={styles.toptextcontainer}>
          <Text style={{ fontSize: 15, color: '#00477b', fontWeight: 'bold' }}>New UPI ID</Text>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
              <TextInput
                  placeholder='Enter UPI ID'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox} />
                  <View style={styles.verifybutton}>
                  <TouchableOpacity>
                    <Text style={{margin:.5,paddingLeft:15,paddingBottom:1,color:'#ff4d01'}}>Verify</Text>
                  </TouchableOpacity>
                  </View>
          </View>
          <View>
              <TextInput
                  placeholder='Name'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox2} />
          </View>
          <View style={styles.nullcontainer}>

          </View>
          <View style={styles.upiimagecontainer}>
     <Image
          source={{ uri: 'https://m.economictimes.com/thumb/msid-74960608,width-1200,height-900,resizemode-4,imgsize-49172/upi-twitter.jpg' }} 
          style={styles.imageupi}
        />
     </View>
     <View>
     <TouchableOpacity style={styles.proceedbuttoncontainer} onPress={() => props.navigation.navigate('newupiidcreationsuccess')}>
        <View>
          <Text style={{ color: 'white', fontSize:17,fontWeight:'bold' }}>Proceed</Text>
        </View>
      </TouchableOpacity>
     </View>
      </View>
  )
}

export default Newupicreationpage

const styles = StyleSheet.create({
    Newupimaincontainer:{
        flex:1
    },
    topmaincontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
     },
     backbuttonconainer:{
        marginTop:10,
        marginRight:100
      },
      toptextcontainer:{
        marginTop:10,
        marginRight:145,
      },
      inputtextbox:{
        height: 40,
        padding: 5,
        marginTop:30,
        width:'64%',
        marginLeft:20,
        borderBottomColor: '#00477b', 
        borderBottomWidth: 2, 
        // borderBottomStyle: 'solid', 
        paddingVertical: 10, 
      },
      verifybutton:{
        height:25,
        width:70,
        borderColor:'#00477b',
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:5,
        marginTop:45,
        marginLeft:7
      },
      inputtextbox2:{
            height: 40,
            padding: 5,
            marginTop:30,
            width:'92%',
            marginLeft:17,
            borderBottomColor: '#00477b', 
            borderBottomWidth: 2, 
            // borderBottomStyle: 'solid', 
            paddingVertical: 10, 
          },
          nullcontainer:{
            // backgroundColor:'grey',
            height:400,
            width:'90%',
            marginTop:25,
            marginLeft:20
          },
          upiimagecontainer:{
            alignItems:'center',
            marginRight:5
          },
          imageupi:{
            height:40,
            width:50,
            marginTop:20,
          },
          proceedbuttoncontainer:{
            backgroundColor: '#00477b',
            padding: 15,
            width:'90%',
            marginLeft:20,
            marginTop:10,
            alignItems:'center',
            borderRadius:10,
          }
})