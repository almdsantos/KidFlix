import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 330,
        zIndex: 998,
    },    
    menuHeader: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#fff',
    },
    textButton: {
        color: 'white',
    },
});



export default styles;