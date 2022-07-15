import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Maps from "./Map/Map"
import DisplayCatchesCollection from "../DisplayCatchesCollection"
import './search.css'
import { getAreaCatches } from "../../utils";

export default function SearchPage () {
    const history = useHistory();

    const { searchParam}  = useParams();
    let paramCheckRes;

    const calcSearchLatLng = (location) => {
        if (!location.includes('neLat=')) {
            console.log('---------1---------')
            return false
        }

        if (!location.includes('&neLng=')) {
            console.log('---------2---------')
            return false
        }

        if (!location.includes('&swLat=')) {
            console.log('---------3---------')
            return false
        }

        if (!location.includes('&swLng=')) {
            console.log('---------4---------')
            return false
        }
        let locationSplit;

        try {
        locationSplit = location.split("&");
        } catch {
            console.log('---------5---------')
            return false
        }

        let neLat;
        try {
        neLat = parseFloat(locationSplit[0].split('=')[1])
        } catch {
            console.log('---------6---------')
            return false
        }

        let neLng;
        try {
        neLng = parseFloat(locationSplit[1].split('=')[1])
        } catch {
            console.log('---------7---------')
            return false
        }
        let swLat;
        try {
        swLat = parseFloat(locationSplit[2].split('=')[1])
        } catch {
            console.log('---------8---------')
            return false
        }

        let swLng;
        try {
        swLng = parseFloat(locationSplit[3].split('=')[1])
        } catch {
            console.log('---------9---------')
            return false
        }

        let lat = (neLat + swLat) / 2
        let lng = (neLng + swLng) / 2
        return {lat: lat, lng: lng}
    }
    // validateQuery(searchParam)
    if (calcSearchLatLng(searchParam)) {
        paramCheckRes = true;
    } else {
        console.log('this happened')
        history.push('/notfound')

    }

    const key = useSelector(state => state.map.mapAPIKey)
    const catches = Object.values(useSelector(state => state.catches));
    const [ searchLocation, setSearchLocation ] = useState(paramCheckRes? calcSearchLatLng(searchParam) : {lat: 46.53764570767742, lng: -122.26653010444315});
    const [ areaParam, setAreaParam ] = useState(searchParam);
    console.log(areaParam)
    const [ catchArr, setCatchArr ] = useState([]);
    const [ catchLatLngArr, setCatchLatLngArr ] = useState();


    useEffect(() => {
        console.log('^^^^^^^^^^^^^^^^^')
        if (areaParam) {
            console.log(areaParam);
            let res;
            try {
            res = getAreaCatches(areaParam, catches);
            setCatchLatLngArr(res[0]);
            setCatchArr(res[1]);
            } catch (e) {
                history.push('/notfound')
            }
            // try {
            //     setCatchLatLngArr(res[0]);
            // } catch (e) {
            //     history.push('/')
            // }
            // // setCatchLatLngArr(res[0]);
            // setCatchArr(res[1]);
        };
    }, [areaParam, searchParam])

    console.log('--------------------------------------------------------------------------------')
    console.log(catchArr)

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
        <div className="search-page-right">
        <div className="transistion-bar">aa</div>
        <div className="section-title">Recent Catches in Locality:</div>
        {catchArr.length >= 1 &&
        <DisplayCatchesCollection catches={catchArr} page={'search'} className="search-results" />
        }
        {catchArr.length < 1 &&
        <div className="no-results">Sadly, no one is sharing their catches here. Why not be the first?</div>
        }
        </div>
        </div>
    )
}