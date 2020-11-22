import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, TextInput, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {addList} from '../redux/slices/collection';

const AddInput = ({placeholder}) => {
  const [value, setValue] = useState('');
  const [selected, setClicked] = useState(false);
  const dispatch = useDispatch();

  const onAdd = async () => {
    await dispatch(addList({title: value}));
    setValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="plus" size={20} color="#333" />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={placeholder || 'Add Collection'}
        onSubmitEditing={onAdd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    width: '100%',
  },
  iconContainer: {
    marginLeft: 10,
  },
  input: {
    height: 40,
    width: '100%',
  },
});

export default AddInput;
