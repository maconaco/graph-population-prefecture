import { useState, useEffect } from 'react';
import { Prefecture } from '../types/global';

const fetchPrefectureListData　= async () => {
    
    const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
    const apiKey = process.env.REACT_APP_API_KEY as string
    console.log(apiKey)

    const response = await fetch(url,{headers:{ 'X-API-KEY': apiKey}, mode: 'cors'});
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return (await response.json()).result as Prefecture[]
};

const usePrefectureList = () => {
    const [prefectureList, setPrefectureList ] = useState<Prefecture[]>([]);

    useEffect(() => {
        (async () => {
            const data = await fetchPrefectureListData();
            return setPrefectureList(data);
        })();
    }, []);
    return prefectureList
}

export { usePrefectureList }
