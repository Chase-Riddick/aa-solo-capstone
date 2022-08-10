import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Maps from "./Map/Map"
import DisplayCatchesCollection from "../DisplayCatchesCollection"
import Filter from "./Filter";
import './search.css'
import { getAreaCatches } from "../../utils";
import { useLanguageContext } from "../../context/LanguageContext";

export default function SearchPage () {
    const history = useHistory();
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const [selectedMarker, setSelectedMarker ] = useState(null);
    const [catchArr, setCatchArr ] = useState([]);
    const [catchLatLngArr, setCatchLatLngArr ] = useState();
    const [fishQuery, setFishQuery] = useState("");
    const [minWeight, setWeightMin] = useState('0');
    const [maxWeight, setWeightMax] = useState('500');
    const [minLength, setLengthMin] = useState('2');
    const [maxLength, setLengthMax ] = useState('240');

    const { searchParam}  = useParams();
    let paramCheckRes;

    const calcSearchLatLng = (location) => {
        if (!location.includes('neLat=')) {

            return false
        }

        if (!location.includes('&neLng=')) {

            return false
        }

        if (!location.includes('&swLat=')) {

            return false
        }

        if (!location.includes('&swLng=')) {

            return false
        }
        let locationSplit;

        try {
        locationSplit = location.split("&");
        } catch {

            return false
        }

        let neLat;
        try {
        neLat = parseFloat(locationSplit[0].split('=')[1])
        } catch {

            return false
        }

        let neLng;
        try {
        neLng = parseFloat(locationSplit[1].split('=')[1])
        } catch {
            return false
        }
        let swLat;
        try {
        swLat = parseFloat(locationSplit[2].split('=')[1])
        } catch {
            return false
        }

        let swLng;
        try {
        swLng = parseFloat(locationSplit[3].split('=')[1])
        } catch {
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
        history.push('/notfound')

    }

    const key = useSelector(state => state.map.mapAPIKey)
    const catches = Object.values(useSelector(state => state.catches));
    const [ searchLocation, setSearchLocation ] = useState(paramCheckRes? calcSearchLatLng(searchParam) : {lat: 46.53764570767742, lng: -122.26653010444315});
    const [ areaParam, setAreaParam ] = useState(searchParam);


    useEffect(() => {

        if (areaParam) {

            let res;
            try {
            res = getAreaCatches(areaParam, catches);
            setCatchLatLngArr(res[0]);
            setCatchArr(res[1].filter(indivCatch => indivCatch.fish.toLowerCase().includes(fishQuery.toLowerCase()))
            .filter(indivCatch => indivCatch.weight >= minWeight.toString() && indivCatch.weight <= maxWeight.toString())
            .filter(indivCatch => indivCatch.length >= minLength.toString() && indivCatch.length <= maxLength.toString())
            );
            // } else {
            //     setCatchArr(res[1]);
            // }
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
    }, [areaParam, searchParam, fishQuery, minWeight, maxWeight, minLength, maxLength])



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
                setSelectedMarker={setSelectedMarker}
                selectedMarker={selectedMarker}
                />
        </div>
        <div className="search-page-right">
        <div className="transistion-bar">aa</div>
        <div className="section-title">{language && language === 'English' ? English.RecentCatchesLocality : Chinese.RecentCatchesLocality}:</div>
        <Filter
        fishQuery={fishQuery}
        setFishQuery={setFishQuery}
        minWeight={minWeight}
        setWeightMin={setWeightMin}
        maxWeight={maxWeight}
        setWeightMax={setWeightMax}
        minLength={minLength}
        setLengthMin={setLengthMin}
        maxLength={maxLength}
        setLengthMax={setLengthMax} />
        {catchArr.length >= 1 &&
        <DisplayCatchesCollection setSelectedMarker={setSelectedMarker} selectedMarker={selectedMarker} catches={catchArr} page={'search'} className="search-results" />
        }
        {catchArr.length < 1 &&
        <div className="no-results">{language && language === 'English' ? English.NoResults : Chinese.NoResults}</div>
        }
        </div>
        </div>
    )
}