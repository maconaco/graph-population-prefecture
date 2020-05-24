import React from 'react';
import { usePrefectureList } from '../data/PrefectureListResource'

const PrefectureCheckBox: React.FC = () => {  
    const prefectureListData = usePrefectureList();
    console.log(prefectureListData)
    return (
        <div style={{width: '720px', margin: '20px auto'}}>
            {prefectureListData.map ( prefecture => 
                <label className="PrefectureName" style={{marginLeft: '8px'}}> {prefecture.prefName}
                    <input type="checkbox" value={prefecture.prefName} />
                </label>
                )
            }
        </div>
    )
} 

export { PrefectureCheckBox }
