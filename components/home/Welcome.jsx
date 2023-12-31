import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import {Feather,Ionicons} from '@expo/vector-icons'
const Welcome = () => {
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.wlcmTxt(COLORS.black)}>Find The Most</Text>
      <Text style={styles.wlcmTxt(COLORS.primary,0)}>Luxurious Furniture</Text>
      
    </View>
    <View style={styles.searchCon}>
      <TouchableOpacity>
        <Feather name='search' size={24} style={styles.searchIcon}/>

      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} value='' onPressIn={()=>{}} placeholder='What are you looking for?'/>
      </View>
      <View>
      <TouchableOpacity style={styles.searchBtn}>
        <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite}/>
      </TouchableOpacity>
      
    </View>
    </View>
    
    </View>

  )
}

export default Welcome