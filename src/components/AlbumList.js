import React, {Component} from 'react';
import { View } from 'react-native';
import axios from 'axios'; 
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    // set state 
    state = { albums:[] };
    
    componentWillMount(){
    // standard methos
        // fetch('http://rallycoding.herokuapp.com/api/music_albums')
        //     .then(response => response.json())
        //     .then(data => this.setState({ albums: data}));
    // Axios version
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data}));
        
    }

    renderAlbum() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log("response.data = ", this.state);
        return (

            <View>
                {this.renderAlbum()}
            </View>
        );
    }
}

export default AlbumList;