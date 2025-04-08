import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay, CloseButton, TransactionsType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />
            <Dialog.Overlay />
                <Content>
                    <Dialog.Title>Nova Transação</Dialog.Title>
                    <CloseButton>
                        <X size={24} aria-label="Fechar" />
                    </CloseButton>
                        <form>
                            <input type="text" placeholder="Descrição" required/>
                            <input type="number" placeholder="Preço" required/>
                            <input type="text" placeholder="Categoria" required/>
                            <TransactionsType>
                                <TransactionTypeButton variant="income" value="income">
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TransactionTypeButton>

                                <TransactionTypeButton variant="outcome" value="outcome">
                                    <ArrowCircleDown size={24} />
                                    Saida
                                </TransactionTypeButton>
                            </TransactionsType>

                            <button type="submit">Cadastrar</button>
                        </form>
                </Content>
        </Dialog.Portal>
    )
}