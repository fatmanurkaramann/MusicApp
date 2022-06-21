import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 6,
        paddingLeft: 10,
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    infoContainer: {
        marginTop: 5,
        flexDirection: 'row',
        flex:1,
        alignItems:"center"
    },
    artist: {
        fontSize: 16,
        color: 'black',
    },
    year: {
        marginLeft: 10,
        color: 'gray',
    },
    soldOutContainer: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 4,
    },
    soldOutTitle: {
        color: 'red',
    },
    contentContainer: {
        flexDirection: 'row',
    },
});
