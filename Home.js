/**
 * Created by Yonee on 2015/10/29.
 */


'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Navigator,
    } = React;

var Carousel = require('./components/react-native-carousel/index');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
//var Swiper = require('react-native-swiper');
var Icon = require('react-native-vector-icons/FontAwesome');

/*
var Router = React.createClass({
    getInitialState: function () {
        return {
            content: Home,
        };
    },
    render() {
        var Content = this.state.content;
        return (
            <Content/>
        )
    }
});


var BackButton = React.createClass({
    render: function () {
        return (
                <Image style={{marginLeft : 10,height:35, width:35,borderRadius:20,borderWidth:5, borderColor:'#fff'}}
                       source={ { uri: 'http://192.168.30.76:8882/cs.png' } }/>
        );
    }
});
var SearchAndCompose = React.createClass({
    render: function () {
        return (
            <View
                style={{width:width,backgroundColor:'#355B9D',flexDirection: 'row',borderRadius:3, flex:1,marginLeft:10, marginRight:10,height:30,justifyContent: 'center',alignItems: 'center'}}>
                <Icon name="search" size={17} color="#fff" style={{marginLeft:10}}/>
                <TextInput placeholder="搜索股票/组合/用户/讨论/群组" placeholderTextColor="#839BC1" style={{flex:1,marginTop:8}}/>
            </View>
        );
    }
});
*/

/*
<View style={{ flexDirection: 'row', height:50,  justifyContent: 'center', alignItems: 'center',backgroundColor:'#4471BC'}}>
    <TouchableOpacity onPress={this.nextPage} underlayColor="transparent" >
        <Image style={{marginLeft : 10,height:35, width:35,borderRadius:20,borderWidth:5, borderColor:'#fff'}} source={ { uri: 'http://192.168.30.76:8882/cs.png' } } />
    </TouchableOpacity>
    <View style={{backgroundColor:'#355B9D',flexDirection: 'row',borderRadius:3, flex:1,marginLeft:10, marginRight:10,height:30,justifyContent: 'center',alignItems: 'center'}}>
        <Icon name="search" size={17} color="#fff" style={{marginLeft:10}}/>
        <TextInput placeholder ="搜索股票/组合/用户/讨论/群组" placeholderTextColor="#839BC1" style={{flex:1,marginTop:8}}/>
    </View>
</View>
*/
var home = React.createClass({
    getInitialState: function() {
        return {
        };
    },
    render: function () {
        return (
            <View style={styles.container} >
                <Carousel delay={1500} style={{width: width, height: 120}}>
                    <Image style={{width:width,height:120,backgroundColor:'red'}} source={ { uri: 'http://192.168.30.76:8882/banner.png' } } >
                        <Text>11111</Text>
                    </Image>
                    <Image style={{width:width,height:120,backgroundColor:'yellow'}} source={ { uri: 'http://localhost:8882/banner.png' } } >
                        <Text>22222</Text>
                    </Image>
                    <Image style={{width:width,height:120,backgroundColor:'blue'}} source={ { uri: 'http://localhost:8882/banner.png' } } >
                        <Text>3333</Text>
                    </Image>
                </Carousel>

                <View style={styles.messages}>
                    <View style={styles.center}><Text>#深圳本地股#</Text></View>
                    <View style={styles.center}><Text>五中全会闭幕</Text></View>
                </View>

                <View style={styles.product}>
                    <View style={styles.product_line}>
                        <View style={styles.center}>
                            <View style={styles.circle}  >
                                <Icon name="home" size={30}  color="#fff"/>
                            </View>
                            <Text>行情中心</Text>
                        </View>
                        <View style={styles.center}>
                            <View style={styles.circle} >
                                <Icon name="home" size={30}  color="#fff"/>
                            </View>
                            <Text>交易信息</Text>
                        </View>
                        <View style={styles.center}>
                            <View style={styles.circle} >
                                <Icon name="home" size={30}  color="#fff"/>
                            </View>
                            <Text>万2.5开户</Text>
                        </View>
                    </View>
                    <View style={styles.product_line}>
                        <View style={styles.center}>
                            <View style={styles.circle} >
                                <Icon name="home" size={30}  color="#fff"/>
                            </View>
                            <Text>最赚钱组合</Text>
                    </View>
                        <View style={styles.center}>
                            <View style={styles.circle} >
                                <Icon name="home" size={30}  color="#fff"/>
                            </View>
                            <Text>最人气组合</Text>
                        </View>
                        <View style={styles.center}>
                            <View style={styles.circle} >
                                <Icon name="home" size={30}  color="#fff"/>
                            </View>
                            <Text>雪球内参</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.messages}>
                    <View style={styles.center}><Text>#深圳本地股#</Text></View>
                    <View style={styles.center}><Text>五中全会闭幕</Text></View>
                </View>

            </View>
        );
    }
});



var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#EDF0F5'
    },
    center : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messages :{
        backgroundColor:'white',
        flexDirection: 'row',
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        borderColor : '#E0E0E0'
    },
    product :{
        marginTop : 5,
        backgroundColor:'white',
        borderTopWidth : 1,
        borderColor : '#E0E0E0',
        height:140
    },
    product_line :{
        marginTop : 5,
        marginBottom : 5,
        flexDirection: 'row',
        backgroundColor:'white',
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#FEA001',
        borderRadius:30,
        width:40,
        height:40
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
    },
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 64, // Default iOS navbar height
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 13
    },

});

module.exports = home;