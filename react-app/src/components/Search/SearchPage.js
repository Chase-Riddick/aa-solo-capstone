import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import Maps from "./Map/Map"
import DisplayCatchesCollection from "../DisplayCatchesCollection"
import './search.css'
import { getAreaCatches } from "../../utils";

export default function SearchPage () {
    const key = useSelector(state => state.map.mapAPIKey)
    const catches = Object.values(useSelector(state => state.catches));
    const [ searchLocation, setSearchLocation ] = useState();
    const [ areaParam, setAreaParam ] = useState('');
    const [ catchArr, setCatchArr ] = useState(catches ? catches : []);
    const [ catchLatLngArr, setCatchLatLngArr ] = useState();


    useEffect(() => {
        console.log('^^^^^^^^^^^^^^^^^')
        if (areaParam) {
            console.log(areaParam);
            let res = getAreaCatches(areaParam, catches);
            setCatchLatLngArr(res[0]);
            setCatchArr(res[1]);
        };
    }, [areaParam])

    if ( catchLatLngArr) {
        console.log(catchLatLngArr)
    }

    if (searchLocation) {
        console.log(searchLocation)
    }

    if (!key) return null

    return (
        <div className="search-page">
        <div className="map-element">
            <Maps apiKey={key}
                searchLocation={searchLocation}
                setSearchLocation={setSearchLocation}
                areaParam={areaParam}
                setAreaParam={setAreaParam}
                catchArr={catchArr}
                setCatchArr={setCatchArr}
                catchLatLngArr={catchLatLngArr}
                setCatchLatLngArr={setCatchLatLngArr}
                />
        </div>
        <DisplayCatchesCollection catches={catchArr} className="search-results" />
        </div>
    )
}