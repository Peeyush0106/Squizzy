import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import JoinForm from "./JoinForm";

export default class JoinGame extends Component {
    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <Text style={styles.hello}>
                    Hello user!!
                </Text>
                <Text>{"\n"}</Text>
                <Text style={styles.caption}>
                    Here is a place to squeeze out your strengths to compete your rivals in the battle of knowledge and intelligence.
                </Text>
                <Text>{"\n"}</Text>

                <JoinForm />

                <Text style={{ fontSize: 5 }}>{"\n"}</Text>

                <Image source={{ uri: 'https://www.plrassassin.com/wp-content/uploads/2016/07/Intelligence-Battle-Plan.png' }}
                    style={{ width: "100%", height: "70%" }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    hello: {
        alignSelf: 'center',
        fontSize: 30
    },
    caption: {
        fontSize: 15,
        alignSelf: 'center',
        backgroundColor: "yellow"
    }
});
