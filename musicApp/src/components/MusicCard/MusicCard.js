import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './MusicCard.style';

const MusicCard = ({ musicData }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: musicData.imageUrl }}></Image>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{musicData.title}</Text>

                <View style={styles.contentContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.artist}>{musicData.artist}</Text>
                        <Text style={styles.year}>{musicData.year}</Text>
                    </View>
                    {musicData.isSoldOut &&
                     <View style={styles.soldOutContainer}>
                     <Text style={styles.soldOutTitle}>TÜKENDİ</Text>
                 </View>
                    }
                   
                </View>

            </View>
        </View>
    );
};
export default MusicCard;
