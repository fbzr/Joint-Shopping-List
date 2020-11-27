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
  TouchableHighlight,
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
      <TouchableHighlight
        style={styles.listButton}
        onPress={() => onPressList(item)}>
        <View style={styles.listContainer}>
          <View style={styles.iconContainer}>
            <Icon name="corner-down-right" size={20} color="#333" />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <View>
      <FlatList data={Object.values(lists)} renderItem={renderItem} />
      <AddInput placeholder="Add a list" actionFunc={onAddList} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listButton: {
    height: 65,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 6,
    paddingRight: 6,
  },
  title: {
    fontSize: 18,
  },
});

export default Collection;
