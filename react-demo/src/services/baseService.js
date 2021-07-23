/******************************************
 *  Author : Shanming Liu   
 *  Created On : Thu Jul 22 2021
 *  File : base.js
 *******************************************/

export async function getData(url) {
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  })
  return response.json()
}

export async function postData(url, data) {
  const response = await fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
  return response.json()
}

export async function updateData(url, data) {
  const response = await fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
  })
  return response.json()
}

export async function deleteData(url) {
  const response = await fetch(url, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE'
  })
  return response
}