/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {ListItem, Avatar, Text} from 'react-native-elements';
import {SearchOutlined, MoreOutlined} from '@ant-design/icons';
import {TabView, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const FirstRoute = () => {
  return (
    <View style={styles.container}>
      <ListItem bottomDivider containerStyle={{backgroundColor: '#131C21'}}>
        <Avatar
          rounded
          source={{uri: 'https://avatars.githubusercontent.com/u/59042228?v=4'}}
        />
        <ListItem.Content>
          <ListItem.Title style={{color: 'white'}}>
            Deddy Prianto
          </ListItem.Title>
          <ListItem.Subtitle style={{color: '#DFE0E1'}}>
            Haloo Developer
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};
const SecondRoute = () => {
  return (
    <View>
      <Text>Status Developer</Text>
    </View>
  );
};
const ThirdRouter = () => {
  return <View>ini adalah panggilan</View>;
};

const screen = Dimensions.get('screen');
// class Component
class Home extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Chat'},
      {key: 'second', title: 'Status'},
      {key: 'third', title: 'Panggilan'},
    ],
    dimensions: {
      screen,
    },
  };
  onChange = ({screen}) => {
    this.setState({dimensions: {screen}});
  };
  componentDidMount() {
    Dimensions.addEventListener('change', this.onChange);
  }
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRouter,
  });
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
  render() {
    return (
      <TabView
        navigationState={(this.state.index, this.state.routes)}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        initialLayout={{width: this.state.dimensions}}
        renderTabBar={this._renderTabBar}
      />
    );
  }
}
export default Home;
// render utama Component
// const Home = () => {
//   const navigation = useNavigation();
//   const layout = useWindowDimensions();
//   const [routes, setRoutes] = useState({
//     index: 0,
//     routes: [
//       {key: 'first', title: <Text style={{color: '#DFE0E1'}}>Chat</Text>},
//       {key: 'second', title: <Text style={{color: '#DFE0E1'}}>Status</Text>},
//       {key: 'third', title: <Text style={{color: '#DFE0E1'}}>Panggilan</Text>},
//     ],
//   });
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: 'DeyChat',
//       headerRight: () => (
//         <View>
//           <Icon name={<SearchOutlined />} />
//           <Icon name={<MoreOutlined />} />
//         </View>
//       ),
//     });
//   }, [navigation]);
//   // render Scene
//   const renderScene = SceneMap({
//     first: firstRouter,
//     second: secondRouter,
//     third: thirdRouter,
//   });
//   // Penanganan Handle State
//   const handleStateChange = index => setRoutes({index});
//   // Render TAB
//   const renderTab = props => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);
//     return (
//       <View style={styles.tabBar}>
//         {props.navigationState.routes.map((route, i) => {
//           const opacity = props.position.interpolate({
//             inputRange,
//             outputRange: inputRange.map(inputIndex =>
//               inputIndex === i ? 1 : 0.5,
//             ),
//           });
//           return (
//             <TouchableOpacity
//               key={i}
//               style={styles.tabItem}
//               onPress={() => setRoutes({index: i})}>
//               <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };
//   return (
//     <TabView
//       navigationState={routes}
//       onIndexChange={handleStateChange}
//       renderScene={renderScene}
//       initialLayout={{width: layout.width}}
//       renderTabBar={renderTab}
//     />
//   );
// };

// export default Home;

const styles = StyleSheet.create({
  styleTab: {
    backgroundColor: '#2A2F32',
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
