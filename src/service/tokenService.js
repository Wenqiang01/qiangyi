export const getToken = () => {
    return localStorage['login-token'];
}

export const setToken = (token) => {
    localStorage.setItem('login-token', token);
}

export const clearToken = () => {
    localStorage.removeItem('login-token');
}

export const getUserRoles = () => {
    const rawInfo = getToken().split('.')[1];
    const info = JSON.parse(window.atob(rawInfo));
    return info.userRoles;
}