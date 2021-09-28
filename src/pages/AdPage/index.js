/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { PageArea, Fake, OthersArea, BreadCrumb } from './styled';
import { Slide } from 'react-slideshow-image';
import useAPI from '../../helpers/OlxAPI';
import 'react-slideshow-image/dist/styles.css';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

const Page = () => {
    const api = useAPI();
    const { id } = useParams();
    
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) =>{
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, []);

    const formatDate = (date) => {
        let cDate = new Date(date);

        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return (
        <PageContainer>
            {adInfo.category &&
                <BreadCrumb>
                    Você está aqui:
                    <Link to="/">Home</Link>
                    &gt;
                    <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                    &gt;
                    <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.name}`}>{adInfo.category.name}</Link>
                    &gt; 
                    <span>{adInfo.title}</span>
                </BreadCrumb>
            }
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={30}/>}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img, k) =>
                                        <div key={k} className="each-slide">
                                            <img src={img} alt="" />
                                        </div>    
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="ad-Info">
                            <div className="adName">
                                {loading && <Fake height={2}/>}
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={10}/>}
                                {adInfo.description}
                                <hr></hr>
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={2}/>}
                        {adInfo.priceNegotiable &&
                            "Preço Negociável"
                        }
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price">
                                Preço: <span>R$: {adInfo.price}</span>
                            </div>
                        }
                    </div>
                    {loading && <Fake height={5}/>}
                    {adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contactSellerLink">Fale com o vendedor</a>
                            <div className="createdBy box box--padding">
                                Vendedor: <strong>{adInfo.userInfo.name}</strong>
                                <small>E-mail: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.stateName}</small>
                            </div>
                        </>
                    }
                </div>
            </PageArea>
            <OthersArea>
                {adInfo.others &&
                    <>
                        <h2>Outras ofertas do vendedor</h2>
                        <div className="list">
                            {adInfo.others.map((i, k) =>
                                <AdItem key={k} data={i} />
                            )}
                        </div>
                    </>
                }
            </OthersArea>
        </PageContainer>
    );
}

export default Page;