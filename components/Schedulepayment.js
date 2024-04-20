import { View, Text ,StatusBar,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { useNavigation } from '@react-navigation/native';

function ToptextandBox (){
    const [text, onChangeText] = React.useState('');
    const navigation = useNavigation();
    return(
        <View styles={styles.schedulepaymentmaincontainer}>
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
          <Text style={{ fontSize: 15, color: '#00477b', fontWeight: 'bold' }}>Schedule Payment</Text>
        </View>
        <View style={styles.questionmarkconainer}>
          <Icon name="question" size={15} color="#00477b" />
        </View>
      </View>
      <View style={{marginBottom:10}}>
                  <TextInput
                      placeholder='Enter Name / MMID / Account Number'
                      placeholderTextColor="#9E9E9E"
                      style={styles.inputtextbox}
                      onChangeText={onChangeText}
                      value={text} />
              </View>
              </View>
    )
}

function Accounts(props){
    return(
          <><><View style={{ height: 100 }}>

        </View>
            <View style={{
                flex: 1,
                backgroundColor: '03cafc'
            }}>
                <View style={styles.bankimagecontainer}>
                    <Image
                        source={{ uri: 'https://img.indiafilings.com/learn/wp-content/uploads/2021/10/12003512/current-bank-account.png' }}
                        style={styles.image} />
                    <Text>You Dont Have Any Saved Accounts.</Text>
                </View>
            </View></>
            <View>
            <View>
   <TouchableOpacity style={styles.newaccountbuttoncontainer}
   onPress={() => props.navigation.navigate('newaccountcreation')}>
      <View>
        <Text style={{ color: 'white', fontSize: 15,fontWeight:'bold' }}>NEW ACCOUNT</Text>
      </View>
    </TouchableOpacity>
   </View>
            </View></>
    )
}
function Mmid(props){
    return(
        <><><View style={{ height: 100 }}>

        </View>
            <View style={{
                flex: 1,
                backgroundColor: '03cafc'
            }}>
                <View style={styles.bankimagecontainer}>
                    <Image
                        source={{ uri: 'https://img.indiafilings.com/learn/wp-content/uploads/2021/10/12003512/current-bank-account.png' }}
                        style={styles.image} />
                    <Text>You Dont Have Any Saved MMID.</Text>
                </View>
            </View></>
            <View>
            <View style={styles.newmmidcontainer}>
   <TouchableOpacity style={styles.newmmidbuttoncontainer}
   onPress={() => props.navigation.navigate('newmmidcreation')}>
      <View>
        <Text style={{ color: 'white', fontSize: 15,fontWeight:'bold' }}>NEW MMID</Text>
      </View>
    </TouchableOpacity>
   </View>
            </View></>
    )
}

const Tab = createMaterialTopTabNavigator();

function MyTabs(){
return(
   <Tab.Navigator
     initialRouteName='Accounts'
     tabBarOptions={{
        activeTintColor:'#ff4d01',
        labelStyle: { fontSize:13},
        style:{backgroundColor:'white'}
     }}
   >
    <Tab.Screen 
        name='Accounts'
        component={Accounts}
        options={{tabBarLabel:'Accounts'}}
    
    />
    <Tab.Screen 
        name='mmid'
        component={Mmid}
        options={{tabBarLabel:'MMID'}}
    
    />  
   </Tab.Navigator>
   )
}
export default function Schedulepayment(){
    return(
            <><ToptextandBox />
            <MyTabs /></>  
    )
}
   
const styles = StyleSheet.create({
    image:{
        height:250,
        width:250,
        
      },
      bankimagecontainer:{
        alignItems:'center'
      },
      schedulepaymentmaincontainer:{
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
      newaccountbuttoncontainer:{
        backgroundColor: '#00477b',
        padding: 15,
        width:'90%',
        marginLeft:20,
        alignItems:'center',
        borderRadius:10,
        marginBottom:50
      },
      newmmidbuttoncontainer:{
        backgroundColor: '#00477b',
        padding: 15,
        width:'90%',
        marginLeft:20,
        alignItems:'center',
        borderRadius:10,
        marginBottom:50
      }
})