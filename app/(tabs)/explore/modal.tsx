import { View, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

const Modal = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText>Test</ThemedText>
        <Button title="Close modal" onPress={() => router.back()} />
        </View>
    )
}

export default Modal;
