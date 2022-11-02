import { Pressable, Text } from 'react-native'

export const GeneralButton =() => {
    return(
       <Pressable 
        className = "bg-slate-200 rounded-lg p-2">
            <Text className = "text-xl">Touch me</Text>
       </Pressable>
    )
}