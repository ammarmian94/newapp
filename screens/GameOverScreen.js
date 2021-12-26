import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native';

const GameOverScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of Rounds: {props.roundNumber}</Text>
            <Text>Nmber was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default GameOverScreen;