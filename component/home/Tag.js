import React, { Component } from 'react'
import { Image, Text, View, } from 'react-native'
import StarRating from 'react-native-star-rating'


export default class Tag extends Component {

    render(){


        return(
            <View style={{minHeight:20, minWidth:40, padding:5, backgroundColor:'white', borderColor:'#dddddd', 
                            borderWidth:1,borderRadius:2,marginRight:5
                        }}>
                                <Text style={{fontWeight:'700',fontSize:10}}>Guest</Text>
                            </View>
        )
    }
}

