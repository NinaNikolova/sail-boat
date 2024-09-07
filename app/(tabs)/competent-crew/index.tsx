import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient';
import SKIPPER_GALLERY from '@/constants/skipper-gallary';
import SkipperGallery from '@/components/SkipperGallery';

const Competentcrew = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-zinc-50 text-3xl font-bold'>Competent Crew help</Text>
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

export default Competentcrew;