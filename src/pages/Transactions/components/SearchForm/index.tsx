import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export const SearchForm = () => {
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />

            <button>
                <MagnifyingGlass />
                Buscar
            </button>

        </SearchFormContainer>
    )
};