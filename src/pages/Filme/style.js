import{StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    hero: {
        height: 200,
        width: '100%',
    },
    containerPadding: {
        padding: 20,
    },
    textTitle: {
        color: 'white',
        textAlign: 'center',
    },
    buttonPlay: {
        marginVertical: 20,
        backgroundColor: 'white',
    },
    textWhite:{
        color: 'white',
    },
    textBlack:{
        color: 'black',
    },
    captionInfos: {
        marginVertical: 20,
        color: 'gray',
    },
    captionWhite: {
        color: 'white',
    },  
    buttonTemporada: {
        width: '100%',
        padding: 10,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderWidth: 1,
        borderColor: 'border: 1px solid rgba(255, 255, 255, 0.21)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    temporadaName: {
        color: 'white',
    },
});

export default styles;