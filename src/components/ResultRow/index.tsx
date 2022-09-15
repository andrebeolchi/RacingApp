import React from "react";
import { View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import DateUtil from "../../utils/DateUtils";
import StringUtils from "../../utils/StringUtils";
import Text from "../Text";

export interface PilotResultProps {
    id: string;
    name: string;
    totalTime?: number;
    totalLaps?: number;
}

export default function ResultRow({
    position,
    name,
    id,
    totalLaps,
    totalTime,
    maxLaps = 4,
}: PilotResultProps & { position: number; maxLaps?: number }): JSX.Element {
    const { theme } = useTheme();

    const getBackgroundColor = (position: number) => {
        switch (position) {
            case 1:
                return "#FFD700";
            case 2:
                return "#C0C0C0";
            case 3:
                return "#CD7F32";
            default:
                return theme.background;
        }
    };

    const backgroundColor = getBackgroundColor(position);

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 8,
                backgroundColor:
                    position % 2 === 0 ? theme.surface : theme.surface3,
                borderTopLeftRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                marginVertical: 4,
            }}
        >
            <View
                style={{
                    backgroundColor,
                    width: 48,
                    height: 48,
                    borderRadius: 999,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    subtitle
                    secondary={position <= 3}
                    black
                >{`${position}°`}</Text>
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
                    <Text bold right>{`${totalLaps}/${maxLaps}`}</Text>
                    <Text caption right>
                        {DateUtil.convertMilissecondsToTime(totalTime || 0)}
                    </Text>
                </View>
            </View>
        </View>
    );
}
