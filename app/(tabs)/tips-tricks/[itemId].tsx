import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomButton from "@/components/CustomButton";

import { TIPS_TRICKS_IMAGES } from "@/constants/tips-tricks-images";

import { TIPS_TRICKS_DATA, TipsTricksType } from "@/constants/tips-tricks";

const Page = () => {
    const { itemId } = useLocalSearchParams();

    const [tipsHelp, setTipsHelp] = useState<TipsTricksType>();

    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() => {
        for (let index = 0; index < TIPS_TRICKS_DATA.length; index++) {
            const tipsData = TIPS_TRICKS_DATA[index];

            if (tipsData.id === Number(itemId)) {

                setTipsHelp(tipsData);
                console.log(tipsData);
                const tipsArray = tipsData.text.split(".");
                if (tipsArray[tipsArray.length - 1] === '') {
                    tipsArray.pop();
                }
                setSentences(tipsArray)
                return;
            }
        }
    }, [])
    return (
        <View className='flex-1'>
            <ImageBackground source={TIPS_TRICKS_IMAGES[Number(tipsHelp?.id) - 1]} resizeMode='cover' className='flex-1' >
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
};

export default Page;