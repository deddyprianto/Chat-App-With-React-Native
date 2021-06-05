/* eslint-disable prettier/prettier */
import React from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar, ListItem, Divider} from 'react-native-elements';
import useStateValue from '../State/StateProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();
  const [{datauser}, dispatch] = useStateValue();
  return (
    <View style={styles.containerInti}>
      <ListItem containerStyle={styles.container}>
        <Avatar
          rounded
          source={{uri: 'https://avatars.githubusercontent.com/u/59042228?v=4'}}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.styleText}>
            {datauser.displayName}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.styleText}>
            Haloo Dev
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <Divider style={styles.garisBawah} />
      <View style={styles.containerFirst}>
        <TouchableOpacity
          style={styles.tombolAddNewChat}
          onPress={() => navigation.replace('AddChat')}>
          <PlusOutlined />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerInti: {backgroundColor: '#131C21', flex: 1},
  tombolAddNewChat: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  container: {backgroundColor: '#131C21', paddingVertical: 20},
  styleText: {color: 'white'},
  garisBawah: {backgroundColor: 'grey'},
});
