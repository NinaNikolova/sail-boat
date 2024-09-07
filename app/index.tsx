import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient'

import yatch from "@/assets/tips-tricks-images/yatch.jpg"
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';


const App = () => {
  const router = useRouter();
  return (
    <View className='flex-1'>

      <ImageBackground source={yatch} resizeMode='cover' className='flex-1'>
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>

          <SafeAreaView className='flex-1 px-1 justify-between'>
            <View>
              <Text className='text-center text-white font-bold text-4xl'>SailSpace</Text>
              <Text className='text-center text-white text-regular text-2xl mt-3'>Simplifying Sailing for Everyone</Text>
            </View>
            <View>
              <CustomButton onPress={() => router.push("/(tabs)/tips-tricks")} title='Get Started' />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>


        </AppGradient>
      </ImageBackground>

    </View>
  )
}

export default App;