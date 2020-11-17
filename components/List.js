import React from 'react';
import {FlatList, Text} from 'react-native';

const List = () => {
  const data = [
    {
      id: 1,
      title: 'Fabricio',
    },
    {
      id: 2,
      title: 'Dani',
    },
  ];

  return (
    <FlatList data={data} renderItem={({item}) => <Text>{item.title}</Text>} />
  );
};

export default List;
