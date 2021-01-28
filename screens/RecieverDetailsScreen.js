import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import MyHeader from '../components/MyHeader.js'
import db from '../config';
import firebase from 'firebase';


export default class RecieverDetailsScreen extends Component{
  constructor(){
    super();
    this.state={
      userId:firebase.auth().currentUser.email,
      recieverId : this.props.navigation.getParam('details')["user_id"],
      requestId : this.props.navigation.getParam('details')["request_id"],
      bookName : this.props.navigation.getParam('details')["book_name"],
      reasonForRequesting : this.props.navigation.getParam('details')["reason_to_request"],
      recieverName : '',
      recieverContact : '',
      recieverAddress : '',
      recieverRequestDocId : ''
    }
  }

    getRecieverDetails=()=>{
        db.collection('users').where('email_id','==',this.state.recieverId).get() .then(snapshot => {
            snapshot.forEach(doc => { var data = doc.data() 
                this.setState({
                                recieverName : data.first_name,
                                recieverAddress : data.address,
                                recieverContact : data.contact }) 
                  });})
                db.collection('requested_books').where('request_id','==',this.state.requestId).get() .then(snapshot=>{ 
                snapshot.forEach(doc => {
                this.setState({recieverRequestDocId:doc.id})
                   })})
          }

        getUserDetails=(userId)=>{
            db.collection('users').where('email_id','==',userId).get() .then(snapshot => {
                snapshot.forEach(doc => { var data = doc.data() 
                    this.setState({
                                    userName : data.first_name }) });}
        )}

  componentDidMount(){
      this.getRecieverDetails()
      this.getUserDetails(this.setState.userId)
  }

  updateBookStatus=()=>{
      db.collection('all_donations').add({
          book_name:this.state.booktName,
          request_id:this.state.requestId,
          requested_by:this.state.recieverName,
          doner_id:this.state.userId,
          request_status:'doner interested'
      })
      Alert.alert("book status updated successfully")
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:0.1}}></View>
        <View style={{flex:0.3}}>
          <Card title={"Book Information"} titleStyle= {{fontSize : 20}} >
          <Card > <Text style={{fontWeight:'bold'}}>Name : {this.state.bookName}</Text> </Card>
          <Card> <Text style={{fontWeight:'bold'}}>Reason : {this.state.reason_for_requesting}</Text> </Card> 
          </Card>
        </View>

        <View style={{flex:0.3}}>
          <Card title={"Reciever Information"} titleStyle= {{fontSize : 20}} >
            <Card> <Text style={{fontWeight:'bold'}}>Name: {this.state.recieverName}</Text> </Card>
              <Card> <Text style={{fontWeight:'bold'}}>Contact: {this.state.recieverContact}</Text> </Card>
              <Card> <Text style={{fontWeight:'bold'}}>Address: {this.state.recieverAddress}</Text> </Card>
          </Card>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})
