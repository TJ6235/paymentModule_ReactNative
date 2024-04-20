
import { StyleSheet} from 'react-native';
import Paymenttomobile from './components/Paymenttomobile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Paytocontactscreen from './components/Paytocontactscreen';
import Paymenttoselfaccount from './components/Paymenttoselfaccount';
import Paymentselftransferpage from './components/Paymentselftransferpage';
import Paymenttoupiidpage from './components/Paymenttoupiidpage';
import Paymenttoupitransferpage from './components/Paymenttoupitransferpage';
import Paymenttoaccountnumber from './components/Paymenttoaccountnumber';
import Newaccountcreationpage from './components/Newaccountcreationpage';
import Paymenttommid from './components/Paymenttommid';
import Newmmidcreationpage from './components/Newmmidcreationpage';
import Schedulepayment from './components/Schedulepayment';
import Newupicreationpage from './components/Newupicreationpage';
import Sentmoneymodal from './components/Sentmoneymodal';
import Paymentsuccessful from './components/Paymentsuccessful';
import Newmmidcreationsuccess from './components/Newmmidcreationsuccess';
import Newaccountcreationsuccesspage from './components/Newaccountcreationsuccesspage';
import Newupicreationsuccess from './components/Newupicreationsuccess';
import Upipaymentsuccesspage from './components/Upipaymentsuccesspage';
import Selftransfersuccess from './components/Selftransfersuccess';
// import DrawerNavigation from './components/DrawerNavigation';
import Home from './components/Home';
import HomeScreen from './components/HomeScreen';


const Stack = createStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Hme" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="paymenttomobile" component={Paymenttomobile} /> 
      <Stack.Screen name="paytocontact" component={Paytocontactscreen} />
      <Stack.Screen name='Hme' component={Home}/>
      <Stack.Screen name='Hmescreen ' component={HomeScreen}/>
      <Stack.Screen name='paymenttoselfaccount' component={Paymenttoselfaccount}/>
      <Stack.Screen name='paymentselftransterpage' component={Paymentselftransferpage} />
      <Stack.Screen name='paymenttoupiid' component={Paymenttoupiidpage} />
      <Stack.Screen name='paymenttoupitranster' component={Paymenttoupitransferpage} />
      <Stack.Screen name='paymenttoaccountnumber' component={Paymenttoaccountnumber} />
      <Stack.Screen name='newaccountcreation' component={Newaccountcreationpage} />
      <Stack.Screen name='paymenttommid' component={Paymenttommid}/>
      <Stack.Screen name='newmmidcreation' component={Newmmidcreationpage} />
      <Stack.Screen name='schedulepayment' component={Schedulepayment} />
      <Stack.Screen name='newupicreation' component={Newupicreationpage} />
      <Stack.Screen name='sentmoneymodall' component={Sentmoneymodal} />
      <Stack.Screen name='paymentsuccessful' component={Paymentsuccessful} />
      <Stack.Screen name='newmmidsuccess' component={Newmmidcreationsuccess} />
      <Stack.Screen name='newaccountcreationsuccess' component={Newaccountcreationsuccesspage} />
      <Stack.Screen name='newupiidcreationsuccess' component={Newupicreationsuccess} /> 
      <Stack.Screen name='Upisuccesspage' component={Upipaymentsuccesspage} /> 
      <Stack.Screen name='Selftransfersuccess' component={Selftransfersuccess} /> 
    </Stack.Navigator>
  </NavigationContainer>
  
    
  );
}

const styles = StyleSheet.create({
  
});
