import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ModuleB from './moduleB';

export default class ModuleA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    render() {
        return (<View style={styles.container}>
            <Text style={styles.text}>This is moduleA</Text>
            <Text style={styles.text} onPress={() => {
                this.props.navigator.push({
                    component: ModuleB,
                    params: {
                        word: 'a页面的信息',
                        callback: (word) => {
                            this.setState({
                                word: word
                            })
                        }
                    }
                })
            }}>点击跳转到B页面</Text>
            <Text style={styles.text}>{this.state.word}</Text>
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