import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Lista({ data }) {

    function testando() {
        console.log(data);
    }

    return (
        <SafeAreaView style={styles.containerLista}>
            <Text style={styles.itemTitle}>{data.produto}</Text>
            <Text style={styles.item}>{data.doseha}</Text>
            <Text style={styles.item}>{data.completa}</Text>
            <Text style={styles.item}>{data.incompleta}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerLista: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTitle: {
        width: 120,
        height: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 5,
        fontSize: 12,
    },
    item: {
        width: 70,
        height: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
        fontWeight: '500',
        margin: 5,

    }
})