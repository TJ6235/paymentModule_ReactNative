import { View, Text ,StatusBar,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import React from 'react'

const Paymenttoaccountnumber = (props) => {

    const [text, onChangeText] = React.useState('');
  return (
    <><><><><View styles={styles.payaccountmaincontainer}>
          <View style={styles.topmaincontainer}>
              <StatusBar barStyle="light-content" backgroundColor="#00477b" />
              <TouchableOpacity>
                  <View style={styles.backbuttonconainer}>
                      <Icon name="arrow-left" size={20} color="#00477b"
                      onPress={() => props.navigation.navigate('Hme')}
                      />
                  </View>
              </TouchableOpacity>
              <View style={styles.toptextcontainer}>
                  <Text style={{ fontSize: 15, color: '#00477b', fontWeight: 'bold' }}>Send To Account Number</Text>
              </View>
              <View style={styles.questionmarkconainer}>
                  <Icon name="question" size={15} color="#00477b" />
              </View> 
          </View>
      </View>
          <View>
              <TextInput
                  placeholder='Enter Name / Account Number'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox}
                  onChangeText={onChangeText}
                  value={text} />
          </View></>
          <View style={styles.accountscontainer}>

          </View></>
          <View style={styles.bankimagecontainer}>
              <Image
                  source={{ uri: 'https://img.indiafilings.com/learn/wp-content/uploads/2021/10/12003512/current-bank-account.png' }}
                  style={styles.image} />
              <Text>You Dont Have Any Saved Accounts.</Text>
          </View></><View>
              <TouchableOpacity style={styles.newaccountbuttoncontainer} onPress={()=>props.navigation.navigate('newaccountcreation')}>
                  <View>
                      <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>NEW ACCOUNT</Text>
                  </View>
              </TouchableOpacity>
          </View></>


  )
}

export default Paymenttoaccountnumber

const styles = StyleSheet.create({
    payaccountmaincontainer:{
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
      inputtextbox:{
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginTop:30,
        width:'90%',
        marginLeft:20,
        borderRadius:10,
      },
      accountscontainer:{
        height:150,
        marginTop:20
      },
      image:{
        height:250,
        width:250,
        
      },
      bankimagecontainer:{
        alignItems:'center'
      },
      newaccountbuttoncontainer:{
            backgroundColor: '#00477b',
            padding: 15,
            width:'90%',
            marginLeft:20,
            marginTop:130,
            alignItems:'center',
            borderRadius:10,
      }
})