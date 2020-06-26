import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert
  } from 'react-native';
  import { Container, Content, InputGroup, Input, Icon} from 'native-base';
  import auth from '@react-native-firebase/auth';
  import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
  

  export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            user:'',
            googleEmail:'',
            password:'',
            loggedIn: false,
            userInfo:'',
            ID:''
        }
    }

    componentDidMount(){
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: '200641316322-5n2hgjl773t0sr5pis0mvtguc57t3nkl.apps.googleusercontent.com',
            offlineAccess: true, 
            hostedDomain: '', 
            forceConsentPrompt: true, 
            accountName: '',
          });
    }
    login(){
        console.log("in login")
        let email = this.state.email;
        let password = this.state.password;
        console.log(email + " " + password)
        if(email!='' && password!=''){
            auth().signInWithEmailAndPassword(email,password).then((user)=>{
                this.setState({
                    user:user.user.email
                },()=>{
                  
                  this.props.navigation.navigate("Teacher");
                  
                })
            }).catch((error)=>{
                Alert.alert(error.message);
                console.log(error.message)
            })
        }
        

    }
  
    signIn = async () => {
        try {
          console.log("trying")
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo: userInfo, loggedIn: true, googleEmail:userInfo.user.email},()=>{
            let googleEmail = this.state.googleEmail;
            console.log("user signed in " + googleEmail);
            googleEmail = googleEmail.split("@");
            if(googleEmail[0].includes(".")){
            googleEmail[0] = googleEmail[0].replace(/[.]/g,"+") 
            console.log("ID " + googleEmail[0])
            this.setState({ID:googleEmail[0]});
          }
            else{
              this.setState({ID:googleEmail[0]}); console.log("ID " + googleEmail[0]);
            }
          });
          this.props.navigation.navigate('Teacher');
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log(error.code);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
            console.log(error.code);
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log(error.code);
          } else {
            // some other error happened
            console.log(error);
          }
        }
      };
    
    

    render(){
        return(
            <Container>
            <Content>
                <Text>Teacher</Text>
                <InputGroup borderType='rounded' >
                    <Icon name='ios-home' style={{color:'#384850'}}/>
                    <Input placeholder='Email' onChangeText = {(email)=>{this.setState({email:email})}}/>
                </InputGroup>
                <InputGroup borderType='rounded' >
                    <Icon name='ios-home' style={{color:'#384850'}}/>
                    <Input secureTextEntry={true} placeholder="Password" onChangeText = {(password)=>{this.setState({password:password})}}/>
                </InputGroup>
                <Button title="Login" style={{color:'green'}} color="green" onPress={()=>{this.login()}}/>
                <GoogleSigninButton
                  style={{ width: 192, height: 48 }}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={()=>{this.signIn()}}
                 />
            </Content>
        </Container>
        
        )

    }
  }
/*
  async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
*/
