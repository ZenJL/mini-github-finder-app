import React, {useState} from 'react';

// Context
import { useGithubContext } from '../../context/github/githubContext';
import { useAlertContext } from '../../context/alert/alertContext';

// functions
import {searchUsers} from '../../context/github/githubAction';

function UserSearch() {
  const [text, setText] = useState('');
  // const [resultText, setResultText] = useState('');

  const {users, resultText, dispatch} = useGithubContext();
  const {setAlert} = useAlertContext();

  // handle change input text
  const handleChange = (e) => {
    const {value} = e.target;
    setText(value);
  };

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(text === '') {
      setAlert('Please enter something!', 'error')
    }
    else {
      // @todo - search users
      dispatch({type: 'SET_LOADING'});
      
      const inputSearchText = text;

      const users = await searchUsers(text);
      // console.log('users here: ', users);

      dispatch({type: 'GET_USERS', payload: {users, inputSearchText}});

      setText('');
    }
  }
 

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type='submit'
              >Go</button>
            </div>
          </div>
        </form>
        {users.length> 0 && resultText !== '' &&
          <div className='alert alert-info mt-8 w-2/3'>Search results for:<h4 className='pl-4 text-white text-lg font-semibold'>{resultText}</h4></div>
        }
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-lg"
            onClick={() => dispatch({type: 'CLEAR_USERS'})}      
          >
            Clear
          </button>
        </div>
      )}
      
    </div>
  );
}

export default UserSearch;
