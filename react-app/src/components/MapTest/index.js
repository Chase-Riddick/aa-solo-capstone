import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadScript }from "@react-google-maps/api";

import Map from "./Map"
import { getMapAPIKey } from "../../store/map";

export default function Home ()  {
    const dispatch = useDispatch();
    // const key = useSelector(state => state.map)
    // const mapAPIKey = useSelector(state => state.map)
    // googleMapsApiKey: mapAPIKey?.mapAPIKey,
    // id: 'google-map-script',
    //libraries: ["places"]
     const { isLoaded } = useLoadScript({
        // googleMapsApiKey: ,
        });

    //  useEffect(() => {
    //     dispatch(getMapAPIKey());
    //   }, [dispatch]);

    //   if (!mapAPIKey) {
    //     return null;
    //   }

    return (
        <div>
            {/* {isLoaded && (
                <h3>Map Home Component</h3>
            )} */}

        </div>
    )
}