import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// destructuring: replace 'props' with 'album'
const AlbumDetail = ({ album }) => {
// destructuring: define album
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
{/*destructuring: just refernece {the endpoint}*/}
                    <Image 
                    style={thumbnailStyle}
                    source={ {uri: thumbnail_image} }/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text> 
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                style={imageStyle}
                source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
       fontSize: 18,  
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};



export default AlbumDetail;


