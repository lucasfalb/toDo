import { Text, View, Image, TouchableOpacity } from "react-native"
import Checkbox from 'expo-checkbox'
import { styles } from './styles'
type Props = {
    name: String,
    done: any,
    onRemove: () => void,
    setDone: () => void,
}
export default function Task({ name, onRemove, done, setDone }: Props) {
    return (
        <View style={done ? styles.containerChecked : styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={done}
                onValueChange={setDone}
                color={done ? '#8284FA' : undefined}
            />
            <Text style={done ? styles.textChecked : styles.text}>
                {name}
            </Text>
            <TouchableOpacity onPress={onRemove}>
                <Image
                    style={styles.trash}
                    source={require('../../assets/img/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}