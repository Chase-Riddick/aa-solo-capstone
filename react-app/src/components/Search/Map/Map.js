import React, { useState, useMemo, useRef, useCallback, useEffect  } from 'react'
import { useHistory } from 'react-router-dom';

import { GoogleMap, useLoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api';

import DisplayIndivCatchModal from '../../DisplayIndivCatch/IndivCatchModal';
import MapDisplayCard from '../../CreateUpdateCatch/CreateCatch/CreateMap/MapDisplayCard';
import Locations from './Locations';
import './map.css'

import { useLanguageContext } from '../../../context/LanguageContext';






const libraries = ['places']

function Maps ({
         apiKey,
         searchLocation,
         setSearchLocation,
         areaParam,
         setAreaParam,
         catchArr,
         setCatchArr,
         catchLatLngArr,
         setCatchLatLngArr,
         selectedMarker,
         setSelectedMarker,
}) {
    // const { language} = useLanguageContext();
    // const languageAbr = language === 'Chinese' ? 'zh' : 'en';

    const { isLoaded } = useLoadScript({
        // language: languageAbr,
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries,
    });

    // useEffect(() => {
    //     const rerenderOnLangChange = () => {
    //     let newLoad = useLoadScript({
    //         language: languageAbr,
    //         id: 'google-map-script',
    //         googleMapsApiKey: apiKey,
    //         libraries,
    //     })
    //     isLoaded = {newLoad};}
    //     rerenderOnLangChange();
    // }, [language])

    if (!isLoaded) return <div>Map is loading...</div>

    return (
        <>
            {isLoaded && (
                <Map searchLocation={searchLocation}
                setSearchLocation={setSearchLocation}
                areaParam={areaParam}
                setAreaParam={setAreaParam}
                catchArr={catchArr}
                setCatchArr={setCatchArr}
                catchLatLngArr={catchLatLngArr}
                setCatchLatLngArr={setCatchLatLngArr}
                selectedMarker={selectedMarker}
                setSelectedMarker={setSelectedMarker}
                />

            )}
        </>
    )
}

const containerStyle = {
    width: '100%',
    height: '100%',
}

const Map = ({
        searchLocation,
        setSearchLocation,
        areaParam,
        setAreaParam,
        catchArr,
        setCatchArr,
        catchLatLngArr,
        setCatchLatLngArr,
        setSelectedMarker,
        selectedMarker,
}) => {
    const history = useHistory();
    const center = useMemo(() => (searchLocation), []);

    const options = useMemo(() => ({
        disabledDefault: true,
        clickableIcons: false
    }), []);


    // const [selectedMarker, setSelectedMarker] = useState(null)
    const mapRef = useRef();
    const onLoad = useCallback(map => (mapRef.current = map), [])

    const trackNewCenter = async () => {
        const lat = mapRef.current?.getCenter().lat()
        const lng = mapRef.current?.getCenter().lng()
        const zoom = mapRef.current?.getZoom()


    }

    return (
        <>
            <div>

                 <Locations setSearchLocation={(position) => {
                    setSearchLocation(position);
                    mapRef.current?.panTo(position);


                    let ne = mapRef.current?.getBounds().getNorthEast();
                    let sw = mapRef.current?.getBounds().getSouthWest();
                    let zoom = mapRef.current?.getZoom();

                    history.push(`neLat=${ne.lat()}&neLng=${ne.lng()}&swLat=${sw.lat()}&swLng=${sw.lng()}`)
                    setAreaParam(`neLat=${ne.lat()}&neLng=${ne.lng()}&swLat=${sw.lat()}&swLng=${sw.lng()}`);
                }} />
            </div>

            <div className='map-container'>
                {/* <div className='map'> */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onCenterChanged={trackNewCenter}
                options={options}
            >
                {searchLocation && catchArr && (
                    <MarkerClusterer>
                        {(clusterer) =>
                        catchArr.map((indivCatch, idx) => (
                            <Marker
                            // label={{fontFamily: 'Work', backgroundColor: 'white', border: '1px solid black', fontWeight: 'bold', fontSize: '18px', text: `${indivCatch.fish} - ${indivCatch.weight}(lbs)` }}
                            className={indivCatch.id === selectedMarker ? "chosen-marker" : ""}
                            // icon={{
                            //     backgroundColor: "#0000ff",
                            //     fillColor: "#0000ff",
                            //     strokeColor: "0000ff",
                            // }}
                            // color={"orange"}
                            icon={indivCatch.id === selectedMarker ? {url: "http://maps.google.com/mapfiles/ms/micons/red-dot.png"} : {url: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png"}}
                            key={idx} position={{lat: indivCatch.lat, lng: indivCatch.long}} clusterer={clusterer} onClick={() => setSelectedMarker(indivCatch.id)}>
                                {/* {(selectedMarker && indivCatch.id === selectedMarker.id) ? (
                                        <InfoWindow>
                                            <MapDisplayCard indivCatch={indivCatch}/>
                                        </InfoWindow>
                                    ) : null} */}
                            </Marker>
                        ))
                        }

                    </MarkerClusterer>
                    )};


            </GoogleMap>
            {/* </div> */}
            </div>
        </>
    )
}


export default React.memo(Maps)
