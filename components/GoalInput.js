import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
import { testProperties } from '../Utils/testHelper';


const GoalInput = props => {
    const [ enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
      
    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

   
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput {...testProperties('inputCourseGoal')} placeholder="Course goal" style={styles.input} onChangeText={goalInputHandler}
        value={enteredGoal}/>
        {/* <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/> */}
        <View style={styles.buttonContainer}>
        <Button {...testProperties('btnCancel')} title="CANCEL" color="red" onPress={props.onCancel}/>
        <Button {...testProperties('btnAdd')} title="ADD" onPress={addGoalHandler}/>
        </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{ 
      width: '80%', 
      height: 40, 
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 10,
      marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%'
  }
});

export default GoalInput;