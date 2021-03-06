import {
  SET_PERMISSIONS,
  ERROR_POPUP
} from './mutation-types';

export default {
  [SET_PERMISSIONS](state, {
    elementPermissions,
    componentPermissions
  }) {
    state.elementPermissions = elementPermissions
    state.componentPermissions = componentPermissions
  },
  [ERROR_POPUP](state, {
    message,
    type,
    isPopUp
  }) {
    state.errorPop.errorMsg = message;
    state.errorPop.isPopUp = isPopUp;
    state.errorPop.errorType = type;
  }
}
