import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textWhite: {
        color: '#fff',
        borderColor: '#000'
    },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 998,
    },
    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 70,
        alignItems: 'center',
    },
});

export default styles;