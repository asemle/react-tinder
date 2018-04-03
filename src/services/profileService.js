import axios from 'axios';

var profileService = {
    
    getUser:function() {
    return axios.get('/api/auth/authenticated')
    .then(res => 
        {
        console.log(res.data)
        return res.data
        }
        ).catch( error  => {
            return { pictures: [], id: 0}
        })
    },
    updateUser: function(user) {
        var id = user.id;
        console.log(user)
        axios.post(`/api/user/${id}`, user)
            .then(res => {
                console.log(res.data)
            })
    },
    updateSwipes: function(user) {
        var id = user.id;
        console.log(user)
        axios.post(`/api/user/swipes/${id}`, user)
            .then(res => {
                console.log(res.data)
            })
    } 

}
export default profileService;