import { useQuery } from "react-query";
import { ResultsController } from "../../controllers/ResultsController";

export default function useResults(id?: string) {
    if (id) {
        console.log("ID RESULTS ===", id);

        return useQuery(["results", id], () =>
            ResultsController.getResults(id)
        );
    }

    return useQuery(["results"], () => ResultsController.getResults());
}
