import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './globalStyles'

export default function ScreenTwo({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Screen Two</Text>

             <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
             >
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}