import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react'
import { createCatch } from '../../../store/catch';
import '../../../form.css'

export default function CreateCatchForm ({setShowModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);


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

// ***** This function isn't working. *****
//   const updateImg = (e) => {
//     setImage(e.target.files[0])
//   }

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
    setShowModal(false)

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];

    if (errors.length) {
      setErrors([...errors]);
      return;
    }


    const payload = {
        img,
        fish,
        description,
        length,
        weight,
        bait,
        lure,
        long,
        lat,
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
        setLong(-122.2751)
        setLat(46.5583)
        setShowModal(false)
    }
  }


  return (

    <div className="create form">
    <h1>Share your Catch</h1>
    <form className='form' onSubmit={handleSubmit}>

      {errors.length > 0 && <ul className='errors'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}

    <label htmlFor="image">
        Fish Picture
    </label>

     <input
        type="file"
        placeholder="Fish Picture"
        required
        accept='image/*'
        className='input'
        name='image'
        onChange={(e) => setImage(e.target.files[0])} />

      <input
        type="text"
        placeholder="What did you catch?"
        className='input'
        value={fish}
        onChange={updateFish} />

      <input
        type="text"
        placeholder="Description"
        className='input'
        value={description}
        onChange={updateDescription} />

    {/* weight */}
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

    {/* length */}
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

    <input
        type="text"
        placeholder="What bait did you use?"
        className='input'
        value={bait}
        onChange={updateBait} />

    <input
        type="text"
        placeholder="What lure did you use?"
        className='input'
        value={lure}
        onChange={updateLure} />

      <button className='button' type="submit">Submit Post</button>
      <button className='button' type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </div>
  )
}