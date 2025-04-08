import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export const Transactions = () => {
    const { transactions } = useContext(TransactionsContext)


    return(
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                {transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                        <td width="50%">{transaction.description}</td>
                        <td>
                            <PriceHighlight variant={transaction.type}>
                            {transaction.price}
                            </PriceHighlight>
                        </td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                        </tr>
                    )
                })}
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
};