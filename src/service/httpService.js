import fetch from './fetch'


export const UserLoginFunction =
  (userData) => fetch('/login', userData, 'POST', '');

export const getElementPermissions =
  () => fetch('/elementPermissions', {}, 'GET', '');

export const getComponentPermissions =
  () => fetch('/componentPermissions', {}, 'GET', ''); 

export const addProducts =
  (product) => fetch('/mok/products', product, 'POST', '');
  
export const postFileData = 
  (formData) => fetch('/mok/addFile', formData, 'POST_FILE', '');
