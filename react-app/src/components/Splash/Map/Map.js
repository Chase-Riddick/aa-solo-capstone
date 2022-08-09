import React, { useState, useMemo, useRef, useCallback  } from 'react'
import { useHistory } from 'react-router-dom';

import { GoogleMap, useLoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api';

import SplashLocations from './SplashLocations';
import './map.css'

const libraries = ['places']

function Maps ({apiKey}) {
    const [searchLocation, setSearchLocation] = useState();


    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries,
    });

    if (!isLoaded) return <div></div>

    return (
        <>
            {isLoaded && (
                <Map searchLocation={searchLocation}
                setSearchLocation={setSearchLocation}
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
}) => {
    const history = useHistory();
    const center = useMemo(() => ({lat: 46.5, lng: -122.5}), []);

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

                 <SplashLocations setSearchLocation={(position) => {
                    setSearchLocation(position);
                    mapRef.current?.panTo(position);


                    let ne = mapRef.current?.getBounds().getNorthEast();

                    let sw = mapRef.current?.getBounds().getSouthWest();

                    let zoom = mapRef.current?.getZoom();

                    history.push(`search/neLat=${ne.lat()}&neLng=${ne.lng()}&swLat=${sw.lat()}&swLng=${sw.lng()}`)
                    // setAreaParam(`neLat=${ne.lat()}&neLng=${ne.lng()}&swLat=${sw.lat()}&swLng=${sw.lng()}`);
                }} />
            </div>

        <div className='hidden-map'>
            <GoogleMap
                hidden={true}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onCenterChanged={trackNewCenter}
                options={options}
            />
        </div>
        </>
    )
}


export default React.memo(Maps)
