import { StyleSheet, Text, View,TouchableOpacity,StatusBar, ScrollView, SafeAreaView ,Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Paymentsuccessful = (props) => {
    
    const [isModalVisible] = useState(true);
 
  return (
    <SafeAreaView>
    <StatusBar barStyle="light-content" backgroundColor="#00477b" />
    <ScrollView>
   
      <View>
          <Modal
              isVisible={isModalVisible}
              animationIn="slideInUp" // Specify the animation type
              animationOut="slideOutDown" // Specify the closing animation
              // Close the modal when clicking outside
          >
              <View style={styles.modalContent}>
                  <View style={{
                      display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                      alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#e6e6f0', padding: 10,
                  }}>
                      <TouchableOpacity>
                      <MaterialIcon style={{marginLeft:300}} name='close' size={25} color={'black'} />
                      </TouchableOpacity>
                  </View>
<View style={styles.imagecontainer}>
<Image
                  source={{ uri: 'https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png' }}
                  style={styles.image} />
</View>
<View style={styles.successtextcontainer}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>SUCCESS! </Text>
</View>
<View style={{alignItems:'center'}}>
    <Text style={{marginTop:10}}>Transaction Successfully Conpleted.</Text>
</View>
<TouchableOpacity style={styles.closebuttoncontainer} onPress={()=>{props.navigation.navigate('paymenttomobile')}} >
<View>
       <Text style={{color:'white',fontWeight:'bold'}}>Done</Text>
</View>
</TouchableOpacity>
              </View>
          </Modal>
          </View>
          </ScrollView>
          </SafeAreaView>
  )
}

export default Paymentsuccessful

const styles = StyleSheet.create({
   
      modalContent: {
        backgroundColor: 'white',
        marginTop:0,
        borderRadius: 5,   
    },
    image:{
        height:70,
        width:70,
    },   
    imagecontainer:{
        alignItems:'center',
        marginTop:5
    },
    successtextcontainer:{
        alignItems:'center',
        marginTop:15,
    },
    closebuttoncontainer:{
        height:40,
        width:70,
        backgroundColor:'#2BB673',
        marginLeft:145,
        paddingTop:10,
        paddingLeft:17,
        borderRadius:10,
        marginVertical:25,
        
    }
    
})