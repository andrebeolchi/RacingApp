import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../hooks/useTheme";
import StringUtils from "../../utils/StringUtils";
import Text from "../Text";

export interface PilotResultProps {
    id: string;
    name: string;
    totalTime?: number;
    totalLaps?: number;
}

/**
 * Component to render the lap row of the result.
 * @param {object} props - Props
 * @param {string} props.id - Id of the pilot
 * @param {string} props.name - Name of the pilot
 * @param {number} props.totalTime - Total time of the pilot
 * @param {number} props.totalLaps - Total laps of the pilot
 * @param {number} props.maxLaps - Max laps of the race
 * @returns {JSX.Element} LapRow
 *
 */
export default function LapRow({
    lap,
    lapTime,
    id,
    name,
    maxLaps = 4,
}: {
    lap: number | string;
    lapTime: string;
    maxLaps?: number;
    id: string;
    name: string;
}): JSX.Element {
    const { theme } = useTheme();

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 8,
                backgroundColor: lap % 2 === 0 ? theme.surface : theme.surface3,
                borderTopLeftRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                marginVertical: 4,
            }}
        >
            <View
                style={{
                    backgroundColor: theme.surface2,
                    width: 48,
                    height: 48,
                    borderRadius: 999,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text subtitle black>
                    {`${lap}°`}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flex: 1,
                    marginLeft: 20,
                    marginRight: 8,
                }}
            >
                <View>
                    <Text bold>{StringUtils.capitalizePilotName(name)}</Text>
                    <Text caption>{`#${id}`}</Text>
                </View>
                <View>
                    <Text bold right>{`${lap}/${maxLaps}`}</Text>
                    <Text caption right>
                        {lapTime}
                    </Text>
                </View>
            </View>
            <Icon name="chevron-forward" size={16} color={theme.text.primary} />
        </View>
    );
}
