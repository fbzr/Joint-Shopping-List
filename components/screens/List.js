import React from 'react';
import {View, Text} from 'react-native';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../redux/slices/collection';

// list id is passed through the route param
const List = ({navigation, route}) => {
  const list = useSelector((state) => state.lists[route.params.id]);
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
        <Text>{`List ID: ${route.params.id}`}</Text>
        <FlatList
          ListHeaderComponent={<Header title="Collection" />}
          data={list.items}
          renderItem={renderItem}
          ListFooterComponent={<Text>Footer</Text>}
        />
        <AddInput placeholder="Add a new item" actionFunc={onAddItem} />
      </View>
    )
  );
};

export default List;
