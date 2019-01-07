/**
 * Created by Wagnxx on 2019/1/4.
 */
import React from 'react';
import {StyleSheet, Text, View,WebView} from 'react-native';

export default class ProjectDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>RN开发组件 ProjectDetails:{this.props.title} </Text>
                <WebView
                    source={{uri:this.props.url}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});