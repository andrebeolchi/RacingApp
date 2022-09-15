import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Background from "../../components/Background";
import ResultRow, { PilotResultProps } from "../../components/ResultRow";
import Text from "../../components/Text";
import { LapProps } from "../../controllers/ResultsController";
import useResults from "../../hooks/Results/useResults";
import DateUtil from "../../utils/DateUtils";

export default function Home() {
    const { data: results, isLoading } = useResults() || {};
    const navigation = useNavigation();

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

    const data = results?.flatMap((item: LapProps) => item.pilot);

    const uniquePilots = [...new Set(data)];

    const result = uniquePilots.map((pilot) => {
        const totalTime = results
            ?.filter((item) => item.pilot === pilot)
            .reduce(
                (acc, item) =>
                    acc + DateUtil.convertTimeToMilisseconds(item.lapTime),
                0
            );

        const totalLaps = results?.filter(
            (item) => item.pilot === pilot
        ).length;

        return {
            id: pilot.split(" ")[0],
            name: pilot.split(" ").reverse()[0],
            totalTime,
            totalLaps,
        };
    });

    return (
        <Background>
            <FlatList
                data={result.sort(
                    (a: PilotResultProps, b: PilotResultProps) =>
                        (a.totalTime || 0) - (b.totalTime || 0)
                )}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            navigation.navigate(
                                "Edit" as never,
                                {
                                    id: item.id,
                                } as never
                            );
                        }}
                    >
                        <ResultRow position={index + 1} {...item} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </Background>
    );
}
