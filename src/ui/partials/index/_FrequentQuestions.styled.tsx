import { Accordion } from "@mui/material";
import { styled } from "@mui/system";
import theme from "ui/themes/light-theme";

export const SectionContainer = styled('section')`
    padding-bottom: ${({theme}) => theme.spacing(7)};
`;

export const Wave = styled('img')`
    width: 100%;
    height:100px;
    margin-top: -100px;
`;

export const SectionTitle = styled('h2')`
    margin: 0;
    text-align: center;
`;

export const SectionSubtitle = styled('p')`
    position: relative;
    margin: ${({theme}) => theme.spacing(2) + ' 0 ' + theme.spacing(10)};
    text-align: center;

    &::after{
        position: absolute;
        content: ' ';
        width: 96px;
        height: 3px;
        background-color: ${({theme}) => theme.palette.grey[300]};
        bottom: ${({theme}) => theme.spacing(-5)};
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const AccordionStyled = styled(Accordion)`
    &.MuiAccordion-root{
        box-shadow: none;
        border: 2px solid ${({theme}) => theme.palette.primary.main};
            
        &::before{
            background-color: transparent;
        }

        &, &.Mui-expanded{
            margin: -2px 0 0;
        }
    }

    .MuiAccordionSummary-content .MuiTypography-root{
        font-weight: bold;
    }

    .MuiAccordionSummary-expandIconWrapper{
        color: ${({theme}) => theme.palette.text.secondary};
    }

    .MuiAccordionDetails-root{
        padding-right: ${({theme}) => theme.spacing(7)};
    }    
`;