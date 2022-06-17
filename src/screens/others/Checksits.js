import { StyleSheet, Text, View,TextInput, TouchableOpacity,StatusBar,KeyboardAvoidingView, ScrollView, } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SelectDropdown from 'react-native-select-dropdown'

const seats = ["1A", "2A", "3A", "SL","2S"]
const fStation=["RXL","ANVT","JLC"]
const tStation=["RXL","ANVT","JLC"]
const quotas= ["GN","TQ","LQ","LB"]
const Checksits = ({navigation}) => {

    const [fromStation, setFromStation] = useState('')
    const [toStation, setToStation] = useState('')
    const [date, setDate] = useState('')
    const [seatClass, setSeatClass] = useState('Choose Your Seat Class')
    const [quota, setQuota] = useState('')
    const [trainNumber, setTrainNumber] = useState('')
    const [trainName, setTrainName] = useState('')
    const [totalFare, setTotalFare] = useState('')
    const [currentStatus, setCurrentStatus] = useState('')
    const [classofSeats, setClassofSeats] = useState('')
    const [selectedItem, setSelectedItem] = useState('1A')

    const fetchPNR=() => {
        fetch(`https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${seatClass}&fromStationCode=${fromStation}&quota=${quota}&toStationCode=${toStation}&trainNo=${trainNumber}&date=${date}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c981ec28f8msha31db1f448a4ae6p1207ebjsne85f4cd569ad',
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(response =>{
            setTotalFare(response.data[0].total_fare)
            setCurrentStatus(response.data[0].current_status)
            
      }).catch(err => console.error(err));
    }


  return (
    <View style={{flex:1}}>
        <ScrollView>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <View style={{backgroundColor:'blue',height:520}}>
      <Text style={{color:'white',marginLeft:70,fontSize:18,backgroundColor:'red',width:35,padding:1,borderRadius:5,height:25}}>Live</Text>
      <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{marginLeft:15,fontSize:24,color:'white',fontWeight:'bold',marginTop:-5,letterSpacing:1}}>Seat Availability</Text>
      </View>
      <KeyboardAvoidingView style={{marginTop:10,backgroundColor:'white',width:'90%',marginLeft:22,borderRadius:8}}>
          <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                <SelectDropdown
                  dropdownIconPosition='right'
                  style={{}}
                  dropdownStyle={{backgroundColor:'white',width:'90%',borderRadius:20,borderColor:'grey',borderWidth:1}}
                  
                data={seats}
                onSelect={(seatClass) => {
                  setSeatClass(seatClass)
                  // console.log(seatClass)
                }}
                buttonTextAfterSelection={(selectedItem) => {
                  return seatClass
                  setSeatClass(seatClass)
                }}
              />
              <TextInput 
          style={{height: 50,width:300, borderWidth:1,borderColor: 'green',backgroundColor:'white',borderRadius:5,marginTop:10,fontSize:20,}}
          placeholder="To Station ANVT,JLC,RXL"
          
          onChangeText={(text) => setFromStation(text)}
          value={fromStation}
          onSubmitEditing={() => {
            setFromStation(fromStation)
          }}
          />
          <SelectDropdown
          style={{marginTop:50,marginLeft:10,width:300,height:50,borderRadius:8,borderColor:'grey',borderWidth:1}}
          data={quotas}
          onSelect={(quota) => {
            setQuota(quota)
            // console.log(quota)
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return quota
            setQuota(quota)
          }}
        />
        <TextInput 
          style={{height: 50,width:300, borderWidth:1,borderColor: 'green',backgroundColor:'white',borderRadius:5,marginTop:10,fontSize:20}}
          placeholder="To Station ANVT,JLC,RXL"
          
          onChangeText={(text) => setToStation(text)}
          value={toStation}
          onSubmitEditing={() => {
            setToStation(toStation)
          }}
          />  
          </View>

      <TextInput 
          style={{height: 50,width:300, borderWidth:1,borderColor: 'green',backgroundColor:'white',borderRadius:5,marginTop:10,fontSize:20,marginLeft:35,}}
          placeholder="Train Number 15273,15274"
          keyboardType="numeric"
          onChangeText={(text) => setTrainNumber(text)}
          value={trainNumber}
          onSubmitEditing={() => {
            setTrainNumber(trainNumber)
          }}
          /> 
      <TextInput 
          style={{height: 50,width:300, borderWidth:1,borderColor: 'green',backgroundColor:'white',borderRadius:5,marginTop:10,fontSize:20,marginLeft:35,}}
          placeholder="Date (2022-06-16)"
          keyboardType="numeric"
          onChangeText={(text) => setDate(text)}
          value={date}
          onSubmitEditing={() => {
            setDate(date)
          }}
          /> 
      <View style={{marginTop:10,height:60,backgroundColor:'gray',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
          <TouchableOpacity
          onPress={()=>fetchPNR()}
          >
            <Text style={styles.search}>Check Seat Availability </Text>
          </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
      
    </View>
      <ScrollView style={{flex:1}}
          showsVerticalScrollIndicator={false}
      >
          <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
              fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Train Number  : {trainNumber}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
              fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>From  : {fromStation}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
              fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>To  : {toStation}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
              fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Total Fare  : {totalFare}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'green',fontWeight:'bold',
              fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Current Status  : {currentStatus}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
              fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Quota  : {quota}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
              fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Class  : {seatClass}</Text>
          </TouchableOpacity>
      </ScrollView>
      </ScrollView>
  </View>
  )
}

export default Checksits

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
      classChoose:{
        marginTop:10,
        letterSpacing:2,
        fontFamily:'Roboto',
        fontSize:30,
        fontWeight:'bold',
      }
})