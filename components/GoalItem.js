import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import { testProperties } from '../Utils/testHelper';

const GoalItem = props => {
    return  (
        // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
    // <TouchableHighlight underlayColor='#FF0000' onPress={props.onDelete}>
        //  <TouchableNativeFeedback underlayColor='#FF0000' onPress={props.onDelete.bind(this, props.id)}>
    <TouchableNativeFeedback underlayColor='#FF0000' onPress={props.onDelete}>

        <View style={styles.listItem}>
        <Text {...testProperties(`${props.accessibilityID}`)}>{props.title}</Text>
        </View>
     {/* </TouchableHighlight>  */}
    </TouchableNativeFeedback>
 );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#EF5350',
        borderColor: 'black',
        borderWidth: 1,
      }
});

export default GoalItem;