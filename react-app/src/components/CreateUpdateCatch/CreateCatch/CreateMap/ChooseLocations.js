import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete'

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import './map.css'

export default function ChooseLocations ({ searchLocation, setSearchLocation, setPlaceName }) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete()

    const handleSelect = async (address) => {
        setValue(address, false)
        setPlaceName(address)
        clearSuggestions()
        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        setSearchLocation({ lat, lng })
        const zoom = 10
    }

    return (
        <>
            <Combobox onSelect={handleSelect}>
            <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label location'>Location </h5>
      <p className='required'>*</p>
      </div>
                <div className='image-input-line'>
                {/* <div className='search-icon'><i className="fa-solid fa-magnifying-glass-location search-bar-icon"></i></div> */}

                <ComboboxInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={!ready}
                    className='combobox-search-input'
                    placeholder='Choose a Location'
                />
                {searchLocation &&
                <i className="fa-solid fa-circle-check"></i>
                }
                </div>
                </div>
                <ComboboxPopover>
                    <ComboboxList>
                    {status === 'OK' &&
                    data?.map(({ place_id, description }) => (
                        <ComboboxOption
                            key={place_id}
                            value={description}
                        />
                    ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </>
    )
}
