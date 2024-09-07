import { View, ImageBackground, Pressable, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { SkipperPreviewData } from '@/constants/models/SkipperCategory';

import SKIPPER_GALLERY from '@/constants/skipper-gallary';
import AppGradient from '@/components/AppGradient';

import AntDesign from '@expo/vector-icons/AntDesign';



const CompetentCrewTab = () => {
    const { itemId } = useLocalSearchParams();

    const [skipperHelp, setSkipperHelp] = useState<SkipperPreviewData>();

    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() => {
        for (let index = 0; index < SKIPPER_GALLERY.length; index++) {
            const skipperData = SKIPPER_GALLERY[index].data;
            const skipperToStart = skipperData.find((a) => a.id === Number(itemId))
            if (skipperToStart) {
                setSkipperHelp(skipperToStart);
                const skipperArray = skipperToStart.text.split(".");
                if (skipperArray[skipperArray.length - 1] === '') {
                    skipperArray.pop();
                }
                setSentences(skipperArray)
                return;
            }
        }
    }, [])
    return (
        <View className='flex-1'>
            <ImageBackground source={skipperHelp?.image} resizeMode='cover' className='flex-1' >
                <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>
                    <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                        <View className='h-full justify-center'>
                            <View className='justify-center'>
                                {sentences.map((sentence, idx) => (
                                    <Text
                                        className="text-white text-lg mb-12"
                                        key={idx}
                                    >
                                        {sentence}.
                                    </Text>
                                ))}

                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default CompetentCrewTab;