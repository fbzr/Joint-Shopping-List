import React from 'react';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addList, removeList} from '../../redux/slices/collection';
// Icon
import Icon from 'react-native-vector-icons/Feather';
// React-Native
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// Components
import AddInput from '../AddInput';

const Collection = ({navigation, route}) => {
  const {lists} = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  const onRemoveList = async () => {
    // await dispatch(removeList());
  };

  const onAddList = async (title) => {
    const {payload} = await dispatch(addList({title}));
    navigation.push('List', {id: payload.id, title: payload.title});
  };

  const onPressList = (list) => {
    navigation.push('List', {id: list.id, title: list.title});
  };

  const renderItem = ({item}) => (
    <View key={item.id}>
      <TouchableOpacity
        style={styles.listButton}
        onPress={() => onPressList(item)}>
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Icon name="corner-down-right" size={20} color="#333" />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList data={Object.values(lists)} renderItem={renderItem} />
      <AddInput placeholder="Add a list" actionFunc={onAddList} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listButton: {
    height: 65,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default Collection;
