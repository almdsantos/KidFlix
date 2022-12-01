import React, {useState} from 'react';
import {View, Text, ScrollView, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import {Title, Button, Paragraph, Caption} from 'react-native-paper';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Secao from '../../components/Secao';
import Episodio from '../../components/Episodio';

import styles from './style';

const Filme = () => {    
    const [tipo] = useState('serie');
    const [visible, setVisible] = useState (false);
    const [temporada, seTemporada] = useState( {value: 1, label: 'Temporada 1'});

    return (
        <>
        <SinglePickerMaterialDialog
            title={'Série - Temporada'}
            items={[
                {value: 1, label: 'Temporada 1'},
                {value: 2, label: 'Temporada 2'},
                {value: 3, label: 'Temporada 3'},]}
            visible={visible}
            selectedItem={temporada}
            onOk={(result) => {
                setVisible(false);
                seTemporada(result.selectedItem);
            }}
        />
        <ScrollView style={styles.container}>
                <ImageBackground
                    source={require('../../assets/paw-patrol-capa.jpg')}
                    style={styles.hero} />
                <View style={styles.containerPadding}>
                    <Title style={styles.textTitle}>Patrulha Canina - O Filme</Title>
                    <Button style={styles.buttonPlay} mode="contained" color="#000000">
                        <Text style={styles.textBlack}>Assistir</Text>
                    </Button>
                    <Paragraph style={styles.textWhite}>
                        Ryder e seus amigos têm um grande desafio: Impedir o novo Prefeito de Adventure City, Humdinger, de causar muitos problemas. A turma ainda ganha uma nova aliada para a missão: a esperta basset Liberty. Juntos e equipados com muita tecnologia, a Patrulha Canina luta para salvar os moradores de Adventure City!
                    </Paragraph>
                    <Caption style={styles.captionInfos}>
                        Elenco:{' '} <Caption style={styles.captionWhite}>Iain Armitage, Marsai Martin, Yara Shahidi</Caption>{' '}
                        Título:{' '} <Caption style={styles.captionWhite}>Paw Patrol: The Movie </Caption>{' '}
                        Genero:{' '} <Caption style={styles.captionWhite}>Aventura, Ação, Comédia, Desenho Animado, Filme e Familia, Animação</Caption>{' '}
                    </Caption>
                </View>

                {tipo == 'serie' && (
                    <>
                        <TouchableOpacity
                        onPress={() => {setVisible(true)}}
                        style={styles.buttonTemporada}>
                        <Text style={styles.temporadaName}>{temporada.label}</Text>
                        <Icon name="chevron-down" color="fff" size={20} />
                        </TouchableOpacity>
                        <FlatList
                            data={[1, 2, 3, 4]}
                            renderItem={({ item, index }) => <Episodio key={index} />} />
                    </>
                )}

                {tipo == 'filme' && <Secao hasTopBorder />}

        </ScrollView>
        </>
    );
};

export default Filme;