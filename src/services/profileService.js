import axios from 'axios';

export const profile = function() {
    return axios.get('/api/auth/authenticated')
    .then(res => 
        {console.log(res.data)
        return res.data})
    
}