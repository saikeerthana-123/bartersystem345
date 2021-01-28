import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
 import { DrawerItems} from 'react-navigation-drawer' ;
import firebase from 'firebase';

export default class CustomSidebarMenu extends React.Component{
    render(){
        return(
            <View style ={{flex:1}}>
                <View style ={{flex:0.8}}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity  style={styles.button} onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}><Text>Log Out</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      }},
      buttonContainer:{
          flex:0.2,
          justifyContent:"flex-end",
          paddingBottom:30
      }
    })