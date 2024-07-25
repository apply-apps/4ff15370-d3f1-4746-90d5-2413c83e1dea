// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, View } from 'react-native';

const images = [
    { id: '1', width: 200, height: 200 },
    { id: '2', width: 200, height: 200 },
    { id: '3', width: 200, height: 200 },
    { id: '4', width: 200, height: 200 },
    { id: '5', width: 200, height: 200 },
];

const ImageList = () => {
    const renderItem = ({ item }) => (
        <View style={imageStyles.imageContainer}>
            <Image
                source={{ uri: `https://picsum.photos/${item.width}/${item.height}?random=${item.id}` }}
                style={imageStyles.image}
            />
        </View>
    );

    return (
        <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={imageStyles.list}
        />
    );
};

const App = () => {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Picsum Photos</Text>
            <ImageList />
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
});

const imageStyles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default App;