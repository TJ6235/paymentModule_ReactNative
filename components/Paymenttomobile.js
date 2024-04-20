import { StyleSheet, View,StatusBar,Text,TextInput,TouchableOpacity,} from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { url } from '../Apicallcommon';

const Paymenttomobile = (props) => {

  const [text, onChangeText] = React.useState('');
  const [data,setData]= React.useState([]);

  // api call code
  
  const getApiData = async()=>{
    let result = await fetch(`${url}/Firstuser`);
    result = await result.json();
    setData(result);
  }
  useEffect(()=>{
    getApiData()
  },[]);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <View style={styles.maincontainer}>

    <View style={styles.topmaincontainer}>
      <StatusBar barStyle="light-content" backgroundColor="#00477b" />
      <View style={styles.backbuttonconainer}>
        <Icon name="arrow-left" size={20} color="#00477b" 
        onPress={() => props.navigation.navigate('Hme')}
        />
      </View>
      <View style={styles.toptextcontainer}>
        <Text style={{ fontSize: 15, color: '#00477b', fontWeight: 'bold' }}>Send To Mobile Number</Text>
      </View>
      <View style={styles.questionmarkconainer}>
        <Icon name="question" size={15} color="#00477b" />
      </View>
      <View style={styles.menuverticalcontainer}>
        <Icon name="bars" size={20} color="#00477b" />
      </View>
    </View>

    <View>
        <TextInput
        placeholder='Enter Name / Mobile Number'
        placeholderTextColor="#9E9E9E"
          style={styles.inputtextbox}
          onChangeText={onChangeText}
          value={text}
           />
      </View>

      <View style={styles.phonelogoandtext}>
        <View style={styles.phonelogo}>
      <Icon name="phone" size={20} color="#00477b" />
      </View>
      <View style={styles.contactstext}>
      <Text style={{color:'#00477b'}}>Contacts</Text>
      </View>
      </View>

      <View style={styles.contactslistcontainer}>
        {/* first contact  */}
        <TouchableOpacity
        onPress={() => props.navigation.navigate('paytocontact')}>
       <View style={styles.listofcontactscontainer}>
       <Icon name="user" size={35} color="#964B00"/>
       <View>
       {data.length ?
        data.map((item)=> 
      
      <View>
      <Text style={{paddingLeft:15,fontWeight:'bold'}}>{item.Firstusername}</Text>
                <Text style={{marginTop:0,marginLeft:15}}>{item.FirstuserMobile}</Text>
                 </View>
       )
       :
      null
      }
          </View>
       </View>
       </TouchableOpacity>
       
      </View>

      <TouchableOpacity style={styles.Newcontactbuttoncontainer}>
      <View>
        <Text style={{ color: 'white', fontSize: 15,fontWeight:'bold' }}>NEW CONTACT</Text>
      </View>
    </TouchableOpacity>
  
      </View>
  )
}

export default Paymenttomobile

const styles = StyleSheet.create({
    topmaincontainer:{
       flexDirection:'row',
       justifyContent:'space-around',
       
    },
    backbuttonconainer:{
      marginTop:10,
      marginRight:40,
    },
    toptextcontainer:{
      marginTop:10,
      marginLeft:30,
    },
    questionmarkconainer:{
      marginTop:14,
      marginRight:20,
    },
    menuverticalcontainer:{
      marginTop:10,
      marginLeft:10,
    },
    inputtextbox:{
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginTop:30,
      width:'90%',
      marginLeft:20,
      borderRadius:10,
    },
    maincontainer:{
      flex:1
    },
    phonelogoandtext:{
      display:'flex',
      flexDirection:'row',
      marginTop:20,
      marginLeft:20
    },
    contactstext:{
      marginLeft:5,
    },
    contactslistcontainer:{
      height:540,
      width:'90%',
      backgroundColor:'#ECECEC',
      marginLeft:20,
      marginTop:10,
      borderRadius:10,
    },
    Newcontactbuttoncontainer:{
      backgroundColor: '#00477b',
      padding: 15,
      width:'90%',
      marginLeft:20,
      marginTop:10,
      alignItems:'center',
      borderRadius:10,
    },
    listofcontactscontainer:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:20,
      paddingTop:10,
    },
    
    listofcontactscontainer2:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:20,
      paddingTop:30,
    },
    listofcontactscontainer3:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:20,
      paddingTop:30,
    },
    listofcontactscontainer4:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:20,
      paddingTop:30,
    },
    listofcontactscontainer5:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:20,
      paddingTop:30,
    },
    listofcontactscontainer6:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:20,
      paddingTop:30,
    },
    listofcontactscontainer7:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:20,
      paddingTop:30,
    }
})