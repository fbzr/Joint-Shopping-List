import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// Icon
import Icon from 'react-native-vector-icons/Feather';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {
  addItem,
  removeItem,
  toggleItem,
  patchItem,
} from '../../redux/slices/collection';
// Components
import AddInput from '../AddInput';

// list id is passed through the route param
const List = ({navigation, route}) => {
  const list = useSelector((state) => state.collection.lists[route.params.id]);
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState('');

  const onAddItem = async (title) => {
    await dispatch(addItem({listId: route.params.id, title}));
  };

  const onToggleItem = async ({id, listId}) => {
    await dispatch(toggleItem({itemId: id, listId}));
  };

  const editTitle = async ({id, listId}) => {
    console.log('edit');
    await dispatch(patchItem({listId, id, args: {title: newTitle}}));
    setNewTitle('');
  };

  const renderItem = ({item}) => (
    <View key={item.id} style={styles.itemContainer}>
      <CheckBox value={item.done} onValueChange={() => onToggleItem(item)} />
      <TextInput
        style={[styles.itemTitle, item.done ? styles.itemDone : {}]}
        onChangeText={(text) => setNewTitle(text)}
        onBlur={() => editTitle(item)}
        value={newTitle || item.title}
        onSubmitEditing={() => editTitle(item)}
      />

      <View style={styles.iconContainer}>
        <Icon name="trash" size={20} color="#333" />
      </View>
    </View>
  );

  return (
    route.params.id && (
      <View>
        <FlatList data={Object.values(list.items)} renderItem={renderItem} />
        <AddInput placeholder="Add a new item" actionFunc={onAddItem} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
  },
  itemTitle: {
    flex: 1,
    fontSize: 18,
  },
  itemDone: {
    textDecorationLine: 'line-through',
  },
});

export default List;
