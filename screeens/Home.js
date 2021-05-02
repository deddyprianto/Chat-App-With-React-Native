/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {SearchOutlined, MoreOutlined} from '@ant-design/icons';
import {TabView, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Chat from '../components/Chat';
import Status from '../components/Status';
import Panggilan from '../components/Panggilan';

const FirstRoute = () => <Chat />;
const SecondRoute = () => <Status />;
const ThirdRouter = () => <Panggilan />;

// class Component
class Home extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: <Text style={styles.fontColor}>Chat</Text>},
      {key: 'second', title: <Text style={styles.fontColor}>Status</Text>},
      {key: 'third', title: <Text style={styles.fontColor}>Panggilan</Text>},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRouter,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#131C21',
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  fontColor: {color: '#DFE0E1'},
  backgroundcolorContainer: {
    backgroundColor: '#2A2F32',
  },
});
