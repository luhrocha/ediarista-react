import { 
    Container,
    IconButton, 
    Link, 
    LinkProps, 
    List, 
    ListItem, 
    Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled('footer')`
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.primary.contrastText};
    padding: ${({theme}) => theme.spacing(4)} 0;
    margin-top: auto;
`;

export const FooterTitle = styled((props) => (
    <Typography variant={'body2'} component={'h2'} {...props} />
))`
    font-weight: bold;
`;

export const FooterListItem = styled((props) => (<ListItem disableGutters {...props}/>))`

`;

export const SocialContainer = styled('div')`
    display: flex;
    flex-direction: column;

    ${({theme}) => theme.breakpoints.down('md')}{
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-between;
    };

    ${({theme}) => theme.breakpoints.down(726)}{
        flex-direction: column;
    }
`;

export const AppList = styled('ul')`
    display: flex;
    gap: ${({theme}) => theme.spacing()};
    list-style-type: none;
    margin: ${({theme}) => theme.spacing(2) + '0' + theme.spacing(3)};
    padding: 0;

    img{
        width: 112px;
    }
`;

export const FooterSocialList = styled(List)`
    display:grid;
    grid-template-columns: repeat(3, 58px);
    grid-gap: ${({theme}) => theme.spacing(1.5)};
`;

export const SocialButton = styled((props:LinkProps) => (<Link {...props} component={IconButton} target={'_blank'} rel={'noopener noreferrer'} />))`
    background-color: ${({theme}) => theme.palette.primary.dark};

    i{
        color: ${({theme}) => theme.palette.primary.contrastText};
    }
`;

export const FooterGrid = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({theme}) => theme.spacing(2)};
    flex-wrap: wrap;
`;