/**
 * Created by Yonee on 2015/11/3.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    TextInput
    } = React;

var Icon = require('react-native-vector-icons/FontAwesome');
var Home = require('./Home');
var First = require('./First');

var HomeNavBar = React.createClass({
    selectMenu: function (link,title) {
        this.props.navigator.push({
            name: link,
            title: title
        });
    },
    render: function () {
        return (
            <View style={{flexDirection:'row',height:50,  justifyContent: 'center', alignItems: 'center',backgroundColor:'#4471BC'}}>
                <TouchableHighlight
                    underlayColor="#dddddd"
                    onPress={() => this.selectMenu('first','Profile')}>
                    <Image style={{marginLeft : 10,height:35, width:35,borderRadius:20,borderWidth:5, borderColor:'#fff'}} source={ { uri: 'http://192.168.30.76:8882/cs.png' } } />
                </TouchableHighlight>
                <View style={{backgroundColor:'#355B9D',flexDirection: 'row',borderRadius:3, flex:1,marginLeft:10, marginRight:10,height:30,justifyContent: 'center',alignItems: 'center'}}>
                    <Icon name="search" size={17} color="#fff" style={{marginLeft:10}}/>
                    <TextInput placeholder ="搜索股票/组合/用户/讨论/群组" placeholderTextColor="#839BC1" style={{flex:1,marginTop:8}}/>
                </View>
            </View>
        )
    }
})

var NavBar = React.createClass({
    selectMenu: function (link, title) {
        this.props.navigator.push({
            name: link,
            title: title
        });
    },
    render: function () {
        var title = this.props.title;
        return (
            <View style={{flexDirection:'row',height:50,  alignItems: 'center',backgroundColor:'#4471BC'}}>
                <TouchableHighlight
                    underlayColor="#dddddd"
                    onPress={() => this.selectMenu('home','Home')}>
                    <Text style={{color:'#fff'}}> Back </Text>
                </TouchableHighlight>
                <View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
                    <Text style={{color:'#fff'}}>{title}</Text>
                </View>
            </View>
        )
    }
})

var RouteMapper = function (route, navigationOperations, onComponentRef) {
    var _navigator = navigationOperations;

    switch (route.name) {
        case 'home':
            return (
                <View>
                    <HomeNavBar navigator={_navigator} title={route.title}/>
                    <Home />
                </View>
            );
            break;
        case 'first':
            return (
                <View>
                    <NavBar navigator={_navigator} title={route.title}/>
                    <First />
                </View>
            );
            break;
        case 'search':
            return (
                <View>
                    <NavBar navigator={_navigator} title={route.title}/>
                    <First />
                </View>
            );
            break;

    }
    return (<Text>Not Found</Text>);
}

var nav = React.createClass({

    render: function () {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{name: 'home', title: 'Home'}}
                configureScene={(route) => {
                      if (route.sceneConfig) {
                        return route.sceneConfig;
                      }
                      return Navigator.SceneConfigs.FloatFromLeft;
                }}
                renderScene={RouteMapper}/>

        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent :'center',
        alignItems : 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = nav;
