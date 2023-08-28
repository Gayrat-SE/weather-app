import { Button, StyleSheet, Text, View } from 'react-native';
import Loader from './components/loader'
import { useEffect, useState } from 'react';
import Weather from './components/weather';
import * as Location from 'expo-location';

export default function App() {

  const [isloading, setisloading] = useState(true)
  const [location, setlocation] = useState(null)

  const getLocation = async() => {
    try {
      const response = 
        await Location.getForegroundPermissionsAsync()
    } catch (error) {
      
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setisloading(false)
      getLocation()
    }, 1500)
  })

  return (
    isloading ? <Loader/> : <Weather/>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
