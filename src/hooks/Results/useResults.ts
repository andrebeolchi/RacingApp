import { useQuery } from "react-query";
import { ResultsController } from "../../controllers/ResultsController";

export default function useResults() {
    return useQuery("results", () => ResultsController.getResults());
}
