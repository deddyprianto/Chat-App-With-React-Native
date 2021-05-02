/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Text, Button, Image} from 'react-native-elements';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  // adb shell input keyevent 82
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  function onAuthStateChanged(stateuser) {
    if (stateuser != null) {
      navigation.replace('DeyChat');
    }
    setInitializing(false);
  }
  useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return unsubscriber;
  }, []);
  // button Login
  const loginButton = async () => {
    try {
      GoogleSignin.configure({
        scopes: ['email'],
        webClientId:
          '907353408142-pl5budkl5itgn97rlhj9qj600g9ob4o8.apps.googleusercontent.com',
      });
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('ini error kamu ', error);
    }
  };
  if (initializing) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.textUtama}>
        Haloo Selamat Datang di aplikasi DeyChat
      </Text>
      <Image
        containerStyle={styles.imageLogo}
        PlaceholderContent={<ActivityIndicator />}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png',
        }}
      />
      <View style={styles.buttonLogin}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={loginButton}
        />
        <Button onPress={() => GoogleSignin.signOut()} title="Log out" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  imageLogo: {width: 200, height: 200},
  textUtama: {margin: 20},
  buttonLogin: {marginTop: 30, height: 200},
  buttonHome: {marginTop: 10, backgroundColor: 'red'},
});
