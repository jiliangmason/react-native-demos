import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ModuleB extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is ModuleB</Text>
                <Text style={styles.text}>{this.props.word}</Text>
                <Text style={styles.text} onPress={() => {
                    this.props.callback('b页面回调函数传参数');
                    this.props.navigator.pop()
                }}>返回消息</Text>
            </View>)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },

    text: {
        fontSize: 20
    }

});