import { useState } from 'react';
import { useLanguageContext } from "../../context/LanguageContext";
import './filter.css'

export default function Filter ({
    fishQuery,
    setFishQuery,
    minWeight,
    setWeightMin,
    maxWeight,
    setWeightMax,
    minLength,
    setLengthMin,
    maxLength,
    setLengthMax }) {

        const [arrowTurned, setArrowTurned] = useState(false);
        const { language, setLanguage, English, Chinese } = useLanguageContext();
        const updateFishQuery = (e) => setFishQuery(e.target.value);


        // FUNCTION THAT TURNS AN ARROW 90 DEGREES OnClick
        const turnArrow = () => {
        if (arrowTurned) {
           return setArrowTurned(false);
        } else {
           return setArrowTurned(true);
        }
    }

    return (
        <>
        <div className="filters-heading">Filters
        <i className={arrowTurned ? "fa-solid fa-caret-right nb-th-arrow-right arrow-right-turned" : "fa-solid fa-caret-right nb-th-arrow-right"} onClick={() => turnArrow()}></i>
        </div>
        {arrowTurned &&
        <div className="filter-bar">

        <div className="filter-param-container">
        <div className='filter-container-heading'>{language && language === 'English' ? English.TypeOfFish : Chinese.TypeOfFish}</div>
        <input className="filter-search-bar" value={fishQuery} onChange={updateFishQuery} placeholder={language && language === 'English' ? English.FishQuery : Chinese.FishQuery}></input>
        </div>
        <div className="filter-param-container">
            <div className='filter-container-heading'>{language && language === 'English' ? English.Weight : Chinese.Weight}</div>
            <div className='min-max-container'>
            <div className="filterbar-label">
                <div>{language && language === 'English' ? English.Min : Chinese.Min}</div>
                <select
                    value={minWeight}
                    onChange={(e) => setWeightMin(parseInt(e.target.value, 10))}
                >
                    <option value="0">0</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                </select>
            </div>
            <div className="filterbar-label">
                <div>{language && language === 'English' ? English.Max : Chinese.Max}</div>
                <select
                    value={maxWeight}
                    onChange={(e) => setWeightMax(parseInt(e.target.value, 10))}
                    // defaultValue={}
                >
                    <option value="5555555" selected>Any Weight</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="600">500</option>

                </select>
            </div>
            </div>
        </div>
        <div className="filter-param-container">
            <div className='filter-container-heading'>{language && language === 'English' ? English.Length : Chinese.Length}</div>
            <div className='min-max-container'>
            <div className="filterbar-label">
               <div>{language && language === 'English' ? English.Min : Chinese.Min}</div>
                <select
                    value={minLength}
                    onChange={(e) => setLengthMin(parseInt(e.target.value, 10))}
                >
                    <option value="0">0</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="96">96</option>
                    <option value="150">150</option>

                </select>
            </div>
            <div className="filterbar-label">
                <div>{language && language === 'English' ? English.Max : Chinese.Max}</div>
                <select
                    value={maxLength}
                    onChange={(e) => setLengthMax(parseInt(e.target.value, 10))}
                >
                    <option value="99999999999" selected>Any Length</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="96">96</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                </select>
            </div>
            </div>
        </div>
    </div>
    }
    </>
    )
}