/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import moduleA from './moduleA';

export default class webapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<TabNavigator>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'tb_popular'}
                        //标题
                        title="最热"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        badgeText="1"
                        //图标
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/ic_polular.png")}/>}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: 'red'}]}
                                                         source={require("./res/images/ic_polular.png")}/>}
                        //点击Event
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                        <View style={styles.page0}>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        title="趋势"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/ic_trending.png")}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: 'red'}]}
                                                         source={require("./res/images/ic_trending.png")}/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                        <View style={styles.page1}>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favourite'}
                        title="喜好"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/ic_favorite.png")}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: 'red'}]}
                                                         source={require("./res/images/ic_favorite.png")}/>}
                        onPress={() => this.setState({selectedTab: 'tb_favourite'})}>
                        <View style={styles.page1}>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./res/images/ic_my.png")}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: 'red'}]}
                                                         source={require("./res/images/ic_my.png")}/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        <View style={styles.page1}>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>*/}
                <NavigationExperimental.Navigator
                    initialRoute={
                        { component: moduleA }
                    }
                    renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component navigator={navigator} {...route.params}/>
                }}></NavigationExperimental.Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

AppRegistry.registerComponent('webapp', () => webapp);
