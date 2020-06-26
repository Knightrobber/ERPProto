import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
  import {Picker} from '@react-native-community/picker';
//import { Container, Header, Content, Picker, Form } from "native-base";

  
  export default class TeacherTimeTable extends Component{
      constructor(){
          super();
          this.state = {
              MonStartLec:'Time',MonEndLec:'Time',MonStartLab:'Time',MonEndLab:'Time',MonStartTute:'Time',MonEndTute:'Time',
              TueStartLec:'Time',TueEndLec:'Time',TueStartLab:'Time',TueEndLab:'Time',TueStartTute:'Time',TueEndTute:'Time',
              WedStartLec:'Time',WedEndLec:'Time',WedStartLab:'Time',WedEndLab:'Time',WedStartTute:'Time',WedEndTute:'Time',
              ThuStartLec:'Time',ThuEndLec:'Time',ThuStartLab:'Time',ThuEndLab:'Time',ThuStartTute:'Time',ThuEndTute:'Time',
              FriStartLec:'Time',FriEndLec:'Time',FriStartLab:'Time',FriEndLab:'Time',FriStartTute:'Time',FriEndTute:'Time',
              SatStartLec:'Time',SatEndLec:'Time',SatStartLab:'Time',SatEndLab:'Time',SatStartTute:'Time',SatEndTute:'Time'
          }
      }
      
    render(){
        return(
            <ScrollView>
            <View>
                <Text>TeacherTimeTable</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Picker selectedValue={this.state.MonStartLec} onValueChange={(itemValue)=>{this.setState({MonStartLec:itemValue})}} style={{width:120}}>
                <Picker.Item value="Time" label="Time"/>
                <Picker.Item value="8:00" label="8:00"/>
                <Picker.Item value="8:30" label="8:30"/>
                <Picker.Item value="9:00" label="9:00"/>
                <Picker.Item value="9:30" label="9:30"/>
                <Picker.Item value="10:00" label="10:00"/>
                <Picker.Item value="10:30" label="10:30"/>
                <Picker.Item value="11:00" label="11:00"/>
                <Picker.Item value="11:30" label="11:30"/>
                <Picker.Item value="12:00" label="12:00"/>
                <Picker.Item value="12:30" label="12:30"/>
                <Picker.Item value="13:00" label="13:00"/>
                <Picker.Item value="13:30" label="13:30"/>
                <Picker.Item value="14:00" label="14:00"/>
                <Picker.Item value="14:30" label="14:30"/>
                <Picker.Item value="15:00" label="15:00"/>
                <Picker.Item value="15:30" label="15:30"/>
                <Picker.Item value="16:00" label="16:00"/>
                <Picker.Item value="16:30" label="16:30"/>
                <Picker.Item value="17:00" label="17:00"/>
                <Picker.Item value="17:30" label="17:30"/>
                <Picker.Item value="18:00" label="18:00"/>
                <Picker.Item value="18:30" label="18:30"/>
                <Picker.Item value="19:00" label="19:00"/>
                <Picker.Item value="19:30" label="19:30"/>
                <Picker.Item value="20:00" label="20:00"/>
              </Picker>

              <Picker selectedValue={this.state.MonEndLec} onValueChange={(itemValue)=>{this.setState({MonEndLec:itemValue})}} style={{width:120}}>
                <Picker.Item value="Time" label="Time"/>
                <Picker.Item value="8:00" label="8:00"/>
                <Picker.Item value="8:30" label="8:30"/>
                <Picker.Item value="9:00" label="9:00"/>
                <Picker.Item value="9:30" label="9:30"/>
                <Picker.Item value="10:00" label="10:00"/>
                <Picker.Item value="10:30" label="10:30"/>
                <Picker.Item value="11:00" label="11:00"/>
                <Picker.Item value="11:30" label="11:30"/>
                <Picker.Item value="12:00" label="12:00"/>
                <Picker.Item value="12:30" label="12:30"/>
                <Picker.Item value="13:00" label="13:00"/>
                <Picker.Item value="13:30" label="13:30"/>
                <Picker.Item value="14:00" label="14:00"/>
                <Picker.Item value="14:30" label="14:30"/>
                <Picker.Item value="15:00" label="15:00"/>
                <Picker.Item value="15:30" label="15:30"/>
                <Picker.Item value="16:00" label="16:00"/>
                <Picker.Item value="16:30" label="16:30"/>
                <Picker.Item value="17:00" label="17:00"/>
                <Picker.Item value="17:30" label="17:30"/>
                <Picker.Item value="18:00" label="18:00"/>
                <Picker.Item value="18:30" label="18:30"/>
                <Picker.Item value="19:00" label="19:00"/>
                <Picker.Item value="19:30" label="19:30"/>
                <Picker.Item value="20:00" label="20:00"/>
              </Picker>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Picker selectedValue={this.state.MonStartLab} onValueChange={(itemValue)=>{this.setState({MonStartLab:itemValue})}} style={{width:120}}>
                <Picker.Item value="Time" label="Time"/>
                <Picker.Item value="8:00" label="8:00"/>
                <Picker.Item value="8:30" label="8:30"/>
                <Picker.Item value="9:00" label="9:00"/>
                <Picker.Item value="9:30" label="9:30"/>
                <Picker.Item value="10:00" label="10:00"/>
                <Picker.Item value="10:30" label="10:30"/>
                <Picker.Item value="11:00" label="11:00"/>
                <Picker.Item value="11:30" label="11:30"/>
                <Picker.Item value="12:00" label="12:00"/>
                <Picker.Item value="12:30" label="12:30"/>
                <Picker.Item value="13:00" label="13:00"/>
                <Picker.Item value="13:30" label="13:30"/>
                <Picker.Item value="14:00" label="14:00"/>
                <Picker.Item value="14:30" label="14:30"/>
                <Picker.Item value="15:00" label="15:00"/>
                <Picker.Item value="15:30" label="15:30"/>
                <Picker.Item value="16:00" label="16:00"/>
                <Picker.Item value="16:30" label="16:30"/>
                <Picker.Item value="17:00" label="17:00"/>
                <Picker.Item value="17:30" label="17:30"/>
                <Picker.Item value="18:00" label="18:00"/>
                <Picker.Item value="18:30" label="18:30"/>
                <Picker.Item value="19:00" label="19:00"/>
                <Picker.Item value="19:30" label="19:30"/>
                <Picker.Item value="20:00" label="20:00"/>
              </Picker>

              <Picker selectedValue={this.state.MonEndLab} onValueChange={(itemValue)=>{this.setState({MonEndLab:itemValue})}} style={{width:120}}>
                <Picker.Item value="Time" label="Time"/>
                <Picker.Item value="8:00" label="8:00"/>
                <Picker.Item value="8:30" label="8:30"/>
                <Picker.Item value="9:00" label="9:00"/>
                <Picker.Item value="9:30" label="9:30"/>
                <Picker.Item value="10:00" label="10:00"/>
                <Picker.Item value="10:30" label="10:30"/>
                <Picker.Item value="11:00" label="11:00"/>
                <Picker.Item value="11:30" label="11:30"/>
                <Picker.Item value="12:00" label="12:00"/>
                <Picker.Item value="12:30" label="12:30"/>
                <Picker.Item value="13:00" label="13:00"/>
                <Picker.Item value="13:30" label="13:30"/>
                <Picker.Item value="14:00" label="14:00"/>
                <Picker.Item value="14:30" label="14:30"/>
                <Picker.Item value="15:00" label="15:00"/>
                <Picker.Item value="15:30" label="15:30"/>
                <Picker.Item value="16:00" label="16:00"/>
                <Picker.Item value="16:30" label="16:30"/>
                <Picker.Item value="17:00" label="17:00"/>
                <Picker.Item value="17:30" label="17:30"/>
                <Picker.Item value="18:00" label="18:00"/>
                <Picker.Item value="18:30" label="18:30"/>
                <Picker.Item value="19:00" label="19:00"/>
                <Picker.Item value="19:30" label="19:30"/>
                <Picker.Item value="20:00" label="20:00"/>
              </Picker>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Picker selectedValue={this.state.MonStartTute} onValueChange={(itemValue)=>{this.setState({MonStartTute:itemValue})}} style={{width:120}}>
                <Picker.Item value="Time" label="Time"/>
                <Picker.Item value="8:00" label="8:00"/>
                <Picker.Item value="8:30" label="8:30"/>
                <Picker.Item value="9:00" label="9:00"/>
                <Picker.Item value="9:30" label="9:30"/>
                <Picker.Item value="10:00" label="10:00"/>
                <Picker.Item value="10:30" label="10:30"/>
                <Picker.Item value="11:00" label="11:00"/>
                <Picker.Item value="11:30" label="11:30"/>
                <Picker.Item value="12:00" label="12:00"/>
                <Picker.Item value="12:30" label="12:30"/>
                <Picker.Item value="13:00" label="13:00"/>
                <Picker.Item value="13:30" label="13:30"/>
                <Picker.Item value="14:00" label="14:00"/>
                <Picker.Item value="14:30" label="14:30"/>
                <Picker.Item value="15:00" label="15:00"/>
                <Picker.Item value="15:30" label="15:30"/>
                <Picker.Item value="16:00" label="16:00"/>
                <Picker.Item value="16:30" label="16:30"/>
                <Picker.Item value="17:00" label="17:00"/>
                <Picker.Item value="17:30" label="17:30"/>
                <Picker.Item value="18:00" label="18:00"/>
                <Picker.Item value="18:30" label="18:30"/>
                <Picker.Item value="19:00" label="19:00"/>
                <Picker.Item value="19:30" label="19:30"/>
                <Picker.Item value="20:00" label="20:00"/>
              </Picker>

              <Picker selectedValue={this.state.MonEndTute} onValueChange={(itemValue)=>{this.setState({MonEndTute:itemValue})}} style={{width:120}}>
                <Picker.Item value="Time" label="Time"/>
                <Picker.Item value="8:00" label="8:00"/>
                <Picker.Item value="8:30" label="8:30"/>
                <Picker.Item value="9:00" label="9:00"/>
                <Picker.Item value="9:30" label="9:30"/>
                <Picker.Item value="10:00" label="10:00"/>
                <Picker.Item value="10:30" label="10:30"/>
                <Picker.Item value="11:00" label="11:00"/>
                <Picker.Item value="11:30" label="11:30"/>
                <Picker.Item value="12:00" label="12:00"/>
                <Picker.Item value="12:30" label="12:30"/>
                <Picker.Item value="13:00" label="13:00"/>
                <Picker.Item value="13:30" label="13:30"/>
                <Picker.Item value="14:00" label="14:00"/>
                <Picker.Item value="14:30" label="14:30"/>
                <Picker.Item value="15:00" label="15:00"/>
                <Picker.Item value="15:30" label="15:30"/>
                <Picker.Item value="16:00" label="16:00"/>
                <Picker.Item value="16:30" label="16:30"/>
                <Picker.Item value="17:00" label="17:00"/>
                <Picker.Item value="17:30" label="17:30"/>
                <Picker.Item value="18:00" label="18:00"/>
                <Picker.Item value="18:30" label="18:30"/>
                <Picker.Item value="19:00" label="19:00"/>
                <Picker.Item value="19:30" label="19:30"/>
                <Picker.Item value="20:00" label="20:00"/>
              </Picker>
              </View>
              </View>
                <Text>Monday</Text>
              </View>
                <Text>Tuesday</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{flexDirection:'column',alignItems:'center'}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.TueStartLec} onValueChange={(itemValue)=>{this.setState({TueStartLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.TueEndLec} onValueChange={(itemValue)=>{this.setState({TueEndLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.TueStartLab} onValueChange={(itemValue)=>{this.setState({TueStartLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.TueEndLab} onValueChange={(itemValue)=>{this.setState({TueEndLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.TueStartTute} onValueChange={(itemValue)=>{this.setState({TueStartTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.TueEndTute} onValueChange={(itemValue)=>{this.setState({TueEndTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  </View>
    <Text>Tuesday</Text>
  </View>
                   <Text>Wednesday</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{flexDirection:'column',alignItems:'center'}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.WedStartLec} onValueChange={(itemValue)=>{this.setState({WedStartLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.WedEndLec} onValueChange={(itemValue)=>{this.setState({WedEndLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.WedStartLab} onValueChange={(itemValue)=>{this.setState({WedStartLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.WedEndLab} onValueChange={(itemValue)=>{this.setState({WedEndLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.WedStartTute} onValueChange={(itemValue)=>{this.setState({WedStartTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.WedEndTute} onValueChange={(itemValue)=>{this.setState({WedEndTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  </View>
    <Text>Wednesday</Text>
  </View>
              <Text>Thursday</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{flexDirection:'column',alignItems:'center'}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.ThuStartLec} onValueChange={(itemValue)=>{this.setState({ThuStartLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.ThuEndLec} onValueChange={(itemValue)=>{this.setState({ThuEndLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.ThuStartLab} onValueChange={(itemValue)=>{this.setState({ThuStartLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.ThuEndLab} onValueChange={(itemValue)=>{this.setState({ThuEndLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.ThuStartTute} onValueChange={(itemValue)=>{this.setState({ThuStartTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.ThuEndTute} onValueChange={(itemValue)=>{this.setState({ThuEndTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  </View>
    <Text>Thursday</Text>
  </View>
              <Text>Friday</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{flexDirection:'column',alignItems:'center'}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.FriStartLec} onValueChange={(itemValue)=>{this.setState({FriStartLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.FriEndLec} onValueChange={(itemValue)=>{this.setState({FriEndLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.FriStartLab} onValueChange={(itemValue)=>{this.setState({FriStartLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.FriEndLab} onValueChange={(itemValue)=>{this.setState({FriEndLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.FriStartTute} onValueChange={(itemValue)=>{this.setState({FriStartTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.FriEndTute} onValueChange={(itemValue)=>{this.setState({FriEndTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  </View>
    <Text>Friday</Text>
  </View>
              <Text>Saturday</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{flexDirection:'column',alignItems:'center'}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.SatStartLec} onValueChange={(itemValue)=>{this.setState({SatStartLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.SatEndLec} onValueChange={(itemValue)=>{this.setState({SatEndLec:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.SatStartLab} onValueChange={(itemValue)=>{this.setState({SatStartLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.SatEndLab} onValueChange={(itemValue)=>{this.setState({SatEndLab:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Picker selectedValue={this.state.SatStartTute} onValueChange={(itemValue)=>{this.setState({SatStartTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>

  <Picker selectedValue={this.state.SatEndTute} onValueChange={(itemValue)=>{this.setState({SatEndTute:itemValue})}} style={{width:120}}>
    <Picker.Item value="Time" label="Time"/>
    <Picker.Item value="8:00" label="8:00"/>
    <Picker.Item value="8:30" label="8:30"/>
    <Picker.Item value="9:00" label="9:00"/>
    <Picker.Item value="9:30" label="9:30"/>
    <Picker.Item value="10:00" label="10:00"/>
    <Picker.Item value="10:30" label="10:30"/>
    <Picker.Item value="11:00" label="11:00"/>
    <Picker.Item value="11:30" label="11:30"/>
    <Picker.Item value="12:00" label="12:00"/>
    <Picker.Item value="12:30" label="12:30"/>
    <Picker.Item value="13:00" label="13:00"/>
    <Picker.Item value="13:30" label="13:30"/>
    <Picker.Item value="14:00" label="14:00"/>
    <Picker.Item value="14:30" label="14:30"/>
    <Picker.Item value="15:00" label="15:00"/>
    <Picker.Item value="15:30" label="15:30"/>
    <Picker.Item value="16:00" label="16:00"/>
    <Picker.Item value="16:30" label="16:30"/>
    <Picker.Item value="17:00" label="17:00"/>
    <Picker.Item value="17:30" label="17:30"/>
    <Picker.Item value="18:00" label="18:00"/>
    <Picker.Item value="18:30" label="18:30"/>
    <Picker.Item value="19:00" label="19:00"/>
    <Picker.Item value="19:30" label="19:30"/>
    <Picker.Item value="20:00" label="20:00"/>
  </Picker>
  </View>
  </View>
    <Text>Saturday</Text>
  </View>
                <Button title="Save To Database" onPress={()=>{this.saveToDatabase()}}/>
                <Button title="Go to home" onPress={()=>{this.props.navigation.navigate('Auth')}} />
                
            </View>
            </ScrollView>
        )
    }
  }