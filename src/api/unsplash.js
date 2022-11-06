import axios from 'axios';

export default axios.create({
    //creates instance of axios client with defaulted props
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID k0TYEkIyB-JZQRe8JB5G3iBP6jPF-7xamNF4ejh6BGE'
    }
})