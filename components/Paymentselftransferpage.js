import { View, Text ,StatusBar,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import React , {useEffect} from 'react';
import { url } from '../Apicallcommon';
import { useNavigation } from '@react-navigation/native';

const Paymentselftransferpage = (props) => {

  const [amount, setName] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [data,setData]= React.useState([]);
  const navigation = useNavigation();

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

    // post api
    const saveData = async ()=>{

      navigation.navigate('Selftransfersuccess'); 
      
      try {
        url
        let result = await fetch(`${url}/Selftransfertransactions`, {
          method: "post",
          headers: { 
            "content-type": "application/json"
          },   
          body: JSON.stringify({amount,comment})
        });
        result = await result.json();
        console.log(result);
      } catch (error) {
        console.error("Error in saveData:", error); 
      }
     
    }

  return (
    <View styles={styles.payselfmaincontainer}>
    <View style={styles.topmaincontainer}>
        <StatusBar barStyle="light-content" backgroundColor="#00477b" />
        <TouchableOpacity onPress={()=>{props.navigation.navigate('paymenttoselfaccount')}}>
        <View style={styles.backbuttonconainer}>
          <Icon name="arrow-left" size={20} color="#00477b"/>
        </View>
        </TouchableOpacity>
        <View style={styles.toptextcontainer}>
          <Text style={{ fontSize: 15, color: '#00477b', fontWeight: 'bold' }}>Send To Self Account</Text>
        </View>
        <View style={styles.questionmarkconainer}>
          <Icon name="question" size={15} color="#00477b" />
        </View>
      </View>
      <View>
      {data.length ?
        data.map((item)=>
      <View style={styles.nameandnumber}>
        <View style={{marginRight:140}}>
          <Text style={{fontWeight:'bold'}}>{item.Firstusername}</Text>
          <Text style={{marginTop:7,marginLeft:2}}>{item.Firstusersecondaryaccountnumber}</Text>
          </View>
          <Image
          source={{ uri: 'https://e7.pngegg.com/pngimages/470/816/png-clipart-bank-of-america-united-states-of-america-mobile-banking-bank-account-bank-logo-loan.png'}} 
          style={styles.topbankimage}
        />
      </View>
      )
      :
      null
      }
      </View>
      <View style={styles.enteramountcontainer}>
          <Text>Enter Amount</Text>
          <View>
          <TextInput
          placeholder='$ 0'
          placeholderTextColor="#9E9E9E"
          textAlign="center"
            style={styles.inputtextbox}
            onChangeText={(text)=>setName(text)}
            value={amount}
             />
          </View>
      </View>
  
      <View style={styles.selectdebitacntcontainer}>
          <Text style={{fontWeight:'bold',color:'#00477b'}}>Select Debit Account</Text>
      </View>
  <View>
  {data.length ?
        data.map((item)=>
  <View style={styles.debitaccountscontainer}>
      <TouchableOpacity>
  <View style={styles.banklogoandtext}>
  <Image
          source={{ uri: 'https://e7.pngegg.com/pngimages/470/816/png-clipart-bank-of-america-united-states-of-america-mobile-banking-bank-account-bank-logo-loan.png'}} 
          style={styles.image}
        />
      <Text style={{marginLeft:40,marginTop:8,fontSize:15}}>{item.FirstuserBankaccountnumber}</Text>
      <Text style={{marginLeft:60,marginTop:8,fontWeight:'bold'}}></Text>
      </View>
      </TouchableOpacity>
  </View>
  )
  :
  null
  }
  </View>
     <View>
     <TextInput
          placeholder='Comment (optional)'
          placeholderTextColor="#9E9E9E"
            style={styles.inputtextbox2}
            onChangeText={(text)=>setComment(text)}
            value={comment}
             />
     </View>
     
     <View style={styles.upiimagecontainer}>
     <Image
          source={{ uri: 'https://m.economictimes.com/thumb/msid-74960608,width-1200,height-900,resizemode-4,imgsize-49172/upi-twitter.jpg' }} 
          style={styles.image2}
        />
     </View>
  
     <View>
     <TouchableOpacity style={styles.sendmoneybuttoncontainer} onPress={saveData}>
        <View>
          <Text style={{ color: 'white', fontSize: 15,fontWeight:'bold' }}>SEND MONEY</Text>
        </View>
      </TouchableOpacity>
     </View>
  
     </View>
  )
}

export default Paymentselftransferpage

const styles = StyleSheet.create({
  payselfmaincontainer:{
        flex:1
    },
    topmaincontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
     },
     backbuttonconainer:{
        marginTop:10,
        marginRight:70
      },
      toptextcontainer:{
        marginTop:10,
        marginRight:50,
      },
      questionmarkconainer:{
        marginTop:14,
        marginRight:30,
      },
      nameandnumber:{
        marginTop:15,
        marginLeft:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
      },
      enteramountcontainer:{
        marginTop:20,
        alignItems:'center'
      },
      inputtextbox:{
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginTop:30,
        width:150,
        marginLeft:20,
        borderRadius:10,
      },
      selectdebitacntcontainer:{
        marginTop:40,
        marginLeft:20,
      },
      debitaccountscontainer:{
        marginTop:10,
        marginLeft:20,
        width:'90%',
        height:150,
        backgroundColor:'#add8e6',
        borderRadius:10,
      },
      image:{
        height:30,
        width:30,
        marginLeft:10,
        marginTop:4,
      },
      banklogoandtext:{
        marginLeft:10,
        display:'flex',
        flexDirection:'row',
        marginTop:25,
        width:'94%',
        backgroundColor:'white',
        height:40,
        borderRadius:10,
      },
      banklogoandtext2:{
        marginLeft:10,
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        width:'94%',
        backgroundColor:'white',
        height:40,
        borderRadius:10,
      },
      inputtextbox2:{
        height: 40,
        padding: 5,
        marginTop:20,
        width:'90%',
        marginLeft:20,
        borderBottomColor: '#00477b', 
        borderBottomWidth: 2, 
        // borderBottomStyle: 'solid', 
        paddingVertical: 8, 
      },
      image2:{
        height:40,
        width:50,
        marginTop:150,
      },
      upiimagecontainer:{
        alignItems:'center',
        marginRight:5
      },
      sendmoneybuttoncontainer:{
        backgroundColor: '#00477b',
        padding: 15,
        width:'90%',
        marginLeft:20,
        marginTop:10,
        alignItems:'center',
        borderRadius:10,
      },
      topbankimage:{
        height:30,
        width:30, 
        marginRight:10  ,
        marginTop:5
    }
})