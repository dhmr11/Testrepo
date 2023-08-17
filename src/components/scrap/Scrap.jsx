import * as S from './styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Scrap_black from '../../components/image/scrap_black.svg';
import Scrap_white from '../../components/image/scrap_white.svg';

export default function Scrap() {
    const [scrap, setScrap] = useState([]);
    const [scrapStates, setScrapStates] = useState({}); // State to track Scrap state

    useEffect(() => {
        fetchScrap();
    }, []);

    const fetchScrap = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/scraps", {
                withCredentials: true,
            });
            console.log("Review submitted successfully:", response.data);

            setSubmitting(false); // 제출 완료 후 상태 업데이트
            setStarmodalOpen(false); // 모달 창 닫기
            onClose();
        } catch (error) {
            console.error("Error submitting review:", error);
            setSubmitting(false); // 에러 발생 시 상태 업데이트
        }
    }

    const initializeScrapStates = (scrapData) => {
        const initialStates = {};
        scrapData.forEach((scrapItem, index) => {
            initialStates[index] = false;
        });
        setScrapStates(initialStates);
    }

    const unscrap = async (store_id) => {
        try {
            await axios.post(`http://127.0.0.1:8000/api/store/${store_id}/unscrap`, store_id, {
                withCredentials: true,
            });
            fetchScrap(); // Refresh the list after unscrapping
        } catch (error) {
            console.log("Error unscrapping:", error);
        }
    }

    const toggleScrapState = async (index, storeId) => {
        if (scrapStates[index]) {
            unscrap(storeId);
        } else {
            setScrapStates(prevStates => ({
                ...prevStates,
                [index]: !prevStates[index]
            }));
        }
    }

    return (
        <>
            <S.Scrap_Container>
                {scrap.map((scrapItem, index) => (
                    !scrapStates[index] && (
                        <S.Scrap_Item key={index}>
                            <S.Scrap>
                                <div className="scrap-item-container">
                                    <img
                                        src={`http://127.0.0.1:8000${scrapItem.images.image}`}
                                        width={"200px"}
                                        height={"200px"}
                                        alt={`Scrap Image`}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                                <img
                                    src={scrapStates[index] ? Scrap_white : Scrap_black}
                                    alt="Scrap Toggle"
                                    className="scrap-black-image"
                                    onClick={() => unscrap(scrapItem.store_id)}
                                />
                                <S.Scrap_Title>{scrapItem.name}</S.Scrap_Title>
                                <S.Scrap_Address>{scrapItem.road_address}</S.Scrap_Address>
                                <S.Scrap_Time>{scrapItem.operation_time}</S.Scrap_Time>
                                <S.Scrap_Rating>평점 {scrapItem.ratings}</S.Scrap_Rating>
                                <S.Scrap_Rating>전화 {scrapItem.store_num}</S.Scrap_Rating>
                            </S.Scrap>
                        </S.Scrap_Item>
                    )
                ))}
            </S.Scrap_Container>
        </>
    )
}
