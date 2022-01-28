import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class JoinGame extends Component {
    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <TextInput placeholder="Enter your name here..." style={styles.inpt} alignSelf="center" />
                <Text style={{ fontSize: 5 }}>{"\n"}</Text>

                <TextInput placeholder="Enter game password..." style={styles.inpt} alignSelf="center" />
                <Text style={{ fontSize: 5 }}>{"\n"}</Text>

                <TouchableOpacity style={styles.joinBtn}>
                    <Text style={{ color: "white", fontSize: 25 }}>Join</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inpt: {
        backgroundColor: "lightgreen"
    },
    joinBtn: {
        backgroundColor: "blue",
        alignSelf: "center"
    }
});
