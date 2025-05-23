import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import Logo from '../../assets/Logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export const Header = () => {
    return (
        <HeaderContainer> 
            <HeaderContent>
            <img alt="Logo da pagina" src={Logo}/>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </Dialog.Trigger>
                <NewTransactionModal />
            </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
};