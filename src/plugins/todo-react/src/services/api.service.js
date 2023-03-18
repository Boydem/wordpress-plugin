import axios from 'axios'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = `${window.appLocalizer.apiUrl}/todo-react/v1/`

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    'X-WP-NONCE': window.appLocalizer.nonce,
    'Accept': 'application/json',
}

axiosClient.defaults.timeout = 2000
axiosClient.defaults.withCredentials = true

function request(method, URL, payload) {
    const data = payload !== undefined ? payload : null
    return axiosClient({
        method: method,
        url: `${URL}`,
        data: data,
    })
        .then(res => res.data)
        .catch(error => {
            console.log('Error:', error)
            throw error
        })
}

export const apiService = {
    query: URL => request('GET', URL),
    save: (URL, payload) => request('POST', URL, payload),
    remove: URL => request('DELETE', URL),
}
