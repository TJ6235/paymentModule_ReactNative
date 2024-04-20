import { StyleSheet, Text, View,TouchableOpacity,StatusBar, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { colorschemes } from './Themes/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Sentmoneymodal() {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
    <StatusBar barStyle="light-content" backgroundColor="#00477b"/>
    <ScrollView>

      <View>
          <Modal
              isVisible={true}
              animationIn="slideInUp" // Specify the animation type
              animationOut="slideOutDown" // Specify the closing animation
              // Close the modal when clicking outside
          >
              <View style={styles.modalContent}>
                  <View style={{
                      display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                      alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#e6e6f0', padding: 10,
                  }}>
                      <Text style={{ color: colorschemes.mainColor, fontWeight: colorschemes.homeHeadingfontWeight, fontSize: colorschemes.homeheadingfontSize - 2 }}>Send Money</Text>
                      <TouchableOpacity>
                      <MaterialIcon name='close' size={25} color={'black'} />
                      </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#e8e8ed', flexDirection: 'row' }} onPress={() => navigation.navigate('paymenttomobile')}>
                      <MaterialIcon name='phone' size={20} color={'blue'} />
                      <Text style={{ marginLeft: 10  }}>Send to Mobile Number</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#e8e8ed', flexDirection: 'row' }} onPress={() => navigation.navigate('paymenttommid')}>
                      <MaterialIcon name='phone-android' size={20} color={'blue'} />
                      <Text style={{ marginLeft: 10 }}>Send to MMID</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#e8e8ed', flexDirection: 'row' }} onPress={() => navigation.navigate('paymenttoselfaccount')}>
                      <MaterialIcon name='transfer-within-a-station' size={20} color={'blue'} />
                      <Text style={{ marginLeft: 10  }}>Send to Self Account</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#e8e8ed', flexDirection: 'row' }} onPress={() => navigation.navigate('paymenttoaccountnumber')}>
                      <MaterialIcon name='account-balance' size={20} color={'blue'} />
                      <Text style={{ marginLeft: 10 }}>Send to Account Number</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#e8e8ed', flexDirection: 'row' }} onPress={() => navigation.navigate('paymenttoupiid')}>
                  <MaterialIcon name='account-balance' size={20} color={'blue'} />
                      <View style={{ marginLeft: -5 }}>
                      </View>
                      <Text style={{ marginLeft: 17}}>Send to UPI ID</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#e8e8ed', flexDirection: 'row' }} onPress={() => navigation.navigate('schedulepayment')}>
                      <MaterialIcon name='timer' size={20} color={'blue'} />
                      <Text style={{ marginLeft: 10 }}>Schedule Payment</Text>
                  </TouchableOpacity>

              </View>
          </Modal>
          </View>
          </ScrollView>
          </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    modalbuttoncontainer:{
        backgroundColor: '#00477b',
        padding: 15,
        width:'90%',
        marginLeft:20,
        alignItems:'center',
        borderRadius:10,
        marginBottom:50,
        marginTop:350
      },
    
      modalContent: {
        backgroundColor: 'white',
        marginTop:50,
        borderRadius: 5,
    },
})