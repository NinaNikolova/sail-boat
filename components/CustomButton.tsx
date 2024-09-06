import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
}: CustomButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => [
                'bg-white rounded-xl min-h-[62px] justify-center items-center',
                pressed ? 'opacity-70' : 'opacity-100', // Mimicking activeOpacity
                containerStyles
            ]}
            className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles} `}
            onPress={onPress}
        >
            <Text
                className={`text-primary font-semibold text-lg ${textStyles}`}
            >
                {title}
            </Text>
        </Pressable>
    );
};

export default CustomButton;