import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react'
import { updateCatch, deleteCatch } from '../../../store/catch';
import '../../../form.css'

export default function UpdateCatchForm ({indivCatch, setShowModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);

  const [img, setImage] = useState(null);
  const [fish, setFish] = useState(indivCatch?.fish);
  const [description, setDescription] = useState(indivCatch?.description);
  const [length, setLength] = useState(indivCatch?.length)
  const [weight, setWeight] = useState(indivCatch?.weight)
  const [bait, setBait] = useState(indivCatch?.bait)
  const [lure, setLure] = useState(indivCatch?.lure)
  const [long, setLong] = useState(indivCatch?.long)
  const [lat, setLat] = useState(indivCatch?.lat)

  const updateFish = (e) => setFish(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateLength = (e) => setLength(e.target.value);
  const updateWeight = (e) => setWeight(e.target.value);
  const updateBait = (e) => setBait(e.target.value);
  const updateLure = (e) => setLure(e.target.value);
  // const updateLong = (e) => setLong(e.target.value);
  // const updateLat = (e) => setLat(e.target.value);

// ***** This function isn't working. *****
//   const updateImg = (e) => {
//     setImage(e.target.files[0])
//   }

  const handleCancelClick = (e) => {
    setFish("");
    setDescription("");
    setLength("");
    setWeight("");
    setBait("");
    setLure("");
    setLong(-122.2751);
    setLat(46.5583);
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];
    console.log("-----------------------------------")
    console.log("This hit!")

    if (errors.length) {
      setErrors([...errors]);
      return;
    }

    const payload = {
        id: indivCatch.id,
        img,
        fish,
        description,
        length,
        weight,
        bait,
        lure,
        long,
        lat,
    };

    console.log('--------------------------------------')
    console.log(payload)

    let data = await dispatch(updateCatch(payload));
    if (data && data.errors) {
        let modified_error_messages = []
        data.errors.forEach(error => {
            let splitError = error.split(": ")
            modified_error_messages.push(splitError[1])
        });

        setErrors(modified_error_messages)


    } else {
        setFish("");
        setDescription("");
        setLength("");
        setWeight("");
        setBait("");
        setLure("");
        setLong(-122.2751);
        setLat(46.5583);
        setShowModal(false);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    setErrors([]);

    let data = await dispatch(deleteCatch(indivCatch.id));
    console.log("this hit!!!!!!aa")
    console.log(data)
    if (data && data.errors) {
        let modified_error_messages = []
        data.errors.forEach(error => {
            let splitError = error.split(": ")
            modified_error_messages.push(splitError[1])
        });
        setErrors(modified_error_messages)
    } else {
      setShowModal(false);
    }
}


  return (

    <div className="create form">
    <h1 className='section-title'>Edit Your Catch</h1>
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

      {/* <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Picture </h5>
      <p className='required'>*</p>
      </div>
      <label className='grab-file-wrapper'>{img === null ? 'Choose an Image File to Upload' : 'File Chosen'}
     <input
        type="file"
        placeholder="Fish Picture"
        required
        accept='image/*'
        className='input hide'
        name='image'
        onChange={(e) => setImage(e.target.files[0])} />
        </label>
        </div> */}

      {/* <input
        type="text"
        placeholder="What did you catch?"
        className='input'
        value={fish}
        onChange={updateFish} /> */}

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
        onChange={updateLure} />
        </div>

        <div className='form-button-row'>
      <button className='button salmon' type="submit">Submit Post</button>
      <button className='button cancel' type="button" onClick={handleCancelClick}>Cancel</button>
      <button className='button red' type="button" onClick={(e) => {handleDelete(e)}}>Delete Catch Post</button>
      </div>

    </form>
  </div>
  )
}