import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react'
import { updateCatch, deleteCatch } from '../../../store/catch';
import '../../../form.css'
import { useLanguageContext } from '../../../context/LanguageContext';

export default function UpdateCatchForm ({indivCatch, setShowModal}) {
  const { language, setLanguage, English, Chinese } = useLanguageContext();
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

  const [enableDelete, setEnableDelete] = useState(false);


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

    // if (img) {

    // let splitImg = img.name.split('.');
    // let fileKind = splitImg[splitImg.length - 1]
    // if (!['png', 'jpeg', 'gif', 'jpg'].includes(fileKind)) {
    //   errors.push("Image files must end in one of the following: 'png', 'jpeg', 'gif', 'jpg'. Please reupload an image with the appropriate extension and try again.")
    // }
    // }



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
        // setLong(-122.2751);
        // setLat(46.5583);
        setShowModal(false);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    setErrors([]);

    let data = await dispatch(deleteCatch(indivCatch.id));

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
      <div className='top-x-space'><i onClick={() => {setShowModal(false)}} className="fa-solid fa-xmark"></i></div>
    <h1 className='section-title'>{language && language === 'English' ? English.EditYourCatch : Chinese.EditYourCatch}</h1>
    <form className='form' onSubmit={handleSubmit}>

      {errors.length > 0 && <ul className='errors'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}

        <div className='table-row-required'>
      <h5>{language && language === 'English' ? English.Required : Chinese.Required} *</h5>
    </div>


      <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Fish : Chinese.Fish} </h5>
      <p className='required'>*</p>
      </div>
    <input
        type="text"
        placeholder="What did you catch?"
        className='input'
        value={fish}
        maxLength={20}
        required
        onChange={updateFish} />
    </div>

      {/* <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Picture </h5>
      <p className='required'>*</p>
      </div>
      <div className='image-input-line'>
     <input
        type="file"
        placeholder="Fish Picture"
        accept='image/*'
        className='input'
        name='image'
        onChange={(e) => setImage(e.target.files[0])} />
        {img &&
        <i className="fa-solid fa-circle-check"></i>
        }
        </div>
        </div> */}

      {/* {/ <input
        type="text"
        placeholder="What did you catch?"
        className='input'
        value={fish}
        onChange={updateFish} /> */}

<div className='table-row description-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Description : Chinese.Description} </h5>
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
      <h5 className='table-row-label'>{language && language === 'English' ? English.Weight : Chinese.Weight}</h5>
      <p className='required'>*</p>
      </div>
      <input
        type="number"
        step="0.5"
        placeholder="Weight (lbs)"
        value={weight}
        min="0.0"
        max="500"
        required
        onWheel={e => e.currentTarget.blur()}
        className='input'
        onChange={updateWeight} />
        </div>


    <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Length : Chinese.Length} </h5>
      <p className='required'>*</p>
      </div>
    <input
        type="number"
        step="1.0"
        placeholder="Length (inches)"
        value={length}
        min="2.0"
        max="240"
        required
        onWheel={e => e.currentTarget.blur()}
        className='input'
        onChange={updateLength} />
        </div>

        <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Bait: Chinese.Bait} </h5>
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
      <h5 className='table-row-label'>{language && language === 'English' ? English.Lure : Chinese.Lure}</h5>
      <p className='not-required'>*</p>
      </div>
    <input
        type="text"
        placeholder="What lure did you use?"
        className='input'
        maxLength={80}
        value={lure}
        onChange={updateLure} />
        </div>

      <div className='form-button-row'>
      <button className='button salmon' type="submit">{language && language === 'English' ? English.SubmitUpdate : Chinese.SubmitUpdate}</button>
      <button className='button cancel' type="button" onClick={handleCancelClick}>{language && language === 'English' ? English.Cancel : Chinese.Cancel}</button>
      <button className={!enableDelete ? "button red": "button cancel"} type="button" onClick={() => setEnableDelete(!enableDelete)}>{!enableDelete ? (language === 'English' ? English.DeleteCatchPost : Chinese.DeleteCatchPost) : (language === 'English' ? English.CancelDelete : Chinese.CancelDelete)}</button>
      </div>
      {enableDelete &&
      <div className='form-button-row'>
      <button className='button red' type="button" onClick={(e) => {handleDelete(e)}}>{language && language === 'English' ? English.DeleteCatchPost : Chinese.DeleteCatchPost}</button>
      </div>
      }
    </form>
  </div>
  )
}