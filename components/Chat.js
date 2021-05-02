/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, ListItem, Divider} from 'react-native-elements';
const App = () => {
  return (
    <View style={styles.containerInti}>
      <ListItem onPress={} containerStyle={styles.container}>
        <Avatar
          rounded
          source={{uri: 'https://avatars.githubusercontent.com/u/59042228?v=4'}}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.styleText}>Deddy</ListItem.Title>
          <ListItem.Subtitle style={styles.styleText}>
            Haloo Dev
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <Divider style={styles.garisBawah} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerInti: {backgroundColor: '#131C21', flex: 1},
  container: {backgroundColor: '#131C21', paddingVertical: 20, marginTop: 40},
  styleText: {color: 'white'},
  garisBawah: {backgroundColor: 'grey'},
});
