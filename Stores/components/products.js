import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
const Products = () => {

    const [Products, updateProducts] = useState([])

    const header = {
        'Accept': 'application/json',
        'X-Shopify-Storefront-Access-Token': '77d69de57378b6bf9876f43c406dda27',
        'Content-Type': 'application/json'
    }

    const getproducts = async () => {
        await axios.post('https://ecommerce-ray1.myshopify.com/api/2021-01/graphql.json', {
            query: `{
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
            }`
        }, {
            headers: header
        })
            .then(res => {
                console.log(res.data.data.collections.edges),
                    updateProducts(res.data.data.collections.edges)
            })
            .catch(err => console.log(err))
    }

    return (
        <SafeAreaView>
            <Text>Products</Text>
        </SafeAreaView>
    )
}

export default Products;
