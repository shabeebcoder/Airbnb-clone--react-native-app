import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView , TextInput, Platform, StatusBar,
    ScrollView, Image, Dimensions,Animated
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../component/home/category'
import Around from '../component/home/around'
import Tag from '../component/home/Tag'

export default class HomeScreen extends Component {
    componentDidMount(){
        this.startHeaderHeight=150
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 150 + StatusBar.currentHeight
        }
    }
    
    render(){

        const {height, width} = Dimensions.get('window')

        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height:120, backgroundColor:'white', borderBottomWidth:1, borderBottomColor:'#dddddd'}}>
                        <View style={{flexDirection:"row", padding:10, backgroundColor:'white', 
                        marginHorizontal:25, shadowOffset:{width:0, height:0},shadowColor:'black', justifyContent:'center', shadowOpacity:0.2,
                         elevation:1, marginTop:Platform.OS =='android' ? 30 : null}}> 
                            <Icon name='ios-search' color='grey' size={20} />
                            <TextInput 
                                placeholder='Try new delhi'
                                placeholderTextColor='grey'
                                style={{flex:1, fontWeight:'600', backgroundColor:'white'}}

                            />
                        </View>
                        <Animated.View style={{flexDirection:'row', marginHorizontal:25, position:'relative', top:7}}>
                            <Tag />
                            <Tag />
                            
                        </Animated.View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{flex:1, backgroundColor:'white'}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                What we can help you find, shabeeb?
                            </Text>

                            <View style={{height:130, marginTop:20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/property_1.jpg')} />
                                    <Category imageUri={require('../assets/property_2.jpg')} />
                                    <Category imageUri={require('../assets/property_3.jpg')} />
                                    <Category imageUri={require('../assets/property_4.jpg')} />
                                    <Category imageUri={require('../assets/property_5.jpg')} />
                                    <Category imageUri={require('../assets/property_6.jpg')} />
                                    
                                </ScrollView>
                            </View>
                            <View style={{marginTop:40, paddingHorizontal:20}}>
                                <Text style={{fontSize:24, fontWeight:'700'}}>Indroducing Airbnb Plus</Text>
                                <Text style={{fontWeight:'100', marginTop:0}}>A new selection of homes verified for quality & comfort</Text>
                                <View style={{width:width-40, height:200, marginTop:15}}>
                                    <Image 
                                    style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5, borderEndWidth:1 }}
                                    source={require('../assets/property_2.jpg')} />
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:40,}}>
                            <Text style={{fontSize:24, fontWeight:'700',paddingHorizontal:20}}> Homes around the world</Text>
                            <View style={{paddingHorizontal:20, marginTop:10, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                <Around imageUri={require('../assets/property_2.jpg')} />
                                <Around imageUri={require('../assets/property_2.jpg')} />
                                <Around imageUri={require('../assets/property_2.jpg')} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  