import { StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';
import LottieView from 'lottie-react-native';

export default function App() {
  const animation = useRef(null);


  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay={false}
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={require('./assets/loader.json')}
      />
	  <Text>Loading ...</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
