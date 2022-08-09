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

import { useLanguageContext } from '../../../context/LanguageContext';

import "@reach/combobox/styles.css";
import './map.css'
import './searchbar.css'

export default function SplashLocations ({ setSearchLocation }) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete()

    const { language, setLanguage, English, Chinese } = useLanguageContext();


    const handleSelect = async (address) => {

        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode({ address })

        const { lat, lng } = await getLatLng(results[0])

        setSearchLocation({ lat, lng })
        const zoom = 10
    }

    return (
        <>
            <Combobox onSelect={handleSelect}>
                <div className='search-div'><div className='search-icon'><i class="fa-solid fa-magnifying-glass-location"></i></div>
                <ComboboxInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={!ready}
                    className='search-input splash-item'
                    placeholder={language && language === 'English' ? English.SearchCatchesArea : Chinese.SearchCatchesArea}
                /></div>
                <ComboboxPopover>
                    <ComboboxList>
                        <div className='list-item-row result-item'>
                    <ComboboxOption
                        key={'ChIJ77RIbWo7kVQRydq-d9kYmBg'}
                        value={'Lewis County, WA, USA'}
                        className='recommended-place'
                        /><div className='active-community'>* Active community</div>
                        </div>
                    {status === 'OK' && data &&
                    data?.map(({ place_id, description }) => (
                        <>
                        <ComboboxOption
                            key={place_id}
                            value={description}
                            className='result-item'
                        />
                        </>
                    ))
                    }
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </>
    )
}
