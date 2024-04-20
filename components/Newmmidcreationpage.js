import { View, Text ,StatusBar,StyleSheet,TouchableOpacity,TextInput,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import React from 'react'

const Newmmidcreationpage = (props) => {
  return (
    <><><><><><View styles={styles.newmmidmaincontainer}>
          <View style={styles.topmaincontainer}>
              <StatusBar barStyle="light-content" backgroundColor="#00477b" />
              <TouchableOpacity onPress={() => props.navigation.navigate('paymenttommid')}>
                  <View style={styles.backbuttonconainer}>
                      <Icon name="arrow-left" size={20} color="#00477b" />
                  </View>
              </TouchableOpacity>
              <View style={styles.toptextcontainer}>
                  <Text style={{ fontSize: 16, color: '#00477b', fontWeight: 'bold' }}>New MMID </Text>
              </View>
          </View>
      </View>
          <View style={styles.entermobnumcontainer}>
              <TextInput
                  placeholder='Enter Mobile Number'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox} />
              <Icon style={{ marginTop: 42, marginLeft: 10 }} name="address-book" size={20} color="#00477b"
                  onPress={() => props.navigation.navigate('paymenttomobile')} />
          </View></>
          <View>
              <TextInput
                  placeholder='Enter MMID'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox2} />
          </View></>
          <View>
              <TextInput
                  placeholder='Re-Enter MMID'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox3} />
          </View></>
          <View>
              <TextInput
                  placeholder='Enter Name'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox4} />
          </View></>
          <View style={styles.addmmidcontainer}>
              <TouchableOpacity style={styles.addmmidbuttoncontainer}onPress={() => props.navigation.navigate('newmmidsuccess')} >
                  <View>
                      <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>ADD MMID</Text>
                  </View>
              </TouchableOpacity>
          </View></>
  )
}

export default Newmmidcreationpage

const styles = StyleSheet.create({
    newmmidmaincontainer:{
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
        marginRight:140,
      },
      inputtextbox:{
            height: 40,
            padding: 5,
            marginTop:30,
            width:'84%',
            marginLeft:20,
            borderBottomColor: '#00477b', 
            borderBottomWidth: 2, 
            // borderBottomStyle: 'solid', 
            paddingVertical: 10, 
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
          inputtextbox3:{
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
          inputtextbox4:{
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
          entermobnumcontainer:{
            display:'flex',
            flexDirection:'row'
          },
          addmmidbuttoncontainer:{
            backgroundColor: '#00477b',
            padding: 15,
            width:'90%',
            marginLeft:20,
            marginTop:360,
            alignItems:'center',
            borderRadius:10,
          }
})