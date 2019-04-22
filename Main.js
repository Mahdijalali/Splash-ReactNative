import React,{Component} from 'react';
import { View , Text,StyleSheet,style } from 'react-native';
import SplashScreen from './SplashScreen';

class Main extends Component{
    constructor(props) {
        super(props);
      
        this.state = { isLoading: true }
      }
      async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
      
        if (data !== null) {
          this.setState({ isLoading: false });
        }
      }
      performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            5000
          )
        );
      }
    render() {
        if (this.state.isLoading) {
          return <SplashScreen />;
        }
      
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              Reload the App to see a splash screen
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

export default Main;