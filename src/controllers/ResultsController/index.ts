import axios from "axios";

export interface LapProps {
    date: string;
    pilot: string;
    lap: number;
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
}
