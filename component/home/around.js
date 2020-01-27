import React, { Component } from 'react'
import { Image, Text, View,Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating'


export default class Around extends Component {

    render(){
        const {height, width} = Dimensions.get('window')

        return(
            <View style={{width:width/2-30, height:height/3-50, marginTop:10}}>
            <View style={{flex:3}}>
                <Image source={this.props.imageUri} style={{flex:1, height:null, width:null, resizeMode:'cover',
                 borderWidth:0.5, borderColor:'#dddddd'}}  />
            </View>
            <View style={{flex:1, justifyContent:'space-evenly', paddingLeft:10}}>
                <Text style={{fontSize:10, color:'#b63838'}}>PRIVATE ROOM -2 BED</Text>
                <Text style={{fontSize:12, fontWeight:'bold'}}>the Cozy Palace</Text>
                <Text style={{fontSize:10}}>82$</Text>
                <StarRating 
                    disabled={true}
                    maxStars={5}
                    rating={4}
                    starSize={10}
                    starDimension="10px"
                />
            </View>
        </View>
        )
    }
}

