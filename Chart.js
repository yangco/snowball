/**
 * Created by Yonee on 2015/11/3.
 */
/**
 * Created by Yonee on 2015/10/28.
 */

'use strict';

var React = require('react-native');


var {
    StyleSheet,
    Text,
    View,
    Image
    } = React;

var {width, height} = require('Dimensions').get("window");
var Canvas = require('./components/react-native-canvas/index');

var chart = React.createClass({

    render() {
        return (
            <View style={ styles.container }>
                <Canvas  style={{width:width, height:200}}/>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

module.exports = chart;