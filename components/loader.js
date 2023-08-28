import { StyleSheet, Text, View } from 'react-native';
import { useRef } from 'react';
import LottieView from 'lottie-react-native';

export default function Loader() {
  const animation = useRef(null);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        autoPlay
        loop  // Add this prop to enable looping
        source={require('../assets/loader.json')}
      />
      <Text>Loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    marginTop:'70%',
    alignItems: 'center',
    flex:1
  },
});
