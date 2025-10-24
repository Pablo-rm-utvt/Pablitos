import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { useRickMortyPaginated } from '../hooks/useRickMorty';
import { RickMortyCard } from '../componentes/RickMortyCard';


export const HomeRickMorty = () => {

    const { loadRickMorty, simpleRickMortyList } = useRickMortyPaginated();

    return (
        <View
            style={style.root}
        >
            <FlatList
                data={simpleRickMortyList}
                keyExtractor={(personaje, index) => `${personaje.id}${index}`}
                // Header
                ListHeaderComponent={(
                    <Text
                        style={{ fontSize: 60, marginHorizontal: 10 }}
                    >

                    </Text>
                )}
                // Body
                showsVerticalScrollIndicator={false}
                numColumns={1} // Ojo si lo cambio debo reiniciar el app
                renderItem={({ item }) => (
                    <RickMortyCard
                        {...item}
                    />
                )}

                // Infinite Scroll
                onEndReached={loadRickMorty}
                onEndReachedThreshold={0.2}
                // Footer
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 120 }}
                        size={60}
                        color="#4bf92dff"
                    />
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});