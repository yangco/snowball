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
    TabBarIOS,
    StatusBarIOS
    } = React;


var Icon = require('react-native-vector-icons/Ionicons');
var HomeNav = require('./HomeNav');

var AwesomeProject = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'home'
    }
  },
  changeTab(tabName) {
    StatusBarIOS.setStyle(tabName === 'home' ? 1 : 0);
    this.setState({
      selectedTab: tabName
    });
  },

  render: function() {
      return (
          <TabBarIOS>
            <Icon.TabBarItem
                title="主页"
                iconName="ios-home-outline"
                selectedIconName="ios-home"
                onPress={ () => this.changeTab('home') }
                selected={ this.state.selectedTab === 'home' }>
              <HomeNav/>
            </Icon.TabBarItem>
            <Icon.TabBarItem
                title="自选"
                iconName="ios-paper-outline"
                selectedIconName="ios-paper"
                onPress={ () => this.changeTab('profile') }
                selected={ this.state.selectedTab === 'profile' }>
              <View style={ styles.pageView }>
                <Icon name="person" size={30} color="#4F8EF7" />
              </View>
            </Icon.TabBarItem>
            <Icon.TabBarItem
                title="动态"
                iconName="ios-list-outline"
                selectedIconName="ios-list"
                onPress={ () => this.changeTab('news') }
                selected={ this.state.selectedTab === 'news' }>
              <View style={ styles.pageView }>
                <Icon name="person" size={30} color="#4F8EF7" />
              </View>
            </Icon.TabBarItem>
            <Icon.TabBarItem
                title="消息"
                iconName="ios-bell-outline"
                selectedIconName="ios-bell"
                onPress={ () => this.changeTab('message') }
                selected={ this.state.selectedTab === 'message' }>
              <View style={ styles.pageView }>
                <Icon name="person" size={30} color="#4F8EF7" />
              </View>
            </Icon.TabBarItem>

            <Icon.TabBarItem
                title="交易"
                iconName="ios-monitor-outline"
                selectedIconName="ios-monitor"
                onPress={ () => this.changeTab('trade') }
                selected={ this.state.selectedTab === 'trade' }>
              <View style={ styles.pageView }>
                <Icon name="person" size={30} color="#4F8EF7" />
              </View>
            </Icon.TabBarItem>
          </TabBarIOS>
      );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
