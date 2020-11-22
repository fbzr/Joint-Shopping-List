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
import Header from '../Header';
import AddInput from '../AddInput';

const Collection = ({navigation, route}) => {
  const {lists} = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  const onRemoveList = async () => {
    // await dispatch(removeList());
  };

  const renderItem = ({item}) => (
    <View key={item.id} style={styles.listItemContainer}>
      <TouchableHighlight
        style={styles.listButton}
        onPress={() => {
          setCount(count + 1);
        }}>
        <View style={styles.iconContainer}>
          <Icon name="corner-down-right" size={20} color="#333" />
        </View>
        <Text>{item.title}</Text>
      </TouchableHighlight>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header title="Collection" />}
        data={lists}
        renderItem={renderItem}
        ListFooterComponent={<Text>Footer</Text>}
      />
      <AddInput placeholder="Add a list" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  header: {
    height: 24,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listButton: {},
});

export default Collection;
