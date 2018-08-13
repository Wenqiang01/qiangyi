// import {
//   getElementPermissions,
//   getComponentPermissions
// } from '../../service/httpService';
// import {
//   getToken
// } from '../../service/tokenService';
// let _elementPermissions;
// let _componentPermissions;

// export const preparePermissions = () => {
//   return new Promise((resolve, reject) => {
//     getElementPermissions().then((response) => {
//       if (response['data']) {
//         _elementPermissions = response['data'];
//         getComponentPermissions().then((response) => {
//           if (response['data']) {
//             _componentPermissions = response['data'];
//             resolve(true);
//           } else {
//             reject(false);
//           }
//         });
//       } else {
//         reject(false);
//       }
//     });
//   })
// }

// export const getUser = () => {
//   const rawInfo = getToken().split('.')[1];
//   const info = JSON.parse(window.atob(rawInfo));
//   console.log(rawInfo);
//   return info.username;
// }

// export const getRoles = () => {
//   const rawInfo = getToken().split('.')[1];
//   const info = JSON.parse(window.atob(rawInfo));
//   return info.userRoles;
// }

import {
  getUserRoles
} from './tokenService';
import store from '../store/';

export const isAuthtoProcess = (role) => {
    const userRoles = getUserRoles();
    const elementP = store.getters.getElementPermissions;

    console.log('elementP', elementP);

    if (elementP.data[role]) {
      if (userRoles.length > 0) {
        console.log(role + '----' + elementP.data[role])
        userRoles.some((roles) => {
          if (elementP.data[role].indexOf(roles) > -1) {
            return true;
          } else {
            store.commit('ERROR_POPUP', {
              message: `User doesn't have enough role to access '` + role + `'`,
              isPopUp: true
            })
            return false;
          }
        })
      } else {
        return true;
      }
    }
  }