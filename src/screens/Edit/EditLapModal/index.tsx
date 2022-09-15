import React, { useState } from "react";
import { Alert, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";
import { LapProps } from "../../../controllers/ResultsController";
import useEditLap from "../../../hooks/Results/useEditLap";
import { useTheme } from "../../../hooks/useTheme";

export default function EditLapModal({
    isOpen,
    onClose,
    selectedLap,
}: {
    isOpen: boolean;
    onClose: () => void;
    selectedLap: LapProps | null;
}) {
    const { theme } = useTheme();

    const [lap, setLap] = useState<LapProps>(selectedLap || {});

    const editMutation = useEditLap({
        onSuccess: () => {
            Alert.alert("Sucesso!", "Volta editada com sucesso!");
            onClose();
        },
        onError: () => {
            Alert.alert("Erro", "Ocorreu um erro ao editar essa volta.");
            onClose();
        },
    });

    return (
        <Modal
            isVisible={isOpen}
            onBackdropPress={() => onClose()}
            onBackButtonPress={() => onClose()}
            style={{
                margin: 0,
            }}
            hideModalContentWhileAnimating
            animationIn="bounceIn"
            animationInTiming={300}
            animationOut="bounceOut"
            animationOutTiming={300}
            coverScreen
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        backgroundColor: theme.surface,
                        padding: 8,
                        maxHeight: "80%",
                        width: "80%",
                        borderRadius: 8,
                    }}
                >
                    <View
                        style={{
                            alignSelf: "flex-end",
                        }}
                    >
                        <Icon
                            name="close"
                            color={theme.text.primary80}
                            onPress={() => onClose()}
                        />
                    </View>
                    <View
                        style={{
                            paddingTop: 8,
                            paddingHorizontal: 16,
                            paddingBottom: 16,
                        }}
                    >
                        <View
                            style={{
                                marginBottom: 24,
                            }}
                        >
                            <Text
                                title
                            >{`Editar volta #${selectedLap?.lap}`}</Text>
                        </View>

                        <Text primary80>Piloto:</Text>
                        <TextInput
                            value={lap?.pilot}
                            onChangeText={(pilot: string) =>
                                setLap({ ...lap, pilot })
                            }
                        />
                        <Text primary80>Volta:</Text>
                        <TextInput
                            style={{
                                backgroundColor: theme.surface3,
                                padding: 8,
                                borderRadius: 8,
                                color: theme.text.primary,
                                marginBottom: 8,
                            }}
                            value={lap?.lap.toString()}
                            onChangeText={(text: string) =>
                                setLap({ ...lap, lap: text })
                            }
                        />
                        <Text primary80>Tempo da volta:</Text>
                        <TextInput
                            value={lap?.lapTime}
                            onChangeText={(lapTime: string) =>
                                setLap({ ...lap, lapTime })
                            }
                        />
                        <Text primary80>Velocidade Média:</Text>
                        <TextInput
                            value={lap?.avgSpeed}
                            onChangeText={(avgSpeed: string) =>
                                setLap({ ...lap, avgSpeed })
                            }
                        />
                    </View>
                    <View
                        style={{
                            paddingHorizontal: 16,
                            paddingBottom: 16,
                        }}
                    >
                        <Button
                            label="Salvar"
                            isLoading={editMutation.isLoading}
                            onPress={() => editMutation.mutate(lap)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
