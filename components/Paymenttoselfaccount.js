import { StyleSheet, Text, View ,StatusBar,TouchableOpacity,Image} from 'react-native'
import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { url } from '../Apicallcommon';

const Paymenttoselfaccount = (props) => {
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
    <View style={styles.paymentselfMaincontainer}>
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
        <Text style={{ fontSize: 15, color: '#00477b', fontWeight: 'bold' }}>Send To Self Accounts</Text>
      </View>
      <View style={styles.questionmarkconainer}>
        <Icon name="question" size={15} color="#00477b" />
      </View>
    </View>

    <View style={styles.bankacnttextcontainer}>
        <Text style={{marginLeft:25,color:'#00477b',fontWeight:'500'}}>Bank Accounts</Text>
    </View>

<View style={styles.debitaccountscontainer}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate('paymentselftransterpage')}}>
      <View>
      {data.length ?
        data.map((item)=>
<View style={styles.banklogoandtext}>
<Icon style={{marginLeft:20,marginTop:3}} name="user" size={38} color="#90EE90"/>
<View style={{marginLeft:10}}>
<Text style={{marginLeft:15,marginTop:2,fontWeight:"bold"}}>{item.Firstusername}</Text>
<Text style={{marginLeft:15}}>{item.FirstuserBankaccountnumber}</Text>
</View>
<Image
        source={{ uri: 'https://e7.pngegg.com/pngimages/470/816/png-clipart-bank-of-america-united-states-of-america-mobile-banking-bank-account-bank-logo-loan.png'}} 
        style={styles.image}
      />
      <Icon style={{marginTop:16,marginLeft:25}} name="bars" size={12} color="black"/>
    </View>
    )
    :
    null
   }
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View>
      {data.length ?
        data.map((item)=>
    <View style={styles.banklogoandtext2}>
    <Icon style={{marginLeft:20,marginTop:3}} name="user" size={38} color="#FFA500"/>
<View style={{marginLeft:10}}>
<Text style={{marginLeft:15,marginTop:2,fontWeight:"bold"}}>{item.Firstusername}</Text>
<Text style={{marginLeft:15}}>{item.Firstusersecondaryaccountnumber}</Text>
</View>
<Image
        source={{ uri: 'https://e7.pngegg.com/pngimages/470/816/png-clipart-bank-of-america-united-states-of-america-mobile-banking-bank-account-bank-logo-loan.png' }} 
        style={styles.image2}
      />
      <Icon style={{marginTop:16,marginLeft:25}} name="bars" size={12} color="black"/>
    </View>
     )
     :
     null
    }
    </View>
    </TouchableOpacity>
</View>
    </View>
  )
}

export default Paymenttoselfaccount

const styles = StyleSheet.create({

  paymentselfMaincontainer:{
        flex:1,
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
      bankacnttextcontainer:{
        marginTop:20,
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
        marginLeft:80,
        marginTop:9,
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
      banklogoandtext2:{
        marginLeft:10,
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        width:'94%',
        backgroundColor:'white',
        height:50,
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
        borderBottomStyle: 'solid', 
        paddingVertical: 8, 
      },
      image2:{
        height:30,
        width:30,
        marginLeft:80,
        marginTop:9,
      },
})