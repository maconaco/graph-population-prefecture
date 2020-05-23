import { useState, useEffect } from 'react';

type Prefecture = {
    prefCode: number,
    prefName: string,
}

const [statePrefecture, setPrefectureList ] = useState<Prefecture>();

const fetchData = async () => {
    const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
    const apiKey = process.env.API_KEY

    const response = await fetch(url,{headers:{apiKey}});
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    setPrefectureList((await response.json()).result)
};


const PrefectureListResourceView = () => {
    useEffect(() => {
    　　 (async () => {
            await fetchData()
        })();
    }, []);
    return statePrefecture;
};

export { PrefectureListResourceView }
