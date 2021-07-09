import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { CardConta } from '../../components/Card';
import { Header } from '../../components/Header';
import { TabNavigation } from '../../components/TabNavigation';

import CardItem from '../../services/Card.data'

import { sx } from './styles';

type CardProps = {
    id: number,
    active?: boolean,
    title: string,
    icon: string,
    description: string,
    valor: string,
    textButton?: string,
    limit?: string,
    limitValor?: string,
}

const Home: React.FC = () => {

    const [cardsData, setCardData] = useState<CardProps[]>(CardItem)

    return (
        <View style={sx.container}>
            <Header />
            <FlatList data={cardsData}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <CardConta data={item} />
                )}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>

            <TabNavigation />
        </View>
    );
}

export default Home;