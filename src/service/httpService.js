import fetch from './fetch'


export const UserLoginFunction =
  (userData) => fetch('/login', userData, 'POST', '');

export const getElementPermissions =
  () => fetch('/elementPermissions', {}, 'GET', '');

export const getComponentPermissions =
  () => fetch('/componentPermissions', {}, 'GET', ''); 
