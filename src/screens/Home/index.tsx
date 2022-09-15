import React from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import Text from "../../components/Text";
import { LapProps } from "../../controllers/ResultsController";
import useResults from "../../hooks/Results/useResults";
import DateUtil from "../../utils/DateUtil";

interface PilotResultProps {
    id: string;
    name: string;
    totalTime?: number;
    totalLaps?: number;
}

export default function Home() {
    const { data: results, isLoading } = useResults() || {};

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
                    <Text>Loading...</Text>
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
            {result
                .sort(
                    (a: PilotResultProps, b: PilotResultProps) =>
                        (a.totalTime || 0) - (b.totalTime || 0)
                )
                .map((item, index) => {
                    return <Text key={index}>{item.name}</Text>;
                })}
        </Background>
    );
}
