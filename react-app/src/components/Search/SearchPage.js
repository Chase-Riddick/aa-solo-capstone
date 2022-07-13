
import DisplayCatchesCollection from "../DisplayCatchesCollection"
import Maps from "../MapTest"
import './search.css'

export default function SearchPage () {
    return (
        <div className="search-page">
        <div className="map-element">
            <Maps className="map-element"/>
        </div>
        <DisplayCatchesCollection className="search-results" />
        </div>
    )
}