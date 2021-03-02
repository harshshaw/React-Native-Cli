import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, SafeAreaView, Text, ScrollView, StylesSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Card from './cards'

const Collection = () => {
    const [collections, updatecollections] = useState([])
    const header = {
        'Accept': 'application/json',
        'X-Shopify-Storefront-Access-Token': '77d69de57378b6bf9876f43c406dda27',
        'Content-Type': 'application/json'
    }



    const getcollection = async () => {
        await axios.post('https://ecommerce-ray1.myshopify.com/api/2021-01/graphql.json', {
            query:
                `query{
                    
            collections(first:10)
                {
                  edges {
                    node {
                     
                        title
                        description
                        updatedAt
                   
                    }
                  }
                }
            }
             `
        },
            {
                headers: header
            }
        ).then(res => {
            console.log(res.data.data.collections.edges),
                /*    console.log(collections.map(res=>{
       
                   })) */
                updatecollections(res.data.data.collections.edges)
        }


        ).catch(err => console.log(err))
    }

    useEffect(() => {
        getcollection();
    }, [])

    let list = () => {
        return collections.map(res => {
            return (
                <Card>
                    <Text>{res.node.title}</Text>
                </Card>
            )
        })

    }
    return (
        <ScrollView >
            <SafeAreaView>
                <Text>Collections</Text>
                {
                    list()
                }
                <Card>
                    <Text>Cards </Text>
                </Card>
                <Button title="Product"
                    onPress={() => navigation.navigate('products')}></Button>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Collection