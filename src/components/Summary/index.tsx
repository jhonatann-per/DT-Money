import { SummaryContainer, SummaryCard  } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyBtc} from "phosphor-react";
export const Summary = () => {
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>
                    R$ 17.400,00
                </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saída</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>
                    R$ 17.400,00
                </strong>
            </SummaryCard>

            <SummaryCard variante="green">
                <header>
                    <span>Total</span>
                    <CurrencyBtc size={32} color="#fff" />
                </header>

                <strong>
                    R$ 17.400,00
                </strong>
            </SummaryCard>
        </SummaryContainer>
    )
};
