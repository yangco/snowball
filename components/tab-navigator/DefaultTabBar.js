/**
 * Created by Yonee on 2015/10/28.
 */
'use strict';

var React = require('react-native');
var {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    } = React;

var deviceWidth = Dimensions.get('window').width;
var Icon = require('react-native-vector-icons/FontAwesome');
var styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,

    },

    tabs: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:0,
        borderWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: '#ccc',
    },
});

var DefaultTabBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array
    },

    renderTabOption(name, page) {
        var isTabActive = this.props.activeTab === page;

        return (
            <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
                <View>
                    <Icon name="home" size={30} color={isTabActive ? "red":"gray" } />
                    <Text style={{color: isTabActive ? 'navy' : 'black', fontWeight: isTabActive ? 'bold' : 'normal', marginTop:0}}>{name}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    render() {
        var numberOfTabs = this.props.tabs.length;
        var tabUnderlineStyle = {
            position: 'absolute',
            width: deviceWidth / numberOfTabs,
            height: 4,
            backgroundColor: 'navy',
            bottom: 0,
        };

        var left = this.props.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, deviceWidth / numberOfTabs]
        });

        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    },
});

module.exports = DefaultTabBar;
