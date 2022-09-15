import { useQuery } from "react-query";
import { ResultsController } from "../../controllers/ResultsController";

export default function useResults(id?: string) {
    if (id) {
        return useQuery(["results", id], () => {
            return ResultsController.getResults(id);
        });
    }

    return useQuery(["results"], () => ResultsController.getResults());
}
