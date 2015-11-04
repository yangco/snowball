/**
 * Created by Yonee on 2015/10/28.
 */

'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight
    } = React;

var FirstView = require('./First');

var sampleView = React.createClass({
    getInitialState: function() {
        return {
        };
    },
    render: function () {
        var sample = this.props.sample;
        var content;
        if (!this.state.aaa ) {
            content = sample.title;
        } else {
            content = this.state.aaa;
        }
        return (
            <TouchableHighlight onPress={this.openChat.bind(this, sample)  }>
                <View style={ styles.container }>
                    <Text> { content }</Text>
                </View>
            </TouchableHighlight>
        );
    },
    openChat: function (sample){
        this.props.navigator.push({
            title: `${sample.title}`,
            component: FirstView,
        });
    },
    /*
    _pressRow: function (rowId) {
        this.setState({
            aaa: rowId,
        });
    }*/
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        height: 50,
    }
});

module.exports = sampleView;