import { useState, useEffect } from 'react';
import { Prefecture } from '../types/global';

const fetchPrefectureListData　= async () => {
    
    const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
    const apiKey = process.env.API_KEY as string

    const response = await fetch(url,{headers:{apiKey}, mode: 'cors'});
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
