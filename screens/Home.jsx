import { View, Text , TouchableOpacity, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import styles from './home.style'
import {Ionicons,Fontisto} from '@expo/vector-icons'
import { Welcome } from '../components'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons
          name='location-outline' size={24}
          />
          <Text style={styles.location}>Pune, India</Text>
          <View style={{alignItems:"flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNum}>6</Text>

            </View>
            <TouchableOpacity>
            <Fontisto name='shopping-bag' size={24}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <ScrollView>
        <Welcome/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home