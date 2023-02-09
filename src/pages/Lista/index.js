import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Lista(props) {

    function testando() {
        console.log(data);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLista}>
                <Text style={styles.itemTitle}>{props.data.produto}</Text>
                <Text style={styles.item}>{props.data.doseha}</Text>
                <Text style={styles.item}>{props.data.completa}</Text>
                <Text style={styles.item}>{props.data.incompleta}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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