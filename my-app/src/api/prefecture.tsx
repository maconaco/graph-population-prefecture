import React, { useState, useEffect } from 'react';

function PrefectureData() {
    const [state, setPrefecture] = useState(0);

    useEffect( () => {
        (async () => {
            const prefecture = await fetch(	'https://opendata.resas-portal.go.jp',
            {
                headers: { apiKey: process.env.API_KEY}
            }
            )
            const res = await prefecture.json();
        })();},[]);

    return (
        <div>
            <p>You clicked {state} times</p>
            <button onClick={() => setPrefecture(state)}>
                Click me
            </button>
        </div>
    );
}