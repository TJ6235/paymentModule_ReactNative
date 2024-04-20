import { View, Text ,StatusBar,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Paymenttommid = (props) => {

    const [text, onChangeText] = React.useState('');
    const navigation = useNavigation();

  return (
    <><><><><View styles={styles.senttommidmaincontainer}>
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
                  <Text style={{ fontSize: 16, color: '#00477b', fontWeight: 'bold' }}>Sent To MMID </Text>
              </View>
              <View style={styles.questionmarkconainer}>
                  <Icon name="question" size={15} color="#00477b" />
              </View>
          </View>
      </View><View>
              <TextInput
                  placeholder='Enter Name / MMID'
                  placeholderTextColor="#9E9E9E"
                  style={styles.inputtextbox}
                  onChangeText={onChangeText}
                  value={text}/>
          </View></>
          <View style={styles.mmidcontainer}>
          </View></>
          <View style={styles.bankimagecontainer}>
              <Image
                  source={{ uri: 'https://img.indiafilings.com/learn/wp-content/uploads/2021/10/12003512/current-bank-account.png' }}
                  style={styles.image} />
              <Text>You Dont Have Any Saved MMID.</Text> 
          </View></>
          <View>
              <TouchableOpacity style={styles.newmmidbuttoncontainer} onPress={()=>props.navigation.navigate('newmmidcreation')}>
                  <View>
                      <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>NEW MMID</Text>
                  </View>
              </TouchableOpacity>
          </View></>
  )
}

export default Paymenttommid

const styles = StyleSheet.create({
    senttommidmaincontainer:{
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
      inputtextbox:{
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginTop:30,
        width:'90%',
        marginLeft:20,
        borderRadius:10,
      },
      mmidcontainer:{
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
      newmmidbuttoncontainer:{
            backgroundColor: '#00477b',
            padding: 15,
            width:'90%',
            marginLeft:20,
            marginTop:130,
            alignItems:'center',
            borderRadius:10,
      }
})