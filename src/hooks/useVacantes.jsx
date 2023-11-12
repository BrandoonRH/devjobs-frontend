import { useContext } from "react";
import VacanteContext from "../context/VacantesProvider";

const useVacante = () => {
    return useContext(VacanteContext)
}

export default useVacante; 