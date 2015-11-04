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
    ToolbarAndroid,
    ListView,
    ScrollView,
    Dimensions,
    Image
    } = React;

var SampleView = require('./SampleView');
var ScrollableTabView = require('./components/tab-navigator/ScrollableTabView');
var TabNavigator = require('react-native-tab-navigator');
var Icon = require('react-native-vector-icons/FontAwesome');
var Home = require('./Home');
var HomeNav = require('./HomeNav');
var Chart = require('./Chart');
//var Basics = require('./Basics');

var sample = {
    title: 'pppp',
    view : 'firstView',
};
var deviceWidth = Dimensions.get('window').width;

var AwesomeProject = React.createClass({
    getInitialState: function() {
       // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
           selectedTab : 'home',
            //dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    },
    render:function(){
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="主页"
                    renderIcon={() => <Icon name="home" size={30}  /> }
                    renderSelectedIcon={() => <Icon name="home" size={30} color="#4B83DF"/>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>

                        <HomeNav/>

                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="自选"
                    renderIcon={() => <Icon name="user" size={30}  /> }
                    renderSelectedIcon={() => <Icon name="user" size={30} color="#4B83DF"/>}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <Chart/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'news'}
                    title="动态"
                    renderIcon={() => <Icon name="book" size={30}  /> }
                    renderSelectedIcon={() => <Icon name="book" size={30} color="#4B83DF"/>}
                    onPress={() => this.setState({ selectedTab: 'news' })}>
                    <View>
                        <Text>动态</Text>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'message'}
                    title="消息"
                    renderIcon={() => <Icon name="envelope" size={30}  /> }
                    renderSelectedIcon={() => <Icon name="envelope" size={30} color="#4B83DF"/>}
                    onPress={() => this.setState({ selectedTab: 'message' })}>
                    <View>
                        <Text>消息</Text>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'trade'}
                    title="交易"
                    renderIcon={() => <Icon name="credit-card" size={30}  /> }
                    renderSelectedIcon={() => <Icon name="credit-card" size={30} color="#4B83DF"/>}
                    onPress={() => this.setState({ selectedTab: 'trade' })}>
                    <View style={ {backgroundColor:'red'}}>
                        <Text>交易</Text>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
    /*
    render:function(){
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={...} />}
                    renderSelectedIcon={() => <Image source={...} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                   <View>
                       <Text>HOME</Ttext>
                   </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={...} />}
                    renderSelectedIcon={() => <Image source={...} />}
                    renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <View>
                        <Text>PROFILE</Ttext>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }*/
    /*
    render: function() {
        return (
            <View style={styles.container}>
                <ScrollableTabView>
                    <ScrollView tabLabel="QQQ" style={styles.tabView}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={ ()=><SampleView sample={ sample }/>  }
                            />
                    </ScrollView>
                    <ScrollView tabLabel="RRR" style={styles.tabView}>
                        <View>
                            <Text>aaa</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="SSS" style={styles.tabView}>
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    },*


    /*
    render: function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={ ()=><SampleView sample={ sample }/>  }
                />
        );
    },


    render: function () {
        return (
            <View style={{flex:1}}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    titleColor="#ffffff"
                    title='Hacker News - Top Stories'/>
                <View style={styles.welcome}>
                    <Text> ttttt</Text>
                </View>
                <ToolbarAndroid
                    style={styles.toolbar}
                    titleColor="#ffffff"
                    title='TOOL'/>
            </View>
        );
    }

    render: function() {
        var rightButtonConfig = {
            title: 'Next',
            handler: function onNext() {
                alert('hello!');
            }
        };

        var titleConfig = {
            title: 'Hello, world',
        };

        return (
            <View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig} />
            </View>
        );
    }*/
});

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#FF6600',
        height: 56,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabView: {
        width: deviceWidth,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        height:100,

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
