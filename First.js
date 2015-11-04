/**
 * Created by Yonee on 2015/10/28.
 */

'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View
    } = React;

var firstView = React.createClass({
    render: function() {
        return (
            <View style={ styles.container }>
                <Text>
                    测试页面
                </Text>
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

module.exports = firstView;