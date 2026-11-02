import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './globalStyles';

export default function HomeScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ScreenTwo')}
            >
                <Text style={styles.buttonText}>Go To Next Page</Text>
            </TouchableOpacity>
        </View>
    )
}