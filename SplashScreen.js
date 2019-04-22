import React,{Component} from 'react';
import { View , Text,StyleSheet,style } from 'react-native';

class SplashScreen extends React.Component {
    render() {
      const viewStyles = [
        styles.container,
        { backgroundColor: 'orange' }
      ];
      const textStyles = {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      };
  
      return (
        <View style={viewStyles}>
          <Text style={textStyles}>
            Splash Screen
          </Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
export default SplashScreen;
