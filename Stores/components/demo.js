
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, Button, Linking, ScrollView, TouchableOpacity } from 'react-native';
import openMap, { createMapLink } from 'react-native-open-maps'
import GetLocation from 'react-native-get-location'
import Card from './cards'
const Apps = () => {
    const [locationlat, setLocationlat] = useState(null);
    const [locationlong, setLocationlong] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                setLocationlat(location.latitude),
                    setLocationlong(location.longitude)
            })
            .catch(error => {
                setErrorMsg(error)
            })
    }, []);


    const style = StyleSheet.create({
        containers: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 270,
            height: 95,
        }
    })

    // Card elements to show 3 outputs with alert on press

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card>

                    <Image
                        style={style.tinyLogo}
                        source={{ uri: 'https://etimg.etb2bimg.com/photo/76159933.cms' }}></Image>
                    <Text style={styles.cardtext} >SRM Store</Text>
                    <Text style={styles.cardAddress}>Address: Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203</Text>
                    <Button onPress={() => {
                        return openMap(
                            {
                                start: `${locationlat} ,${locationlong}`,
                                end: "srm university chennai",
                                travelType: 'drive'
                            });
                    }} title="Direction"></Button>
                </Card>
                <Card>

                    <Image
                        style={style.tinyLogo}
                        source={{ uri: 'https://i.ytimg.com/vi/K_JAB-V_kIM/maxresdefault.jpg' }}></Image>
                    <Text style={styles.cardtext} >Lake MAll</Text>
                    <Text style={styles.cardAddress}>Address: 104, Rash Behari Ave, Lake Market, Kalighat, Kolkata, West Bengal 700029</Text>
                    <Button onPress={() => {
                        return openMap(
                            {
                                start: `${locationlat} ,${locationlong}`,
                                end: " 104, Rash Behari Ave, Lake Market, Kalighat, Kolkata, West Bengal 700029",
                                travelType: 'drive'
                            });
                    }} title="Direction"></Button>
                </Card>
                <Card>
                    <Image
                        style={style.tinyLogo}
                        source={{ uri: 'https://previews.123rf.com/images/rickdeacon/rickdeacon1607/rickdeacon160700269/60279822-shot-of-a-lindt-chocolate-store-at-an-airport.jpg' }}></Image>
                    <Text style={styles.cardtext}>Chocolate Store</Text>
                    <Text style={styles.cardAddress}>Address: 1858/1, Rajdanga Main Road, 3rd Floor, Acropolis Mall, Kolkata, West Bengal 700107</Text>
                    <Button onPress={() => {
                        return openMap(
                            {
                                start: `${locationlat} ,${locationlong}`,
                                end: "1858/1, Rajdanga Main Road, 3rd Floor, Acropolis Mall, Kolkata, West Bengal 700107",
                                travelType: 'drive'
                            });
                    }} title="Direction"></Button>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46466d'
    },
    cardtext: {
        color: '#ff6699',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'system-ui',
        textAlign: 'center',
        paddingTop: 5

    },
    cardAddress: {
        fontFamily: 'sans-serif',
        fontSize: 15,
        color: '#339966',
        padding: 4,
        textAlign: 'center'
    }
});

export default Apps;
