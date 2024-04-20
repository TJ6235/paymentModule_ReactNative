import { StyleSheet, Text, View,StatusBar,TouchableOpacity,TextInput,Image } from 'react-native'
import React , {useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { url } from '../Apicallcommon';

const Paymenttoupiidpage = (props) => {

    const [text, onChangeText] = React.useState('');
    const [data,setData]= React.useState([]);

    // get api
    const getApiData = async()=>{
      
      let result2 = await fetch(`${url}/Firstuser`);
      result2 = await result2.json();
      // console.log(result2)
      setData(result2);
    }
    useEffect(()=>{
      getApiData()
    },[]);

  return (
    <View style={styles.paymenttoupimaincontainer}>
     <StatusBar barStyle="light-content" backgroundColor="#00477b" />
      <View style={styles.topmaincontainer}>
      <TouchableOpacity>
      <View style={styles.backbuttonconainer}>
        <Icon name="arrow-left" size={20} color="#00477b"
         onPress={() => props.navigation.navigate('Hme')}
        />
      </View>
      </TouchableOpacity>
      <View style={styles.toptextcontainer}>
        <Text style={{ fontSize: 15, color: '#00477b', fontWeight: 'bold' }}>Send To UPI ID</Text>
      </View>
      <View style={styles.questionmarkconainer}>
        <Icon name="question" size={15} color="#00477b" />
      </View>
    </View>
    <View>
        <TextInput
        placeholder='Enter Name / UPI ID'
        placeholderTextColor="#9E9E9E"
          style={styles.inputtextbox}
          onChangeText={onChangeText}
          value={text}
           />
      </View>
      <View style={styles.recentlogoandtextcontainer}>
        <View style={styles.recentbuttoncontainer}>
      <Icon name="rotate-right" size={15} color="#00477b" />
      </View>
      <View>
        <Text style={styles.recenttext}>Recents</Text>
      </View>
      </View>
      <View>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('paymenttoupitranster')}}>
<View style={styles.banklogoandtext}>
<Icon style={{marginLeft:20,marginTop:3}} name="user" size={38} color="#90EE90"/>
<View>
{data.length ?
        data.map((item)=>
  <View>
<Text style={{marginLeft:20,marginTop:2,fontSize:15,fontWeight:'bold'}}>{item.Firstusername}</Text>
<Text style={{marginLeft:20,fontSize:12}}>{item.Firstuserupiid}</Text>
</View>
 )
 :
 null
}
</View>
<Image
        source={{ uri: 'https://e7.pngegg.com/pngimages/470/816/png-clipart-bank-of-america-united-states-of-america-mobile-banking-bank-account-bank-logo-loan.png'}} 
        style={styles.image2}
      />
      <Icon style={{marginTop:18,marginLeft:40}} name="bars" size={12} color="black"/>
    </View>
    </TouchableOpacity>
    
      </View>
      <View style={styles.sendmoneycontainer}>
     <TouchableOpacity style={styles.Newupibuttoncontainer}
     onPress={() => props.navigation.navigate('newupicreation')}
     >
        <View>
          <Text style={{ color: 'white', fontSize: 15,fontWeight:'bold' }}>NEW UPI ID</Text>
        </View>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default Paymenttoupiidpage

const styles = StyleSheet.create({
  paymenttoupimaincontainer:{
     flex:1
  },
    topmaincontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
     },
     backbuttonconainer:{
        marginTop:10,
        marginRight:80,
      },
      toptextcontainer:{
        marginTop:10,
        marginRight:50,
      },
      questionmarkconainer:{
        marginTop:14,
        marginRight:30,
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
      recentlogoandtextcontainer:{
        display:'flex',
        flexDirection:'row',
      },
      recenttext:{
        color:'#00477b',
        marginLeft:5,
        marginTop:15,
      },
      recentbuttoncontainer:{
        marginTop:16,
        marginLeft:22,
      },
      banklogoandtext:{
        marginLeft:10,
        display:'flex',
        flexDirection:'row',
        marginTop:15,
        width:'94%',
        backgroundColor:'white',
        height:50,
        borderRadius:10,
      },
      image2:{
        height:30,
        width:30,
        marginLeft:110,
        marginTop:9,
      },
      Newupibuttoncontainer:{
        backgroundColor: '#00477b',
        padding: 15,
        width:'90%',
        marginLeft:20,
        marginTop:480,
        alignItems:'center',
        borderRadius:10,
      },
     
})