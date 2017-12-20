//  import a library to create a component
import React from 'react';
// import ReactNative from 'react-native';
// import destructuring 
import { AppRegistry, View } from 'react-native';

// importing components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// CREATE A COMPONENT
// use a js function to return jsx
// self closing tags for empty tags (nested components)
const App = () => {
    return(
        <View>
            <Header headerText={'Header from index.js'} />
            <AlbumList />
        </View>
    );
};
// only returning a single variable, dont need curlies or "return"
// const App = () => (
//     <Text>no way dude !</Text>
// );

// render it to the device
// ReactNative.AppRegistry.registerComponent('albums', () => App);
// video had some linting problem, not seen here
AppRegistry.registerComponent('albums', () => App);