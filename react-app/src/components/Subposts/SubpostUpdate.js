import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react'

import { updateSubpostOnCatch, deleteSubpostOnCatch } from '../../store/catch';

export default function SubpostUpdate ({subpost, setShowSubpostUpdate}) {
      const dispatch = useDispatch();
      const sessionUser = useSelector(state => state.session.user);

      const [content, setContent] = useState(subpost?.content);
      const [errors, setErrors] = useState([]);
      const [enableDelete, setEnableDelete] = useState(false);


      const updateContent = (e) => setContent(e.target.value);

    //   const handleCancelClick = (e) => {
    //     e.preventDefault();
    //     setContent("")
    //     setErrors([])
    //     setShowSubpostUpdate(false)
    //   };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            id: subpost.id,
            user_id: subpost.user_id,
            catch_id: subpost.catch_id,
            content,
        };

        let data = await dispatch(updateSubpostOnCatch(payload));
        if (data && data.errors) {
            let modified_error_messages = []
            data.errors.forEach(error => {
                let splitError = error.split(": ")
                modified_error_messages.push(splitError[1])
            });
            setErrors(modified_error_messages)

        } else {
            e.preventDefault();
            setContent("")
            setErrors([])
            setShowSubpostUpdate(false)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        setErrors([]);

        let data = await dispatch(deleteSubpostOnCatch(subpost.id));
        if (data && data.errors) {
            let modified_error_messages = []
            data.errors.forEach(error => {
                let splitError = error.split(": ")
                modified_error_messages.push(splitError[1])
            });
            setErrors(modified_error_messages)
        } else {
            setShowSubpostUpdate(false)
        }
}



    return (
      <div>
        <form className='' onSubmit={handleSubmit}>

        {errors.length > 0 && <ul className='errors'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>}

        <div className='subpost-content-display'>

          <textarea
          value={content}
          className='input subpost-textarea'
          onChange={updateContent} />
          </div>
          <div className='button-row'>
            <button className="button teal" type="submit">Submit Edit</button>
            <button className={!enableDelete ? "button red": "button cancel"} type="button" onClick={() => setEnableDelete(!enableDelete)}>{!enableDelete ? 'Delete Post' : 'Cancel Delete'}</button>
          </div>
          {enableDelete &&
          <div className='button-row'>
          <button className="button red" type="button" onClick={handleDelete}>Delete Post</button>
          </div>
          }
      </form>
    </div>
    )
}