export const fetchAPI = () => {
    return fetch('https://reqres.in/api/users?page=1', {
        cache: 'no-cache',
        //'content-type': 'application/json',
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data
    });
}
