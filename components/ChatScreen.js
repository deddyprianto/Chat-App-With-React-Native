/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {Avatar, ListItem, Divider} from 'react-native-elements';
const App = () => {
  const [text, setText] = useState('');
  console.log(text);
  return (
    <View style={styles.containerInti}>
      <StatusBar backgroundColor="white" />
      <ScrollView></ScrollView>

      <View style={styles.containerMain}>
        <View style={styles.containerInput}>
          <Avatar
            containerStyle={styles.styleAvatar}
            rounded
            source={{uri: 'http://simpleicon.com/wp-content/uploads/smile.png'}}
          />
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Ketik di sini"
            keyboardType="default"
          />
        </View>
        <Avatar
          containerStyle={styles.styleAvatar}
          rounded
          source={{uri: 'https://i.dlpng.com/static/png/7253151_preview.png'}}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerInti: {backgroundColor: '#131C21', flex: 1},
  containerMain: {flexDirection: 'row', alignItems: 'center'},
  containerInput: {
    borderRadius: 20,
    width: '85%',
    marginRight: 10,
    flexDirection: 'row',
    backgroundColor: '#2A2F32',
  },
  input: {height: 30, flex: 1, marginLeft: 10},
  styleAvatar: {backgroundColor: 'white'},
});
