import {
  baseUrl
} from './env'
import {
  getToken
} from './tokenService';
import axios from 'axios';

export default async (url = '', data = {}, type = 'GET', method = '', headers = null) => {
  type = type.toLowerCase();
  url = baseUrl + url;
  const token = getToken();
  let HTTP;
  let auth_token = 'bearer ' + token;
  if (token) {
    HTTP = axios.create({
      headers: {
        Authorization: auth_token
      }
    })
  } else {
    HTTP = axios.create();
  }

  if (type == 'get') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
    return HTTP.get(url, {
      headers: {
        Authorization: auth_token
      }
    });
  } else if (type === 'post') {
    return HTTP.post(url, data, {
      headers: {
        Authorization: auth_token
      }
    });
  } else if (type === 'post_file') {
    return HTTP.post(url, data, {
      headers: {
        Authorization: auth_token,
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

// export default async(url = '', data = {}, type = 'GET', method = '') => {
// 	type = type.toUpperCase();
// 	url = baseUrl + url;

// 	if (type == 'GET') {
// 		let dataStr = ''; //数据拼接字符串
// 		Object.keys(data).forEach(key => {
// 			dataStr += key + '=' + data[key] + '&';
// 		})

// 		if (dataStr !== '') {
// 			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
// 			url = url + '?' + dataStr;
// 		}
// 	}

// 	if (window.fetch && method == 'fetch') {
// 		let requestConfig = {
// 			credentials: 'include',
// 			method: type,
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json'
// 			},
// 			mode: "cors",
// 			cache: "force-cache"
// 		}

// 		if (type == 'POST') {
// 			Object.defineProperty(requestConfig, 'body', {
// 				value: JSON.stringify(data)
// 			})
// 		}

// 		try {
// 			const response = await fetch(url, requestConfig);
// 			const responseJson = await response.json();
// 			return responseJson
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	} else {
// 		return new Promise((resolve, reject) => {
// 			let requestObj;
// 			if (window.XMLHttpRequest) {
// 				requestObj = new XMLHttpRequest();
// 			} else {
// 				requestObj = new ActiveXObject;
// 			}
// 			// requestObj.setRequestHeader('Content-Type', 'application/json');
// 			let sendData = '';
// 			if (type == 'POST') {
// 				sendData = JSON.stringify(data);
// 			}
// 			const token = getToken();
// 			requestObj.open(type, url, true);
// 			requestObj.setRequestHeader("Content-type", "application/json");
// 			if(token !== null && token !== undefined) {
// 				requestObj.setRequestHeader('Authorization', `Bearer ${token}`);
// 			}

// 			requestObj.send(sendData);

// 			requestObj.onreadystatechange = () => {
// 				if (requestObj.readyState == 4) {
// 					if (requestObj.status == 200) {
// 						let obj = requestObj.response
// 						if (typeof obj !== 'object') {
// 							obj = JSON.parse(obj);
// 						}
// 						resolve(obj)
// 					} else {
// 						reject(requestObj)
// 					}
// 				}
// 			}
// 		})
// 	}
// }
