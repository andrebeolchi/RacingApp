import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Background from "../../components/Background";
import LapRow from "../../components/LapRow";
import Text from "../../components/Text";
import useResults from "../../hooks/Results/useResults";

export default function Edit() {
    const {
        params: { id },
    } = useRoute() || {};

    const { data, isLoading } = useResults(id);

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

    return (
        <Background>
            <FlatList
                data={data || []}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            console.log("Edit lap");
                        }}
                    >
                        <LapRow
                            maxLaps={4}
                            name={item.pilot.split(" ").reverse()[0]}
                            id={item.pilot.split(" ")[0]}
                            lap={item.lap}
                            lapTime={item.lapTime}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.date}
            />
        </Background>
    );
}
