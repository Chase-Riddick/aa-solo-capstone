import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getKey } from

import { useLoadScript } from "@react-google-maps/api"
import Map from "./Map"

export default function Home ()  {
    const { isLoaded } = useLoadScript(
        {googleMapsApiKey: "AIzaSyBJfQUfetiFlIWMxEuXalSMUtkkghhJspE"},
    );

    return (
        <div>
        <h3>Map Home Component</h3>
        </div>
    )
}