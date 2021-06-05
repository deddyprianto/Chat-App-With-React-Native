/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

const AddChat = () => {
  const [newchat, setNewchat] = useState('');
  const onPressButton = () => {
    // 1 tambahkan dulu nama grup
    firestore().collection('data').add(newchat);
  };
  return (
    <View>
      <Input
        placeholder="Create Name Grup Chat"
        leftIcon={<Icon name="WechatOutlined" size={24} color="black" />}
        onChangeText={value => setNewchat(value)}
        onSubmitEditing={onPressButton}
      />
      <Button title="Create Chat" onPress={onPressButton} />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({});
