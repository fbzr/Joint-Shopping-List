import React from 'react';
import {View, Text, FlatList} from 'react-native';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../redux/slices/collection';
// Components
import AddInput from '../AddInput';

// list id is passed through the route param
const List = ({navigation, route}) => {
  const list = useSelector((state) => state.collection.lists[route.params.id]);
  const dispatch = useDispatch();

  const onAddItem = async (title) => {
    await dispatch(addItem({listId: route.params.id, title}));
  };

  const renderItem = ({item}) => (
    <View key={item.id}>
      <Text>{item.title}</Text>
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

export default List;
