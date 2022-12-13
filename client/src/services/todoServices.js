const apiURL = process.env.REACT_APP_BACKEND_API + '/todo'
const token = window.localStorage.getItem('token')

async function createTodo(data) {
    fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            authorization: token
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    
    /*
    axios.post(apiURL, {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            authorization: token
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    */
}

async function getTodos() {
    return fetch(apiURL,
    {
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    }
  ).then((res) => res.json())
}

async function deleteTodo(id) {
    fetch(`${apiURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: token
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}

async function updateTodo(id, data) {
    fetch(`${apiURL}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            authorization: token
        }
    }).then(res => res.json()
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)))
}

const api = {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo
}
export default api