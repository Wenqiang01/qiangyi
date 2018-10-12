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

export const getImgAllList = 
  () => fetch('/mok/imgListsAll', {}, 'GET', '');

export const getImgObjById = 
  (formObj) => fetch('/mok/imgLists', formObj, 'GET', '');

export const getImgById = 
  (id) => fetch('/mok/img/' + id, {}, 'GET', '');

