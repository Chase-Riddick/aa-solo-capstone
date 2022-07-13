import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Maps from "./Map/Map"
import DisplayCatchesCollection from "../DisplayCatchesCollection"
import './search.css'
import { getAreaCatches } from "../../utils";

export default function SearchPage () {

    const { searchParam}  = useParams();

    const calcSearchLatLng = (location) => {
        let locationSplit = location.split("&");
        console.log(locationSplit)
        let neLat = parseFloat(locationSplit[0].split('=')[1])

        console.log(neLat)
        let neLng = parseFloat(locationSplit[1].split('=')[1])

        console.log(neLng)
        let swLat = parseFloat(locationSplit[2].split('=')[1])

        console.log(swLat)
        let swLng = parseFloat(locationSplit[3].split('=')[1])

        let lat = (neLat + swLat) / 2
        let lng = (neLng + swLng) / 2
        console.log({lat: lat, lng: lng})
        return {lat: lat, lng: lng}
    }

    calcSearchLatLng(searchParam)

    const key = useSelector(state => state.map.mapAPIKey)
    const catches = Object.values(useSelector(state => state.catches));
    const [ searchLocation, setSearchLocation ] = useState(calcSearchLatLng(searchParam));
    const [ areaParam, setAreaParam ] = useState(searchParam);
    console.log(areaParam)
    const [ catchArr, setCatchArr ] = useState([]);
    const [ catchLatLngArr, setCatchLatLngArr ] = useState();


    useEffect(() => {
        console.log('^^^^^^^^^^^^^^^^^')
        if (areaParam) {
            console.log(areaParam);
            let res = getAreaCatches(areaParam, catches);
            setCatchLatLngArr(res[0]);
            setCatchArr(res[1]);
        };
    }, [areaParam, searchParam])


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