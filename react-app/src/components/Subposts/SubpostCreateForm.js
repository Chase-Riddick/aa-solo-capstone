import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import { addSubpostToCatch } from '../../store/catch';

export default function SubpostCreateForm ({catch_id, setShowCreateField}) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [user_id, setUser_id] = useState(sessionUser?.id);
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value);

    const handleCancelClick = (e) => {
                e.preventDefault();
                setContent("")
                setErrors([])
                setShowCreateField(false)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            catch_id,
            content,
            user_id,
        };

        let data = await dispatch(addSubpostToCatch(payload));
        if (data && data.errors) {
            let modified_error_messages = []
            data.errors.forEach(error => {
                let splitError = error.split(": ")
                modified_error_messages.push(splitError[1])
            });

            setErrors(modified_error_messages)
        } else {
            setContent("")
            setErrors([])
            setShowCreateField(false)
        }
    }

    return (
        <div className='create-subpost-form'>
            <form className='' onSubmit={handleSubmit}>

            {errors.length > 0 && <ul className='errors'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>}

                <textarea
                placeholder="Your comments..."
                value={content}
                maxLength={260}
                // required
                className='input subpost-textarea'
                onChange={updateContent} />

                <button className='button teal' type="submit">Submit</button>
                <button className='button cancel' type="button" onClick={handleCancelClick}>Cancel</button>
            </form>

        </div>
    )
}
