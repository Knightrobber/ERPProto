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
  
  export default class FindFreeSlots extends Component{
    render(){
        return(
            <View>
                <Text>Free slot finder</Text>
                <Button title="Go Home" onPress={()=>{this.props.navigation.navigate('Auth')}} />
            </View>
        )
    }
  }