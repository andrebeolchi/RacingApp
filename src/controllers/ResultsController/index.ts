import axios from "axios";

export interface LapProps {
    id: number;
    date: string;
    pilot: string;
    lap: number | string;
    lapTime: string;
    avgSpeed: string;
}

export class ResultsController {
    static async getResults(id?: string) {
        try {
            const { data } = await axios.get<LapProps[]>(
                "https://63237c9f5c1b43572796c0d0.mockapi.io/results"
            );

            if (id) {
                return data.filter((lap) => lap.pilot.includes(id));
            }

            return data;
        } catch (error) {
            console.error(error);
        }
    }

    static async editLap(lap: LapProps) {
        try {
            // Mockapi.io não está permitindo o método PUT, entao vou "simular" o PUT
            // const url = `https://63237c9f5c1b43572796c0d0.mockapi.io/results/${lap?.id}/`;

            // const { data } = await axios.put<LapProps>(url, lap);

            const data = lap;

            return data;
        } catch (error) {
            console.error(error);
        }
    }
}
