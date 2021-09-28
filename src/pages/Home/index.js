import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
import useAPI from '../../helpers/OlxAPI';

import search from '../../components/images/search.svg';
import arrow from '../../components/images/arrow.svg';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

const Page = () => {
    const api = useAPI();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);
    
    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <h2>O que você anda procurando?</h2> 
                    <p>Em poucos cliques, encontre o que deseja</p>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                            {stateList.map((i, k) => <option key={k} value={i.name}>{i.name}</option>)}
                            </select>
                            <button><img src={search} alt="Pesquisar" />Pesquisar</button>
                        </form>
                    
                        <div className="categoryDiv">
                            <h6>Categorias</h6>
                            <div className="categoryList">
                                {categories.map((i, k) => 
                                    <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                        <img src={i.img} alt="" />
                                        <span>{i.name}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i, k) => 
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <div className="linkArea">
                        <Link to="/ads" className="seeAllLink">Ver todos<img src={arrow} alt="Ver todos" /></Link>
                    </div>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;