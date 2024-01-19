import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/city_background.jpg')} 
                style={styles.imageLayout}
            >
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                <View style={styles.populationWrapper}>
                    <Feather name={'user'} size={50} color={'red'} />
                    <Text>8000</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    }
})

export default City