import { StyleSheet, Text, View,TextInput, TouchableOpacity,StatusBar,KeyboardAvoidingView, ScrollView } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const PnrStatus = ({navigation}) => {
    const [pnrNumber, setPnrNumber] = useState('')
    const [trainName, setTrainName] = useState('')
    const [trainNumber, setTrainNumber] = useState('')
    const [sitclass, setSitClass] = useState('')
    const [passenger, setPassenger] = useState('')
    const [quota,   setQuota] = useState('')
    const [travelDate, setTravelDate] = useState('')
    const [journeyFrom, setJourneyFrom] = useState('')
    const [journeyTo, setJourneyTo] = useState('')
    const [bookingDate, setBookingDate] = useState('')
    const [bookingStatus, setBookingStatus] = useState('')
    const [bookingStatusBearth, setBookingStatusBearth] = useState('')
    const [bookingStatusBearthNo, setBookingStatusBearthNo] = useState('')
    const [bookingStatusBearthCoach, setBookingStatusBearthCoach] = useState('')
    const [currentStatus, setCurrentStatus] = useState('')
    const [currentStatusBearth, setCurrentStatusBearth] = useState('')
    const [currentStatusBearthNo, setCurrentStatusBearthNo] = useState('')
    const [currentStatusBearthCoach, setCurrentStatusBearthCoach] = useState('')

    const fetchPNR=() => {
        fetch(`https://irctc1.p.rapidapi.com/api/v2/getPNRStatus?pnrNumber=${pnrNumber}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c981ec28f8msha31db1f448a4ae6p1207ebjsne85f4cd569ad',
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(response =>{
            setTrainNumber(response.data.train_number)
            setTrainName(response.data.train_name)
            
            setSitClass(response.data.class)
            setQuota(response.data.quota)
            setTravelDate(response.data.date)
            setJourneyFrom(response.data.journey_src)
            setJourneyTo(response.data.journey_dest)
            setBookingDate(response.data.booking_date)
            setPassenger(response.data.no_of_passengers)

            setBookingStatus(response.data.passenger[0].bookingStatus)
            setBookingStatusBearthNo(response.data.passenger[0].bookingBerthNo)
            setBookingStatusBearthCoach(response.data.passenger[0].bookingCoachId)
            setBookingStatusBearth(response.data.passenger[0].bookingBerthCode)

            setCurrentStatus(response.data.passenger[0].currentStatus)
            setCurrentStatusBearth(response.data.passenger[0].currentBerthCode)
            setCurrentStatusBearthCoach(response.data.passenger[0].currentCoachId)
            setCurrentStatusBearthNo(response.data.passenger[0].currentBerthNo)
            
      }).catch(err => console.error(err));
    }

  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={{backgroundColor:'blue',height:250}}>
        <Text style={{color:'white',marginLeft:70,fontSize:18,backgroundColor:'red',width:35,padding:1,borderRadius:5,height:25}}>Live</Text>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
          <TouchableOpacity
            onPress={()=>navigation.navigate('Home')}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={{marginLeft:15,fontSize:24,color:'white',fontWeight:'bold',marginTop:-5,letterSpacing:1}}>PNR Status</Text>
        </View>
        <KeyboardAvoidingView style={{marginTop:30,backgroundColor:'white',height:100,width:'90%',marginLeft:22,borderRadius:8}}>
        <TextInput 
            style={{height: 50,width:300, borderWidth:1,borderColor: 'green',backgroundColor:'white',borderRadius:5,margin:20,fontSize:20,marginLeft:20,}}
            placeholder="Enter PNR Number"
            keyboardType="numeric"
            onChangeText={(text) => setPnrNumber(text)}
            value={pnrNumber}
            onSubmitEditing={() => {
                fetchPNR()
                
            }}
            /> 
        <View style={{marginTop:-10,height:60,backgroundColor:'gray',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <TouchableOpacity
            onPress={()=>fetchPNR()}
            >
              <Text style={styles.search}>Check PNR Status </Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        
      </View>
        <ScrollView style={{flex:1}}
            showsVerticalScrollIndicator={false}
        >
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>PNR Number  : {pnrNumber}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Train Number  : {trainNumber}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Train Name  : {trainName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Class  : {sitclass}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Passenger  : {passenger}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Quota  : {quota}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Travel Date  : {travelDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Journery From  : {journeyFrom}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Journey To  : {journeyTo}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Booking Date  : {bookingDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'green',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Booking Status  : {bookingStatus}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Booking Status Bearth : {bookingStatusBearth}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Booking Status Bearth No  : {bookingStatusBearthNo}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Booking Status Coach : {bookingStatusBearthCoach}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'green',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Current Status  : {currentStatus}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Current Status  Bearth : {currentStatusBearth}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Current Status Bearth No : {currentStatusBearthNo}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
            <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
                fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Current Status Coach  : {currentStatusBearthCoach}</Text>
            </TouchableOpacity>
        </ScrollView>
        
    </View>
  )
}

export default PnrStatus

const styles = StyleSheet.create({
    search:{
        marginTop:10,
        letterSpacing:2,
        fontFamily:'Roboto',
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
      },
})