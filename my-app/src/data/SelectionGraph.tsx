import { useState, useEffect } from 'react';
import { usePrefectureList } from '../data/PrefectureListResource';
import * as P from '../types/population';

const prefecturePopulationData = async () => {
    const prefectureData = usePrefectureList();
    const params = prefectureData.map(prefecture =>  prefecture.prefCode).join(',');
    const url = `https://opendata.resas-portal.go.jp/api/v1/population/sum/perYear?cityCode=-&prefCode=${params}`;
    const apiKey = process.env.REACT_APP_API_KEY as string;

    const response = await fetch(url,{headers:{ 'X-API-KEY': apiKey}, mode: 'cors'});
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return ((await response.json()).result) as P.GraphData[]
}

const usePrefectureSelection = () => {
    const [prefectureSelection, setPrefectureSelection] = useState<P.GraphData[]>([]);

    useEffect(() => {
        (async () => {
            const data = await prefecturePopulationData();
            return setPrefectureSelection(data);
        })();
    },[]);
    return prefectureSelection
}

export { usePrefectureSelection }

