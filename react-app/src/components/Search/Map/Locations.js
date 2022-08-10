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

import '../../Splash/Map/searchbar.css'

import { useLanguageContext } from '../../../context/LanguageContext';

export default function Locations ({ setSearchLocation }) {
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
            <div className='search-div search-page'><div className='search-icon'><i className="fa-solid fa-magnifying-glass-location search-bar-icon"></i></div>
                <ComboboxInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={!ready}
                    className='search-input expanded-width'
                    placeholder={language && language === 'English' ? English.SearchAnArea : Chinese.SearchAnArea}
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
                        <div className='list-item-row result-item'>
                    <ComboboxOption
                        key={'ChIJ77RIbWo7kVQRydq-d9kYmCg'}
                        value={'China, Liaoning, 大连'}
                        className='recommended-place'
                        /><div className='active-community'>* Active community</div>
                        </div>
                    {status === 'OK' &&
                    data?.map(({ place_id, description }) => (
                        <ComboboxOption
                            key={place_id}
                            value={description}
                            className='result-item'
                        />
                    ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </>
    )
}
