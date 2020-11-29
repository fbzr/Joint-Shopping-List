import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../../redux/slices/collection';
// Components
import AddInput from '../AddInput';
import ListItem from '../ListItem';

// list id is passed through the route param
const List = ({navigation, route}) => {
  const list = useSelector((state) => state.collection.lists[route.params.id]);
  const items = Object.values(list.items);

  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState('');

  const onAddItem = async (title) => {
    await dispatch(addItem({listId: route.params.id, title}));
    setSelectedItem('');
  };

  return (
    route.params.id && (
      <View style={{flex: 1}}>
        {items.length ? (
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={items}
            renderItem={({item}) => (
              <ListItem
                item={item}
                setSelected={setSelectedItem}
                selected={item.id === selectedItem}
              />
            )}
          />
        ) : (
          <Text style={styles.emptyText}>This list is empty</Text>
        )}

        <AddInput placeholder="Add a new item" actionFunc={onAddItem} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  emptyText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default List;
