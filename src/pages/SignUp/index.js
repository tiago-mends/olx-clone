import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import useAPI from '../../helpers/OlxAPI';
import { doLogIn } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateList, setStateList] = useState([]);

    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            console.log(sList);
            setStateList(sList);
        }
        getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');

        if(password !== confirmPassword){
            setError('As senhas digitadas não são iguais');
            return;
        }
        const json = await api.register(name, email, password, stateLoc);

        if(json.error){
            setError(json.error);
        } else{
            doLogIn(json.token);
            window.location.href = '/';
        }

        setDisable(false);
    }

    return (
        <PageContainer>
            <PageTitle>Cadastrar</PageTitle>
            <PageArea>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <form onSubmit={handleSubmit}>
                <label className="area">
                        <div className="area--title">
                            Nome Completo
                        </div>
                        <div className="area--input">
                            <input type="text" disabled={disable} value={name} onChange={e=>setName(e.target.value)} required></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            Estado
                        </div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map(
                                    (i, k) => <option key={k} value={i._id}>{i.name}</option>)}
                            </select>
                        </div>
                    </label>
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
                    <label className="area">
                        <div className="area--title">
                            Confirmar Senha
                        </div>
                        <div className="area--input">
                            <input type="password" disabled={disable} value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disable}>Cadastrar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;