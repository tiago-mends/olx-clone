import React from 'react';
import { Link } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer } from '../../components/MainComponents';

const Page = () => {
    return(
        <PageContainer>
            <PageArea>
                <h2>404 - Página não encontrada</h2>
                <p>Oops, a página procurada parece que não existe</p>
                <div>
                    <Link to="/">Voltar para a página inicial</Link>
                </div>
            </PageArea>
        </PageContainer>
);
}

export default Page;

