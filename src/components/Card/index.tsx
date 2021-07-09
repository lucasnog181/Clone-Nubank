import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { sx } from './styles'

type dataProps = {
    data: {
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
}

export function CardConta({ data }: dataProps) {
    return (
        <View style={sx.cardContainer}>
            <View style={sx.cardTitleContent}>
                {data.active ? (
                    <Ionicons
                        name={data.icon}
                        size={data.active ? 28 : 24}
                        color={data.active ? "#905FB7" : "gray"}
                        style={[sx.Icons, { backgroundColor: "#cca1e78b", padding: 10, borderRadius: 50 }]}
                    />
                ) : (
                    <Ionicons
                        name={data.icon}
                        size={24}
                        color="gray"
                        style={sx.Icons}
                    />
                )}
                <Text style={[sx.CardTitle, data.title === "Rewards" && { color: "#983fe0", fontWeight: "700", fontSize: 22 }]}>{data.title}</Text>
            </View>
            <Text style={sx.CardDescription}>{data.description}</Text>

            {data.title === "Conta" && (
                <Text style={sx.AccountValue}>{data.valor}</Text>
            )}

            {data.limit && (
                <>
                    <Text style={sx.Value}>{data.valor}</Text>
                    <View style={sx.contentLimit}>
                        <Text style={sx.Limit}>{data.limit}</Text>
                        <Text style={sx.LimitValues}>{data.limitValor}</Text>
                    </View>
                </>
            )}
            {data.active && (
                <TouchableOpacity style={sx.CardButton}>
                    <Text style={sx.CardButtonText}>{data.textButton}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
