/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
const CustomListItem = () => {
  return (
    <View style={styles.container}>
      <ListItem bottomDivider containerStyle={styles.containerListItem}>
        <Avatar
          rounded
          source={{uri: 'https://avatars.githubusercontent.com/u/59042228?v=4'}}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>
            Deddy Prianto
          </ListItem.Title>
          <ListItem.Subtitle style={styles.listItemSubTitle}>
            Haloo Developer
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  containerListItem: {backgroundColor: '#131C21'},
  listItemTitle: {color: 'white'},
  listItemSubTitle: {color: '#DFE0E1'},
});
