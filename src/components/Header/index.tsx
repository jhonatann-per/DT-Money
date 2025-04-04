import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import Logo from '../../assets/Logo.svg'
import * as Dialog from "@radix-ui/react-dialog";

export const Header = () => {
    return (
        <HeaderContainer> 
            <HeaderContent>
                <img alt="Logo da pagina" src={Logo}/>
               
            
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay />
                    <Dialog.Content>
                        <Dialog.Title>Nova Transação</Dialog.Title>
                        <Dialog.Close />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
};