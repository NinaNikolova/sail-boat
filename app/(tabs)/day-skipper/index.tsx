import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import SkipperGallery from '@/components/SkipperGallery';
import SKIPPER_GALLERY from "@/constants/skipper-gallary";


const Dayskipper = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-zinc-50 text-3xl font-bold'>Day Skipper help</Text>
                    <View>
                        {SKIPPER_GALLERY.map((g) => (
                            <SkipperGallery key={g.title} title={g.title} previews={g.data} />
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    )
}

export default Dayskipper;