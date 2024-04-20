import { View, Text ,StatusBar,StyleSheet,TouchableOpacity,TextInput,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import React from 'react'

const Newaccountcreationpage = (props) => {
  return (
    <><><><><><><><View styles={styles.newaccountmaincontainer}>
      <View style={styles.topmaincontainer}>
        <StatusBar barStyle="light-content" backgroundColor="#00477b" />
        <TouchableOpacity onPress={() => props.navigation.navigate('paymenttoaccountnumber')} >
          <View style={styles.backbuttonconainer}>
            <Icon name="arrow-left" size={20} color="#00477b" />
          </View>
        </TouchableOpacity>
        <View style={styles.toptextcontainer}>
          <Text style={{ fontSize: 16, color: '#00477b', fontWeight: 'bold' }}>New Account </Text>
        </View>
        <View style={styles.questionmarkconainer}>
          <Icon name="question" size={15} color="#00477b" />
        </View>
      </View>
    </View>
      <View style={styles.selectbanktextandradiocontainer}>
        <Text style={{color:'#00477b'}}>Select Bank</Text>
        <View style={styles.textandradiocontainer}> 
        <View style={styles.radiobuttonbackground1}>
            <View style={styles.radiobutton1}>
            </View>
        </View>
        <Text style={{fontSize:10,marginLeft:8,marginTop:1,color:'grey'}}>Federal Bank</Text>
        </View>
        <View style={styles.textandradiocontainer}> 
        <View style={styles.radiobuttonbackground}>
          <TouchableOpacity>
            <View style={styles.radiobutton}>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize:10,marginLeft:8,marginTop:1}}>Other Banks</Text>
        </View>
      </View></>
      <View>
        <TextInput
          placeholder='Enter Account Number'
          placeholderTextColor="#9E9E9E"
          style={styles.inputtextbox1} />
      </View></>
      <View>
        <TextInput
          placeholder=' Re-Enter Account Number'
          placeholderTextColor="#9E9E9E"
          style={styles.inputtextbox1} />
      </View></>
      <View>
        <TextInput
          placeholder=' Name'
          placeholderTextColor="#9E9E9E"
          style={styles.inputtextbox1} />
      </View></>
      <View>
        <TextInput
          placeholder=' IFSC number'
          placeholderTextColor="#9E9E9E"
          style={styles.inputtextbox1} />
      </View>
      <View>
        <TextInput
          placeholder='Branch Name & City'
          placeholderTextColor="#9E9E9E"
          style={styles.inputtextbox1} />
      </View>
      <View style={styles.nullcontentarea}>

      </View></>
      <View style={styles.infocontainer}>
        <Icon style={{ marginTop: 10, marginLeft: 15 }} name="info" size={20} color="#00477b" />
        <View>
          <Text style={{ fontSize: 10, marginLeft: 15, marginTop: 7 }}>Money will be credited based solely on the payee account number</Text>
          <Text style={{ fontSize: 10, marginLeft: 15, marginTop: 1 }}>and the payee name will not be used</Text>
        </View>
      </View></>
      <View style={styles.proceedcontainer}>
        <TouchableOpacity style={styles.proceedbuttoncontainer} onPress={() => props.navigation.navigate('newaccountcreationsuccess')}>
          <View>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>PROCEED</Text>
          </View>
        </TouchableOpacity>
      </View></>

  )
}

export default Newaccountcreationpage

const styles = StyleSheet.create({
    newaccountmaincontainer:{
        flex:1
    },
    topmaincontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
     },
     backbuttonconainer:{
        marginTop:10,
        marginRight:90
      },
      toptextcontainer:{
        marginTop:10,
        marginRight:50,
      },
      questionmarkconainer:{
        marginTop:14,
        marginRight:40,
      },
      selectbanktextandradiocontainer:{
        flexDirection:'row',
        marginTop:40,
        marginLeft:30,
      },
      inputtextbox1:{
        height: 40,
        padding: 5,
        marginTop:30,
        width:'90%',
        marginLeft:19,
        borderBottomColor: '#00477b', 
        borderBottomWidth: 2, 
        // borderBottomStyle: 'solid', 
        paddingVertical: 10, 
      },
      nullcontentarea:{
        marginTop:30,
        height:150,
        width:'90%',
        marginLeft:20
      },
      infocontainer:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:0,
        backgroundColor:'lightgrey',
        height:45,
        width:'90%',
        borderRadius:10
      },
      proceedbuttoncontainer:{
        backgroundColor: '#00477b',
        padding: 15,
        width:'90%',
        marginLeft:20,
        marginTop:15,
        alignItems:'center',
        borderRadius:10,
      },
      textandradiocontainer:{
       marginLeft:18,
       marginTop:1,
       flexDirection:'row'
      },
      radiobutton1:{
        height:10,
        width:10,
        backgroundColor:'grey',
        borderRadius:50,
        margin:1.3
      },
      radiobuttonbackground1:{
        height:19,
        width:19,
        borderColor:'grey',
        borderRadius:50,
        borderWidth:3,
        
      },
      radiobutton:{
        height:10,
        width:10,
        backgroundColor:'#00477b',
        borderRadius:50,
        margin:1.3
      },
      radiobuttonbackground:{
        height:19,
        width:19,
        borderColor:'orange',
        borderRadius:50,
        borderWidth:3,
        
      }
})