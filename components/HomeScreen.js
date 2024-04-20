import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,Dimensions,Image, ScrollView,StyleSheet, } from 'react-native'
import React,{useCallback, useEffect, useRef, useState,Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colorschemes } from './Themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
// import Modal from 'react-native-modal';
import UpiLogo from './svg/UpiLogo';
import Swiper from 'react-native-swiper';
import { BookLogo, BulbLogo, BusLogo, CarLogo, CreditCardLogo, DataCardLogo, DonationLogo, DthLogo, FlightLogo, GasLogo, HotelsLogo, InsuranceLogo, MarketplaceLogo, Mobile, MobilePostpaid, MutualFundLogo, QrcodeLogo,  TelephoneLogo, TvLogo, WaterLogo, WifiLogo } from './svg/Svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground } from 'react-native';

const {height} = Dimensions.get("window");

const HomeScreen =  (props) => {
  
  const navigation = useNavigation();


 
  
  
  return (
    <SafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor={colorschemes.statusBarColor} />
          <View>
        <View style={{backgroundColor:'#f0fcfc',paddingBottom:10}}>
          <View style={{paddingTop:10, paddingLeft:15,display:'flex',
        justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
            <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <Icon name="menu-outline" size={30} style={{marginRight:10}} ></Icon>
              <Text style={{backgroundColor:colorschemes.mainColor,color:'white',
              paddingHorizontal:6,paddingVertical:1,fontSize:15,fontWeight:'bold',borderBottomWidth:2,borderBottomColor:'#b3070a'}}>UniqBank</Text>
            </View>
            <View style={{paddingRight:20,display:'flex',flexDirection:'row',}}>
              <Icon name='notifications-outline' size={15} style={{marginRight:10}} />
              <Icon name='power-outline' />
            </View>

          </View>
          <View style={{backgroundColor:colorschemes.mainColor,marginTop:20,marginHorizontal:20,borderRadius:10}}> 
            <View style={{paddingVertical:30,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                  
                    
                    <TouchableOpacity style={{alignItems:'center',}}onPress={()=>{props.navigation.navigate('sentmoneymodall')}}>
                      <View style={{backgroundColor:'#fa8d61',paddingHorizontal:11,paddingVertical:6,borderRadius:100,marginBottom:10}}>
                        <Icons name='rupee' size={20} color={'white'} />
                        {/* <RupeeSendLogo /> */}
                    </View>
                    
                    <Text style ={{color:'white',fontWeight:'bold'}}>Send Money</Text>
                    </TouchableOpacity>
                  
                  
                    <TouchableOpacity style={{alignItems:'center',}}>
                      <View style={{backgroundColor:'#04d492',paddingVertical:4,borderRadius:100,marginBottom:10}} >
                        <UpiLogo />
                    </View>
                    <Text style ={{color:'white',fontWeight:'bold'}}>BHIM UPI</Text>
                    </TouchableOpacity>
                  
                    
                    <TouchableOpacity style={{alignItems:'center',}}>
                      <View style={{backgroundColor:'#2abbf5',paddingHorizontal:7,paddingVertical:4,borderRadius:100,marginBottom:10}}>
                    {/* <Icons name='qrcode' size={20} color={'white'}  /> */}
                    <QrcodeLogo />
                    </View>
                    
                    <Text style ={{color:'white',fontWeight:'bold'}}>Scan & Pay</Text>
                    </TouchableOpacity>
  
                    <TouchableOpacity style={{alignItems:'center',}}>
                      <View style={{backgroundColor:colorschemes.mainColor,paddingHorizontal:6,paddingVertical:6,borderRadius:100,marginBottom:10,borderColor:'#013e6b',borderWidth:1}}>
                    <Feather name='more-horizontal' size={20} color={'white'} 
                    />
                    </View>
                    <Text style ={{color:'white',fontWeight:'bold'}}>More</Text>
                    </TouchableOpacity>

                  
            </View>
           

          </View>

        </View>
        <ScrollView style={{height:height/1.35}}>
          <View>

            <TouchableOpacity onPress={()=>navigation.navigate('Savings')}>
          <View style={{marginHorizontal:20,backgroundColor:'white',marginVertical:10,
          paddingVertical:30,paddingHorizontal:20, borderWidth: 1, // Add a border
                borderColor: 'transparent', // Set the border color to transparent
                elevation:2,borderRadius:5 }}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',}}>
              <View style={{display:'flex',flexDirection:'row',}}>
                <View style={{backgroundColor:'#f05542',paddingHorizontal:4,paddingVertical:4,borderRadius:100,marginBottom:10}}>
                <MaterialCommunityIcon name='piggy-bank-outline' size={20} color={'white'} 
                 />
                 </View>
                <Text style={{marginTop:5,marginLeft:10,color:'grey'}}>Account</Text>
              </View>
              <TouchableOpacity>
              <Text style={{color:'#1a80ed'}}>View All Accounts</Text>
              </TouchableOpacity>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>


            <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <Text style={{fontSize:18,fontWeight:'700'}}>Accounts No</Text>
                
              </View>
              <TouchableOpacity>
              { <Text style={{color:'#1a80ed'}}>Check Balance</Text>}
              {<Text style={{color:'#1a80ed'}}>Balance</Text>}

              {/* <Text style={{color:'#1a80ed'}}>Check Balance</Text> */}

              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>

          <View style={{height:130,marginVertical:15}}>
        <Swiper
        style={{height:130,}}
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={6}
      >
        <View style={{marginHorizontal:20}}><Image style={{resizeMode:'contain',width:'100%',height:'100%',borderRadius:10,}} source={require('/React1/Bankproject/Bankprojectpayment/assets/ad1.png')} /></View>
        <View style={{marginHorizontal:20}}><Image style={{resizeMode:'contain',width:'100%',height:'100%',borderRadius:10,}} source={require('/React1/Bankproject/Bankprojectpayment/assets/ad1.png')} /></View>
        <View style={{marginHorizontal:20}}><Image style={{resizeMode:'contain',width:'100%',height:'100%',borderRadius:10,}} source={require('/React1/Bankproject/Bankprojectpayment/assets/ad1.png')} /></View>
      </Swiper>
        </View> 

          <View style={{backgroundColor:'white',paddingBottom:50}}>
            <View style={{marginLeft:20,marginBottom:15,paddingTop:5}}>
              <Text style={{color:colorschemes.mainColor,fontSize:colorschemes.homeheadingfontSize,
                fontWeight:colorschemes.homeHeadingfontWeight,}}>Recharge & Purchase</Text>
            </View>

            <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',
            paddingHorizontal: 20,flexWrap:'wrap'}}>
              
              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <Entypo name='mobile' size={30} color={colorschemes.mainColor} style={{marginBottom:8}}></Entypo> */}
                <Mobile />
                <Text style={{textAlign:'center'}}>Mobile Prepaid</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <Entypo name='mobile' size={30} color={colorschemes.mainColor} style={{marginBottom:8}}></Entypo> */}
                <MobilePostpaid />
                <Text style={{textAlign:'center'}}>Mobile Postpaid</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
              {/* <FontAwesome name='satellite-dish' size={30} color={colorschemes.mainColor} style={{marginBottom:8}}></FontAwesome> */}

              <DthLogo />

                <Text style={{textAlign:'center'}}>DTH</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                <MaterialCommunityIcon name='car-select' size={30} color={colorschemes.mainColor} style={{marginBottom:8}}></MaterialCommunityIcon>
                <Text style={{textAlign:'center'}}>FASTag</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',minWidth: '20%',alignItems:'flex-start',paddingLeft:20,paddingTop:20}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  {/* <MaterialCommunityIcon name='usb-flash-drive-outline' size={30} color={colorschemes.mainColor} style={{marginBottom:8,}}></MaterialCommunityIcon> */}
                  <DataCardLogo />
                  <Text style={{textAlign:'center'}}>Datacard</Text>
                </View>
              </TouchableOpacity>
              
            </View>
            
                {/* ================================== */}
                <View style={{marginLeft:20,marginBottom:10,paddingTop:20}}>
              <Text style={{color:colorschemes.mainColor,fontSize:colorschemes.homeheadingfontSize,
                fontWeight:colorschemes.homeHeadingfontWeight,}}>Pay Bills</Text>
            </View>

            <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',
            paddingHorizontal: 20,flexWrap:'wrap',paddingTop:10}}>
              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%',}}>
                <BulbLogo />
                <Text style={{textAlign:'center'}}>Electricity</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <FontAwesome name='hand-holding-water' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <WaterLogo />
                <Text style={{textAlign:'center'}}>Water</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
              {/* <MaterialCommunityIcon name='gas-cylinder' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
              <GasLogo />

                <Text style={{textAlign:'center'}}>LPG</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <MaterialIcon name='connected-tv' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <TvLogo />
                <Text style={{textAlign:'center'}}>Cable TV</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={{flex:1,flexDirection:'column',minWidth: '20%',alignItems:'flex-start',paddingLeft:10,paddingTop:20}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  {/* <MaterialCommunityIcon name='credit-card-outline' size={30} color={colorschemes.mainColor} style={{marginBottom:8,}}/> */}
                  <CreditCardLogo />
                  <Text style={{textAlign:'center'}}>Credit Card</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',minWidth: '20%',alignItems:'flex-start',paddingLeft:20,paddingTop:20}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  {/* <Entypo name='old-phone' size={30} color={colorschemes.mainColor} style={{marginBottom:8,}} /> */}
                  <TelephoneLogo />
                  <Text style={{textAlign:'center'}}>Landline</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',minWidth: '20%',alignItems:'flex-start',paddingLeft:20,paddingTop:20}}>
                <View style={{flexDirection:'column',alignItems:'center',}}>
                  {/* <MaterialCommunityIcon name='usb-flash-drive-outline' size={30} color={colorschemes.mainColor} style={{marginBottom:8,}} /> */}
                  <WifiLogo />
                  <Text style={{textAlign:'center'}}>Broadband Postpaid</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',minWidth: '20%',alignItems:'flex-start',paddingLeft:30,paddingTop:20}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  <Feather name='more-horizontal' size={30} color={colorschemes.mainColor} style={{marginBottom:8,}} />
                  <Text style={{textAlign:'center'}}>All</Text>
                </View>
              </TouchableOpacity>
              
            </View>
            {/* ================================================ */}
            <View style={{marginLeft:20,marginBottom:10,paddingTop:20}}>
              <Text style={{color:colorschemes.mainColor,fontSize:colorschemes.homeheadingfontSize,
                fontWeight:colorschemes.homeHeadingfontWeight,}}>Travel</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',
            paddingHorizontal: 20,flexWrap:'wrap',paddingTop:10}}>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%',}}>
                {/* <FontAwesome name='car-side' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <CarLogo />
                <Text style={{textAlign:'center'}}>Cabs</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <MaterialIcon name='flight' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <FlightLogo />
                <Text style={{textAlign:'center'}}>Flights</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
              {/* <MaterialCommunityIcon name='bus-articulated-front' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
              <BusLogo />
                <Text style={{textAlign:'center'}}>Bus</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <FontAwesome name='hotel' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <HotelsLogo />
                <Text style={{textAlign:'center'}}>Hotels</Text>
              </TouchableOpacity>

              </View>

              {/* ---------------------------------------------------- */}
              <View style={{marginLeft:20,marginBottom:15,paddingTop:25}}>
              <Text style={{color:colorschemes.mainColor,fontSize:colorschemes.homeheadingfontSize,
                fontWeight:colorschemes.homeHeadingfontWeight,}}>Other Services</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',
            paddingHorizontal: 20,flexWrap:'wrap',paddingBottom:30}}>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <FontAwesome name='praying-hands' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <DonationLogo />
                <Text style={{textAlign:'center'}}>Religious Donation</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <MaterialIcon name='stacked-bar-chart' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <MutualFundLogo />
                <Text style={{textAlign:'center'}}>Mutual Funds</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
              {/* <FontAwesome name='hands-helping' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
              <InsuranceLogo />
                <Text style={{textAlign:'center'}}>Insurance</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',minWidth: '20%'}}>
                {/* <FontAwesome name='book-reader' size={30} color={colorschemes.mainColor} style={{marginBottom:8}} /> */}
                <BookLogo />
                <Text style={{textAlign:'center'}}>Efee</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:1,flexDirection:'column',minWidth: '20%',alignItems:'flex-start',paddingLeft:10,paddingTop:20}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  {/* <Entypo name='shop' size={30} color={colorschemes.mainColor} style={{marginBottom:8,}} /> */}
                  <MarketplaceLogo />
                  <Text style={{textAlign:'center'}}>Marketplace</Text>
                </View>
              </TouchableOpacity>
     
              
            </View>

          </View>
          </View>
        </ScrollView>
   
      </View>

    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
 
});
export default HomeScreen;