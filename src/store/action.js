import {
  SET_PERMISSIONS
} from './mutation-types';
import {
  getElementPermissions,
  getComponentPermissions
} from '../service/httpService';
import {
  getToken
} from '../service/tokenService';

export default {
  async loadPermissions({
    commit,
    state
  }) {
    let elementPremissions = await getElementPermissions();
    let componentPermissions = await getComponentPermissions();

    commit(SET_PERMISSIONS, {
      elementPermissions: elementPremissions.data,
      componentPermissions: componentPermissions.data
    });
    return {
      status: 'SUCCESS'
    };
  },
  ERROR_POPUP({commit}, payLoad) {
      commit('ERROR_POPUP', payLoad)
  }
}