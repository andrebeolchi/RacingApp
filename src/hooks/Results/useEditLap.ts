import { useMutation } from "react-query";
import { queryClient } from "../../context/query";
import {
    LapProps,
    ResultsController
} from "../../controllers/ResultsController";

export default function useEditLap({ onSuccess, onError }) {
    return useMutation(
        async (lap: LapProps) => {
            console.log(lap);
            const data = await ResultsController.editLap(lap);

            return data;
        },
        {
            onSuccess: (data) => {
                queryClient.setQueryData(["results"], (oldData) => {
                    return [
                        ...oldData.filter((lap) => lap.id !== data.id),
                        data,
                    ];
                });

                queryClient.setQueryData(
                    ["results", data?.pilot.split(" ")[0]],
                    (oldData) => {
                        return [
                            ...oldData.filter((lap) => lap.id !== data.id),
                            data,
                        ];
                    }
                );

                onSuccess?.();
            },
            onError: (err) => {
                onError?.(err);
            },
        }
    );
}
