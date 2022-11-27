import React, { useState } from 'react'
import { Text, View, Image } from "react-native"
import { styles } from './styles'
export default function EmptyInfo() {
    return (
        <View style={styles.containerEmpty}>
            <Image
                source={require('../../assets/img/Clipboard.png')}
            />
            <Text style={styles.emptyTitle}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}