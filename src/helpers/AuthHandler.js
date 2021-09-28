import Cookies from 'js-cookie';

export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
};

export const doLogIn = (token, rememberPassword) => {
    if(rememberPassword){
        Cookies.set('token', token, { expires: 999});
    } else{
        Cookies.set('token', token);
    }
};

export const doLogOut = () => {
    Cookies.remove('token');
};