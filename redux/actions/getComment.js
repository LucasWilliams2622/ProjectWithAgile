import axios from "axios";

export default getComments = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('https://63e46788c04baebbcda5418e.mockapi.io/api/vn/comments')
            .then(function (response) {
                //handle success
                console.log(response);
                resolve(response.data)// this one is data on website
            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            })
    })
}