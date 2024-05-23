import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/informacion';

const Claseejercicio = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejercicio de clase</Text>
            <Text style={styles.instruction}>Modificar el ejemplo de navegación de la clase 3 y agregar la siguiente pantalla tratando de replicar el diseño.</Text>
            <Text style={styles.contenedor}>Colores normales</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { backgroundColor: item.description }]}>
                        <Image source={item.src} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Claseejercicio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    cardContainer: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
        textAlign: 'center',
    },
    instruction: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },contenedor:{
        backgroundColor: '#CDD5D1',
        paddingLeft: 10,
        fontSize: 25,
    }
});
