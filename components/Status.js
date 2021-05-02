/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
const Chat = () => {
  return (
    <View style={styles.containerInti}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={styles.container}>
        <View style={styles.containerAvatar}>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: 'https://avatars.githubusercontent.com/u/59042228?v=4',
            }}
          />
          <View style={styles.iconsTambah}>
            <Text style={{color: 'white'}}>+</Text>
          </View>
        </View>
        <View style={styles.containerText}>
          <Text h1 style={styles.fontColor}>
            Status Saya
          </Text>
          <Text h4 style={styles.fontColor}>
            Ketuk untuk menambahkan pembaharuan
          </Text>
        </View>
      </View>
      <Divider style={styles.garisBawah} />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  containerInti: {backgroundColor: '#131C21', flex: 1, paddingVertical: 30},
  container: {
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerAvatar: {width: '15%', marginLeft: 10},
  containerText: {flex: 1, flexWrap: 'wrap', alignItems: 'flex-start'},
  fontColor: {color: 'white', paddingHorizontal: 10},
  garisBawah: {backgroundColor: 'grey'},
  iconsTambah: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 20 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
