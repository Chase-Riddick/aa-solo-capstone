import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState} from 'react'
import DateTimePicker from 'react-datetime-picker';

import ChooseLocationMap from './CreateMap/ChooseLocationMap';
import { createCatch } from '../../../store/catch';
import '../../../form.css';
import './createCatch.css';

export default function CreateCatchForm ({setShowModal}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const key = useSelector(state => state.map.mapAPIKey)
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);

  const [ searchLocation, setSearchLocation ] = useState();
  const [ areaParam, setAreaParam ] = useState('');
  const [placeName, setPlaceName] = useState('');
  // const [ catchArr, setCatchArr ] = useState(catches ? catches : []);
  // const [ catchLatLngArr, setCatchLatLngArr ] = useState();

  const [catchTime, setCatchTime] = useState(new Date());
  const [img, setImage] = useState(null);
  const [fish, setFish] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("")
  const [weight, setWeight] = useState("")
  const [bait, setBait] = useState("")
  const [lure, setLure] = useState("")
  const [long, setLong] = useState(-122.2751)
  const [lat, setLat] = useState(46.5583)

  const updateFish = (e) => setFish(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateLength = (e) => setLength(e.target.value);
  const updateWeight = (e) => setWeight(e.target.value);
  const updateBait = (e) => setBait(e.target.value);
  const updateLure = (e) => setLure(e.target.value);
  // const updateLong = (e) => setLong(e.target.value);
  // const updateLat = (e) => setLat(e.target.value);

  //Variables used for setting and restricting date inputs to within one week.
  const currentDate = new Date();
  let oneWeekAgo = new Date();
  oneWeekAgo.setDate(currentDate.getDate() - 6);

  const handleCancelClick = (e) => {
    e.preventDefault();
    setFish("")
    setDescription("")
    setLength("")
    setWeight("")
    setBait("")
    setLure("")
    setLong(-122.2751)
    setLat(46.5583)
    history.push(`/`)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];
    let splitImg = img.name.split('.');
    let fileKind = splitImg[splitImg.length - 1];

    if (!['png', 'jpeg', 'gif', 'jpg'].includes(fileKind)) {
      errors.push("Image files must end in one of the following: 'png', 'jpeg', 'gif', 'jpg'. Please reupload an image with the appropriate extension and try again.")
    }

    if (!searchLocation) {
      errors.push("You must select a location.")
    }

    if (errors.length) {
      setErrors([...errors]);
      return;
    }


    //Formatting Catch Time

    let catchTimeHour = `${catchTime.getHours()}`
    let catchTimeYear = `${catchTime.getFullYear()}`
    let catchTimeMonth = `${catchTime.getMonth() + 1}`
    if (catchTimeMonth.length < 2) catchTimeMonth = '0' + catchTimeMonth;

    let catchTimeDate = `${catchTime.getDate()}`
    if (catchTimeDate.length < 2) catchTimeDate = '0' + catchTimeDate;
    let catchTimeFormatted = `${catchTimeYear}-${catchTimeMonth}-${catchTimeDate}-${catchTimeHour}`


    const payload = {
        catch_time: catchTimeFormatted,
        img,
        fish,
        description,
        length,
        weight,
        bait,
        lure,
        long: searchLocation.lng,
        lat: searchLocation.lat,
        user_id: sessionUser.id
    };

    let data= await dispatch(createCatch(payload));
    if (data && data.errors) {
        let modified_error_messages = []
        data.errors.forEach(error => {
            let splitError = error.split(": ")
            modified_error_messages.push(splitError[1])
        });

        setErrors(modified_error_messages)

    } else {
        setFish("")
        setDescription("")
        setLength("")
        setWeight("")
        setBait("")
        setLure("")
        // setLong(-122.2751)
        // setLat(46.5583)
        history.push(`/mycatches`)
    }
  }


  return (
    <div className='create-catch-page'>
    <div className="create form create-form">
    <div className="transistion-bar">aa</div>
    <h1 className='section-title'>Share Your Catch</h1>
    <form className='form' onSubmit={handleSubmit}>

      {errors.length > 0 && <ul className='errors'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}

    <div className='table-row-required'>
      <h5>Required *</h5>
    </div>


    <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Fish </h5>
      <p className='required'>*</p>
      </div>
    <input
        type="text"
        placeholder="What did you catch?"
        className='input'
        value={fish}
        maxLength={25}
        onChange={updateFish} />
    </div>

    <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Catch Time</h5>
      <p className='required'>*</p>
      </div>
      <div>
      <DateTimePicker className='datetime-picker'required minDate={oneWeekAgo} maxDate={currentDate} onChange={setCatchTime} value={catchTime} />
    </div>
    </div>
    <div className='form-note'> <b>Note:</b> Catches must have happened in the past seven days. Budget contraints mean that we can only access weather conditions within the past 7 days. </div>



     <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Picture </h5>
      <p className='required'>*</p>
      </div>
      {/* <label className='grab-file-wrapper'>{img === null ? 'Choose an Image File to Upload' : 'File Chosen'} */}
      <div className='image-input-line'>
     <input
        type="file"
        placeholder="Fish Picture"
        required
        accept='image/*'
        className='input'
        // name='image'
        onChange={(e) => setImage(e.target.files[0])} />
        {/* </label> */}
        {img &&
        <i className="fa-solid fa-circle-check"></i>
        }
        </div>
        </div>

     <div className='table-row description-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Description </h5>
      <p className='not-required'>*</p>
      </div>

      <textarea
        placeholder="Anything else you'd like to say about the catch?"
        value={description}
        maxLength={254}
        // required
        className='input subpost-textarea'
        onChange={updateDescription} />
    </div>

    {/* weight */}
    <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Weight</h5>
      <p className='required'>*</p>
      </div>
      <input
        type="number"
        step="0.5"
        placeholder="Weight (lbs)"
        value={weight}
        min="0.0"
        max="500"
        onWheel={e => e.currentTarget.blur()}
        className='input'
        onChange={updateWeight} />
        </div>

    {/* length */}
    <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Length </h5>
      <p className='required'>*</p>
      </div>
    <input
        type="number"
        step="1.0"
        placeholder="Length (inches)"
        value={length}
        min="2.0"
        max="240"
        onWheel={e => e.currentTarget.blur()}
        className='input'
        onChange={updateLength} />
        </div>

<div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Bait </h5>
      <p className='not-required'>*</p>
      </div>
    <input
        type="text"
        placeholder="What bait did you use?"
        className='input'
        value={bait}
        maxLength={80}
        onChange={updateBait} />
        </div>

<div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Lure </h5>
      <p className='not-required'>*</p>
      </div>
    <input
        type="text"
        placeholder="What lure did you use?"
        className='input'
        value={lure}
        maxLength={80}
        onChange={updateLure} />
        </div>
      <div className='form-button-row'>
      <button className='button salmon' type="submit">Submit Post</button>
      <button className='button cancel' type="button" onClick={handleCancelClick}>Cancel</button>
      </div>
    </form>
  </div>

  <div className='location-select'>
  <ChooseLocationMap apiKey={key}
                searchLocation={searchLocation}
                setSearchLocation={setSearchLocation}
                areaParam={areaParam}
                setAreaParam={setAreaParam}
                setPlaceName={setPlaceName}
                />
  </div>
  </div>
  )
}