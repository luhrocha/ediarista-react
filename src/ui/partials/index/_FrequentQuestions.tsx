import { AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import { useState } from "react";
import { AccordionStyled, SectionContainer, SectionSubtitle, SectionTitle, Wave } from "./_FrequentQuestions.styled";

const FrequentQuestions = () => {
    
    const questionsList = [
        {
            question: 'Dúvida 01',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dicta ipsum odio, sunt ullam sit dolor autem? Velit, deserunt? Quaerat et ut ipsa distinctio blanditiis voluptatem nostrum dolore. Dolorem, eos?'
        },
        {
            question: 'Dúvida 02',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dicta ipsum odio, sunt ullam sit dolor autem? Velit, deserunt? Quaerat et ut ipsa distinctio'
        },
        {
            question: 'Dúvida 03',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dicta ipsum odio, sunt ullam sit dolor autem? Velit, deserunt? Quaerat et ut ipsa distinctio blanditiis voluptatem nostrum dolore. Dolorem, eos?'
        },{
            question: 'Dúvida 04',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dicta ipsum odio, sunt ullam sit dolor autem? Velit, deserunt? Quaerat et ut ipsa distinctio blanditiis voluptatem nostrum dolore. Dolorem, eos?'
        }
    ];

    const [activeAccordion, setActiveAccordion] = useState(0);

    function isOpen(accordionNumber: number):boolean{
        return activeAccordion === accordionNumber;
    }

    function changeOpenAccordion(accordionNumber: number){
        if(isOpen(accordionNumber)){
            setActiveAccordion(0);
        }else{
            setActiveAccordion(accordionNumber);
        }
    }

    function getIcon(accordionNumber: number){
        return isOpen(accordionNumber) ? 'twf-minus' : 'twf-plus';
    }

    return (
        <SectionContainer>
            <Wave src="/img/home/waves.svg"/>
            <Container>
                <SectionTitle>Ainda está com dúvidas?</SectionTitle>
                <SectionSubtitle>
                    Veja abaixo as perguntas frequentes
                </SectionSubtitle>

                {questionsList.map((item, index) => (
                    <AccordionStyled key={index} 
                        expanded={isOpen(index + 1)}
                        onChange={() => changeOpenAccordion(index + 1)}
                    >
                        <AccordionSummary expandIcon={
                            <i className={getIcon(index + 1)} />
                        }>
                            <Typography color={'primary'}>
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.answer}
                        </AccordionDetails>
                    </AccordionStyled>   
                ))}                            
            </Container>
        </SectionContainer>        
    );
}

export default FrequentQuestions;