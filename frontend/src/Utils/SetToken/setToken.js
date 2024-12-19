export const setToken = (token) => {
    const existToken = localStorage.getItem('cus_token')
    if(existToken) {
        localStorage.removeItem('cus_token');
        localStorage.setItem('cus_token', token);
    } else {
        localStorage.setItem('cus_token', token);
    }
}