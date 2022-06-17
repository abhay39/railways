import { StyleSheet, Text, View,TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView, Image, ScrollView } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const RunningStatus = ({navigation}) => {
    const [trainNumber, setTrainNumber] = useState('')
    const [trainName, setTrainName] = useState('')
    const [curStation, setCurStation] = useState('')  
    const [nextStation, setNextStation] = useState('')
    const [delay, setDelay] = useState('')
    const [distanceTravelled, setDistanceTravelled] = useState('')
    const [distanceRemaining, setDistanceRemaining] = useState('')
    const [totalDistance, setTotalDistance] = useState('')
    const [PreviousStation, setPreviousStation] = useState('')
    const [currLocation, setCurrLocation] = useState('')
    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')
    const [platform, setPlatform] = useState('')
    const [day, setDay] = useState('')

    const fetchTrainStatus=() => {
        fetch(`https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNumber}&startDay=${day}`,{
            method: 'GET',
	        headers: {
                'X-RapidAPI-Key': 'c981ec28f8msha31db1f448a4ae6p1207ebjsne85f4cd569ad',
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
	        }
        })
        .then(response => response.json())
        .then(response =>{
            setTrainName(response.data.seo_train_name)
            setDestination(response.data.destination)
            setSource(response.data.source)
            setDelay(response.data.delay)
            setCurStation(response.data.current_station_name)
            setDistanceTravelled(response.data.distance_from_source)
            setDistanceTravelled(response.data.distance_from_source)
            setTotalDistance(response.data.total_distance)
            setPreviousStation(response.data.previous_stations[0].station_name)
            setCurrLocation(response.data.current_location_info[1].readable_message)

            setNextStation(response.data.upcoming_stations[1].station_name)
            setPlatform(response.data.upcoming_stations[1].platform_number)
            // console.log(response.data.delay)
      }).catch(err => console.error(err));
    }
    
    
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={{backgroundColor:'blue',height:400}}>
        <Text style={{color:'white',marginLeft:70,fontSize:18,backgroundColor:'red',width:35,padding:1,borderRadius:5,height:25}}>Live</Text>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
          <TouchableOpacity
            onPress={()=>navigation.navigate('Home')}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={{marginLeft:15,fontSize:24,color:'white',fontWeight:'bold',marginTop:-5,letterSpacing:1}}>Running Status</Text>
        </View>
        <KeyboardAvoidingView style={{marginTop:30,backgroundColor:'white',height:200,width:'90%',marginLeft:22,borderRadius:8}}>
          <TextInput 
            style={{height: 50, borderColor: 'gray',margin:20,fontSize:20,}}
            placeholder="From Station"
            onChangeText={() => {
              
            }}
          />
          <View style={{borderWidth:1,marginTop:-10,borderColor:'gray',margin:10}} />
          <TextInput 
          style={{height: 50, borderColor: 'gray',margin:20,fontSize:20,marginTop:0}}
          placeholder="To Station"
          onChangeText={() => {
            
          }}
        />
        <View style={{height:60,backgroundColor:'gray',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <TouchableOpacity>
              <Text style={styles.search}>Search Trains </Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        <View style={{flexDirection:'row',marginTop:15}}>
        <TextInput 
            style={{height: 50,width:200, borderColor: 'white',backgroundColor:'white',borderRadius:5,margin:20,fontSize:20,marginLeft:20,}}
            placeholder="Enter Train Number"
            keyboardType="numeric"
            onChangeText={(trainNumber) => {
                setTrainNumber(trainNumber)
            }}
            onSubmitEditing={() => {
                setTrainNumber(trainNumber)
            }}
            />
        <TextInput 
            style={{height: 50,width:80, borderColor: 'white',backgroundColor:'white',borderRadius:5,marginTop:20,marginLeft:-20,fontSize:20,}}
            placeholder="Day"
            keyboardType="numeric"
            onChangeText={(day) => {
                setDay(day)
            }}
            onSubmitEditing={() => {
                setDay(day)
            }}
            />
            <TouchableOpacity
                onPress={() => fetchTrainStatus()}
            >
                <Text style={{marginTop:20,backgroundColor:'red',height:50,color:'white',fontSize:25,marginRight:5,padding:5,marginLeft:8,borderRadius:5}}>Proceed</Text>
            </TouchableOpacity>
      </View>
      </View>
      <View style={{marginLeft:10,marginRight:15,flexDirection:'row'}}>
      <TouchableOpacity style={{backgroundColor:'white',width:90,height:90,marginTop:20,borderRadius:10,alignItems:'center'}}>
        <Ionicons name="alarm-outline" size={40} color="blue" />
        <Text style={{fontSize:18,fontWeight:'bold',color:'black',textAlign:'center'}}>Coach Position</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'white',width:90,height:90,marginTop:20,borderRadius:10,alignItems:'center',marginLeft:10}}>
        <Ionicons name="alarm-outline" size={40} color="blue" />
        <Text style={{fontSize:18,fontWeight:'bold',color:'black',textAlign:'center'}}>Station Alarm</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'white',width:90,height:90,marginTop:20,borderRadius:10,alignItems:'center',marginLeft:10}}>
        <Ionicons name="alarm-outline" size={40} color="blue" />
        <Text style={{fontSize:18,fontWeight:'bold',color:'black',textAlign:'center'}}>Platform Locator</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'white',width:90,height:90,marginTop:20,borderRadius:10,alignItems:'center',marginLeft:10}}>
        <FontAwesome name="rupee" size={40} color="blue" />
        <Text style={{fontSize:18,fontWeight:'bold',color:'black',textAlign:'center'}}>Refund Calculator</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{marginTop:20,flex:1}}
        showsVerticalScrollIndicator={false}

      >
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Train Number : {trainNumber}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:24,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Train Name : {trainName}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:24,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Source : {source}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:24,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Destination : {destination}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:23,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Previous Station : {PreviousStation}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:24,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Current Station : {curStation}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:100,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:24,color:'green',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Current Location : {currLocation}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:80,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Next Station : {nextStation}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Platform Number : {platform}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'red',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Delay : {delay} minutes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Total Distance :  {totalDistance} KM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Distance Travelled : {distanceTravelled} KM</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:'#d2d2d2',height:50,margin:20,borderRadius:10,}}>
          <Text style={{fontSize:25,color:'blue',fontWeight:'bold',
            fontFamily:'sans-serif-medium',textAlign:'left',marginLeft:10,marginRight:10,marginTop:9}}>Remaining Distance : {totalDistance - distanceTravelled} KM</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  )
}



export default RunningStatus

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