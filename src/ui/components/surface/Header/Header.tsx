import { ButtonsContainer, HeaderAppBar, HeaderLogo, HeaderDrawer } from "./Header.style";
import { Toolbar, Container, IconButton, MenuList, MenuItem, Divider } from "@mui/material";
import Link from "ui/components/navigation/Link/Link";
import RoundedButton from "ui/components/Inputs/RoundedButton/RoundedButton";
import useIsMobile from 'data/hooks/useIsMobile';
import { useState } from "react";

const Header = () => {
    const isMobile = useIsMobile();
    return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

const HeaderDesktop = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <Link href="/">
                    <HeaderLogo 
                        src={'/img/logos/logo.svg'} 
                        alt={'e-diarista'} 
                    />
                </Link>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                <ButtonsContainer>
                    <Link 
                        href={'/cadastro/diarista'} 
                        Component={RoundedButton} 
                        mui={{color: 'primary', variant:'contained'}}
                    >
                        Seja um(a) diarista
                    </Link>
                    
                    <Link 
                        href={'/login'} 
                        Component={RoundedButton} 
                    >
                        Login
                    </Link>
                </ButtonsContainer>
            </Toolbar>
        </HeaderAppBar>
    );
};

const HeaderMobile = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <IconButton 
                    edge={'start'} 
                    color={'inherit'}
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <i className={'twf-bars'} />
                </IconButton>
                <Link href={'/'}>
                    <HeaderLogo 
                         src={'/img/logos/logo.svg'} 
                         alt={'e-diarista'} 
                    />
                </Link>

                <HeaderDrawer 
                    open={isDrawerOpen} 
                    onClose={() => setIsDrawerOpen(false)}
                    onClick={() => setIsDrawerOpen(false)}
                >
                    <MenuList>
                        <Link href={'/login'} Component={MenuItem}>
                            Login
                        </Link>

                        <Divider />

                        <Link href={'/diarista/cadastro'} Component={MenuItem}>
                            Seja um(a) diarista
                        </Link>
                    </MenuList>
                </HeaderDrawer>

            </Toolbar>
        </HeaderAppBar>
    )
}

export default Header;
