import React, { useState } from 'react';
import { PageArea } from './styled';
import useAPI from '../../helpers/OlxAPI';
import { doLogIn } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');

        const json = await api.login(email, password);

        if(json.error){
            setError(json.error);
        } else{
            doLogIn(json.token, rememberPassword);
            window.location.href = '/';
        }

        setDisable(false);
    }

    return (
        <PageContainer>
            <PageTitle>Conectar</PageTitle>
            <PageArea>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">
                            E-mail
                        </div>
                        <div className="area--input">
                            <input type="email" disabled={disable} value={email} onChange={e=>setEmail(e.target.value)} required></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            Senha
                        </div>
                        <div className="area--input">
                            <input type="password" disabled={disable} value={password} onChange={e=>setPassword(e.target.value)} required></input>
                        </div>
                    </label>
                    <label className="area--chk_box">
                        <div className="area--input">
                            <input type="checkbox" disabled={disable} checked={rememberPassword} onChange={()=>setRememberPassword(!rememberPassword)}></input>
                            Lembrar Senha
                        </div> 
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disable}>Conectar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;