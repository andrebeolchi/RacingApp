import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import Background from "../../components/Background";
import Text from "../../components/Text";
import useResults from "../../hooks/Results/useResults";

export default function Edit() {
    const {
        params: { id },
    } = useRoute() || {};

    console.log(id);

    const { data, isLoading } = useResults(id);

    console.log("data:", data);

    if (!id) {
        return (
            <Background>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>Oops! Não encontrei esse piloto</Text>
                </View>
            </Background>
        );
    }

    if (isLoading) {
        return (
            <Background>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>Carregando...</Text>
                </View>
            </Background>
        );
    }

    console.log(data);

    return (
        <Background>
            <FlatList
                data={data || []}
                renderItem={({ item }) => <Text>{item.pilot}</Text>}
                keyExtractor={(item) => item.id}
            />
        </Background>
    );
}
