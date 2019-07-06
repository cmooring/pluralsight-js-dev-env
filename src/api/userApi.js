import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
import Promise from 'promise-polyfill';

// Promise polyfill is discussed on whatwg-fetch npm docs
// This example usage is from https://www.barrykooij.com/pollyfilling-fetch-promises
if (!window.Promise) {
  window.Promise = Promise;
}

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call function delete as it is a reserved word
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
 }
