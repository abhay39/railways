import { StyleSheet, Text, View,TextInput, Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import Entypo from 'react-native-vector-icons/Entypo'
import Picking from '../others/Picking'

const Train = ({navigation}) => {
  const [fromStation, setFromStation] = useState('')
  const [toStation, setToStation] = useState('')
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  
  const [finalDate, setFinalDate] = useState('Empty')

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios' )
    setDate(currentDate)

    let tdate = new Date(currentDate)
    let fDate= tdate.getDate() + '/' + (tdate.getMonth()+1) + '/' + tdate.getFullYear()
    // let FTime = tdate.getHours() + ':' + tdate.getMinutes()
    setFinalDate(fDate + '\n ')
    // console.log(fDate)
  }
  
  
  
  
  return (
    <View style={{backgroundColor:'#DCE0E3',height:'100%'}}>
      <View style={{width:'90%',margin:20,backgroundColor:'white',height:255,borderRadius:20}}>
        <TextInput 
          style={{height: 50, borderColor: 'gray',margin:20,fontSize:20 }}
          placeholder="From Station"
          onChangeText={(fromStation) => {
            setFromStation(fromStation)
          }}
          onSubmitEditing={() => {
            setFromStation(fromStation)
          }}
        />
        <View style={{borderWidth:1,marginTop:-20,borderColor:'gray'}} />
        <TextInput 
          style={{height: 50, borderColor: 'gray',margin:20,fontSize:20,marginTop:0 }}
          placeholder="To Station"
          onChangeText={(toStation) => {
            setToStation(toStation)
            
          }}
          onSubmitEditing={() => {
            setToStation(toStation)
            
          }}
        />
        <View style={{borderWidth:1,marginTop:-20,borderColor:'gray'}} />
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
            <Entypo name="calendar" size={30} color="black" style={{margin:20}} 
            onPress={() => showMode('date')} />
          </TouchableOpacity>
          <Text style={{marginTop:20,fontSize:20,color:'black'}}>{finalDate}</Text>
          <TouchableOpacity
          >
            <Entypo name="cross" size={30} color="black" style={{margin:20,marginLeft:5}} />
          </TouchableOpacity>
          <Text style={{backgroundColor:'#cfc7ce',height:40,fontSize:20,borderRadius:5,padding:5,alignItems:'center',color:'white',fontWeight:'bold',marginTop:15}}
          >Tomorrow</Text>
        </View>
        <View style={{height:60,backgroundColor:'blue',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <TouchableOpacity>
              <Text style={styles.search}>Search Trains </Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity
          onPress={() => navigation.push('Running')}
        >
          <Text style={styles.statusRuning}>Running Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('PNR')}
        >
          <Text style={styles.statusRuning}>PNR Status</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          onPress={() => navigation.push('CheckSits')}
          style={{width: 300,marginLeft:60}}
        >
          <Text style={styles.statusRuning}>Check Seats Availability</Text>
        </TouchableOpacity>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      
    </View>
  )
}

export default Train

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
  statusRuning:{
    marginTop:10,
    letterSpacing:2,
    fontFamily:'Roboto',
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    backgroundColor:'#00b300',
    padding:10,
    borderRadius:10
  }
})