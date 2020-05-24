import React from 'react';
import { usePrefectureList } from '../data/PrefectureListResource'

const PrefectureCheckBox: React.FC = () => {  
    const prefectureListData = usePrefectureList();
    console.log(prefectureListData)
    return (
        <>
            <div>
                {prefectureListData.map ( prefecture => 
                    <input type="checkbox" checked={true} value={prefecture.prefName}/>
                    )
                }
            </div>
        </>
    )
} 

export { PrefectureCheckBox }
