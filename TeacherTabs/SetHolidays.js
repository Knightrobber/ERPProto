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
  import DatePicker from 'react-native-datepicker';
  import database from '@react-native-firebase/database';
  import auth from '@react-native-firebase/auth';
  import {Dropdown} from 'react-native-material-dropdown';
  export default class SetHolidays extends Component{

    constructor(){
        super();
        this.state = {
            Id:'',
            dateHoliday:null,
            dateBegin:null,
            dateEndMid:null,
            dateEndEnd:null,
            semDates:null,
            semToReset:'Select Sem',
            resetDate:'',
            holidays:'',
            holidayDelete:'',
            
        }
    }
    componentDidMount(){
        auth().onAuthStateChanged((user)=>{
            if(!user)
            console.log("error has occured in authstatechanged ");
            if(user){
            console.log("The is the user " + user);
                let userName = user.email;
                userName = userName.split("@")
                if(userName[0].includes('.'))
                userName[0] = userName[0].replace(/[.]/g,"+");
                let Id = userName[0];
                this.setState({Id:Id})
            }
        })
        this.displayHolidays();
        this.displaySemDates();
    }  

    render(){
       

        /*
        database().ref("/DatesOfSem").once('value',(snap)=>{
            let dateBegin = new Object();
            dateBegin.label = snap.val().Beginning;
            dateBegin.value = snap.val().Beginning;
            semDates = semDates.concat(dateBegin)
            let dateEndMid = new Object();
            dateEndMid.label = snap.val().MidSem;
            dateEndMid.value = snap.val().MidSem;
            semDates = semDates.concat(dateEndMid);
            let dateEndEnd = new Object();
            dateEndEnd.label = snap.val().EndSem;
            dateEndEnd.value = snap.val().EndSem;
            semDates = semDates.concat(dateEndEnd);
        })
        */
        return(
            <View>
                <Text>Set Holidays</Text>
                <View>
                    <Text>Set Specific day holidays</Text>
                    <DatePicker date={this.state.dateHoliday} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateHoliday: date})}}  mode="date" placeholder="select date" />
                    <Button title="Set holiday" onPress={()=>{this.setHoliday()}} />
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text>The following holidays have been set</Text>
                    <Text numberOfLines= {5}>{this.state.holidays}</Text>
                </View>
                <DatePicker date={this.state.holidayDelete} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({holidayDelete: date})}}  mode="date" placeholder="select date" />
                <Button title="Delete Holiday" onPress = {()=>{this.deleteHoliday()}}/>

                <View style={{flexDirection:'column'}}>
                    <Text>Set Beginning and End date Of sem</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text>Set Beginning date</Text>
                    <DatePicker date={this.state.dateBegin} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateBegin: date})}}  mode="date" placeholder="select date" />
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                        <Text>Set End Date OF MIDSEM</Text>
                        <DatePicker date={this.state.dateEndMid} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateEndMid: date})}}  mode="date" placeholder="select date" />
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text>Set End Date of ENDSEM</Text>
                        <DatePicker date={this.state.dateEndEnd} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateEndEnd: date})}}  mode="date" placeholder="select date" />
                        </View>
                    </View>
                    <Button title="Set Dates" onPress={()=>{this.setSemDates()}} />
                    <View>
                        <Text>The following dates have been set</Text>
                        <Text>{this.state.semDates}</Text>
                    </View>
                </View>
            </View>
        )
    }

    setHoliday = ()=>{
        
        if(this.state.dateHoliday==null)
        {
            alert('No date set');
            return;
        }
        let holiday = this.state.dateHoliday;
        database().ref('/Holidays').once('value',(snap)=>{
            if(snap.val()==null){
                console.log("Yes its null");
            database().ref('/Holidays').set({holidays:[holiday]}).then(()=>{
                console.log("Holiday set")
            });
            }
            else
            {let holidays = snap.val().holidays;
                
                let tempMainDate = new Date(holiday); let flag=0;
                for(let i=0;i<holidays.length;++i){
                    
                    let tempDate = new Date(holidays[i]);
                    console.log(tempDate.getFullYear() +" " + tempDate.getMonth())
                    if(tempDate.getTime()==tempMainDate.getTime())
                        flag=1;
                }
                if(flag==1){
                    alert("this date is already in the database");
                    return;
                }
                console.log("The holiday before concat " + holiday)
                holidays = holidays.concat(holiday);
                console.log("new holidays " + holidays)
                database().ref("/Holidays").set({holidays:holidays}).then(()=>{
                    this.displayHolidays();
                    alert("Holiday set");
                });
            }
        })
        
    }

    displayHolidays=()=>{
        let holidays;
        let displayHolidays = [];
        let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        database().ref("/Holidays").once('value',(snap)=>{
            holidays = snap.val().holidays;
            for(let i=0;i<holidays.length;++i){
            let tempDate = new Date(holidays[i]);
            let tempString = tempDate.getDate() + " " + Months[tempDate.getMonth()] + " |  ";
            displayHolidays = displayHolidays.concat(tempString);
            }
            this.setState({holidays:displayHolidays});
        })
    }

    deleteHoliday=()=>{
        if(this.state.holidayDelete==''){
            alert('No date selected to delete');
            return;
        }
        let holidayDelete = this.state.holidayDelete;
        database().ref("/Holidays").once('value',(snap)=>{
        let holidays = snap.val().holidays;
                
                let tempMainDate = new Date(holidayDelete); let flag=0;let index =null;
                for(let i=0;i<holidays.length;++i){
                    
                    let tempDate = new Date(holidays[i]);
                    console.log(tempDate.getFullYear() +" " + tempDate.getMonth())
                    if(tempDate.getTime()==tempMainDate.getTime()){
                        flag=1;index =i;
                    }
                }
                if(flag==0){
                    alert("this date is not a holiday");
                    return;
                }
                holidays.splice(index,1);
                console.log(holidays);
                
                database().ref("/Holidays").set({
                    holidays:holidays
                }).then(()=>{this.displayHolidays();})


})
    

}

