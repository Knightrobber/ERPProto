import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
  
  export default class MarkAttendance extends Component{
    render(){
        return(
            <View>
                <Text>Mark Attendance</Text>
                <Button title="Logout" onPress={()=>{this.props.navigation.navigate('LoginStudent')}} />
            </View>
        )
    }
  }