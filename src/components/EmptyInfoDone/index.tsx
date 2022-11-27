import React, { useState } from 'react'
import { Text, View, Image } from "react-native"
import { styles } from './styles'
export default function EmptyInfoDone() {
    return (
        <View style={styles.containerEmpty}>
            <Image
                source={require('../../assets/img/Clipboard.png')}
            />
            <Text style={styles.emptyTitle}>
                Não há tarefas marcadas como Concluídas
            </Text>
        </View>
    )
}