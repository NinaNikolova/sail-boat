import { View, Text, FlatList, Pressable, ImageBackground, StyleSheet } from 'react-native';
import React from 'react'
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'
import { TIPS_TRICKS_DATA } from '@/constants/tips-tricks';
import { TIPS_TRICKS_IMAGES } from '@/constants/tips-tricks-images';



const Tipstricks = () => {
    const router = useRouter();
    return (
        <View className='flex-1'>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <View className='mb-6'>
                    <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome</Text>
                    <Text className='text-indigo-100 text-4xl font-medium'>Tips&tricks on sailing</Text>
                </View>
                <View>
                    <FlatList
                        data={TIPS_TRICKS_DATA}
                        contentContainerStyle={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() =>
                                    router.push(`/tips/${item.id - 1}`)
                                }
                                className="h-48 my-3 rounded-md overflow-hidden"
                            >
                                <ImageBackground
                                    source={TIPS_TRICKS_IMAGES[item.id - 1]}
                                    resizeMode="cover"
                                    style={styles.backgroundImage}
                                >
                                    <LinearGradient
                                        // Gradient from transparent to black
                                        colors={[
                                            "transparent",
                                            "rgba(0,0,0,0.8)",
                                        ]}
                                        style={styles.gradient}
                                    >
                                        <Text className="text-gray-100 text-3xl font-bold text-center">
                                            {item.title}
                                        </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    />
                </View>
                <StatusBar style='light' />
            </AppGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
    },
    gradient: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
    },
    list: {
        paddingBottom: 150,
    },
});
export default Tipstricks;