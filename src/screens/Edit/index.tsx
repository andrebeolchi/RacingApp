import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Background from "../../components/Background";
import LapRow from "../../components/LapRow";
import Text from "../../components/Text";
import { LapProps } from "../../controllers/ResultsController";
import useResults from "../../hooks/Results/useResults";
import EditLapModal from "./EditLapModal";

export default function Edit() {
    const {
        params: { id },
    } = useRoute() || {};

    const { data, isLoading } = useResults(id);

    const [editLapModal, setEditLapModal] = useState<boolean>(false);
    const [selectedLap, setSelectedLap] = useState<LapProps>();

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
                            setEditLapModal(true);
                            setSelectedLap(item);
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
            {selectedLap && (
                <EditLapModal
                    key={selectedLap?.date}
                    isOpen={editLapModal}
                    selectedLap={selectedLap}
                    onClose={() => {
                        setEditLapModal(false);
                    }}
                />
            )}
        </Background>
    );
}