setSemDates = () =>{
    if(this.state.dateBegin==null || this.state.dateEndMid==null || this.state.dateEndEnd==null){
        alert("One of the dates haven't been entered")
        return;
    }
    let dateBegin = new Date(this.state.dateBegin);
    let dateEndMid = new Date(this.state.dateEndMid);
    let dateEndEnd = new Date(this.state.dateEndEnd);

    if(dateBegin.getTime() > dateEndMid.getTime())
    {
        alert("The beginning and end dates haven't been set properly");
        return;
    }
    if(dateEndMid.getTime()>dateEndEnd.getTime()){
        alert("The end dates haven't been set properly");
        return;
    }

    database().ref("/DatesOfSem").set({Beginning:this.state.dateBegin,MidSem:this.state.dateEndMid,EndSem:this.state.dateEndEnd}).then(()=>{
        alert("The Semester dates have been set");
        this.displaySemDates();
    })
}

displaySemDates =()=>{
    database().ref("/DatesOfSem").once('value',(snap)=>{
        if(snap.val()==null)
        {
            this.setState({semDates:'No dates have been set yet'});
            return;
        }

        let semDates = snap.val();
        let tempString = " The beginning date " + snap.val().Beginning + "\n" + " Last teaching day MIDSEM " + snap.val().MidSem + "\n" + " Last teaching day ENDSEM " + snap.val().EndSem ;
        this.setState({semDates:tempString});
    })
}
/*
resetDates =()=>{
    if(this.state.semToReset =='Select Sem' || this.state.resetDate == null){
        alert("Either the sem to be reset or the reset Date hasn't been selected");
        return;
    }
    let semToReset = this.state.semToReset;
    let resetDate = this.state.resetDate;
    let resetDateTemp = new Date(resetDate);

    if(semToReset == "Beginning"){
        database().ref("DatesOfSem").once('value',(snap)=>{
            if(snap.val()==null){
            alert("No dates for the sem have been set in the database");
            return;
            }
            let tempDate = new Date(snap.val().Beginning);
            if(tempDate.getTime()==resetDateTemp.getTime()){
                alert("This is the same date as before")
                return;
            }
            database().ref("/DatesOfSem").set({
                Beginning:resetDate,
                Midsem:snap.val(),Midsem,
                Endsem:snap.val().Endsem
            })
        })
    }
}
*/
}

