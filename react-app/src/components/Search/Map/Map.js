import React, { useState, useMemo, useRef, useCallback  } from 'react'
import { useHistory } from 'react-router-dom';

import { GoogleMap, useLoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api';

import Locations from './Locations';
import './map.css'

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
}) {

    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries,
    });

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
}) => {
    const history = useHistory();
    const center = useMemo(() => (searchLocation), []);

    const options = useMemo(() => ({
        disabledDefault: true,
        clickableIcons: false
    }), []);


    const [selectedMarker, setSelectedMarker] = useState(null)
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
                    console.log("!!!!!!!!!!!!!!!!");
                    console.log(searchLocation)

                    let ne = mapRef.current?.getBounds().getNorthEast();
                    let sw = mapRef.current?.getBounds().getSouthWest();
                    let zoom = mapRef.current?.getZoom();

                    history.push(`neLat=${ne.lat()}&neLng=${ne.lng()}&swLat=${sw.lat()}&swLng=${sw.lng()}`)
                    setAreaParam(`neLat=${ne.lat()}&neLng=${ne.lng()}&swLat=${sw.lat()}&swLng=${sw.lng()}`);
                }} />
            </div>

            <div className='map-container'>
                <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onCenterChanged={trackNewCenter}
                options={options}
            >
                {searchLocation && catchArr&& (
                    <MarkerClusterer>
                        {(clusterer) =>
                        catchArr.map((indivCatch, idx) => (
                            <Marker label={{backgroundColor: 'white', border: '1px solid black', fontWeight: 'bold', fontSize: '18px', text: `${indivCatch.fish} ${indivCatch.weight}(lbs)` }}
                            key={idx} position={{lat: indivCatch.lat, lng: indivCatch.long}} clusterer={clusterer} onClick={() => setSelectedMarker(indivCatch)}>
                                {(selectedMarker && indivCatch.id === selectedMarker.id) ? (
                                        <InfoWindow>
                                            <div>
                                                {indivCatch.fish}
                                            </div>
                                        </InfoWindow>
                                    ) : null}
                            </Marker>
                        ))
                        }

                    </MarkerClusterer>
                    )};


            </GoogleMap>
            </div>
            </div>
        </>
    )
}


export default React.memo(Maps)
