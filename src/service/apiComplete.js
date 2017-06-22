import axios from 'axios';

const URL_ZAKAZ = 'https://{store}.zakaz.ua/api/query.json';

export default {
  zakazUa(query, store) {
    return axios({
      url: URL_ZAKAZ.replace('{store}', store || 'metro'),
      method: 'post',
      headers: {
        'Content-Type': 'text/plain',
      },
      data: {
        meta: {},
        request: [
          {
            args: {
              store_id: '48215611',
              query,
              timestamp: new Date().getTime().toString(),
            },
            v: '0.1',
            type: 'store.suggest',
            id: 'suggest',
          },
        ],
      },
    }).then(
      response => Promise.resolve(response.data.responses[0].data.suggests),
      err => Promise.reject(err),
    );
  },
  google(query) {
    if (!query) return Promise.reject({});
    return axios({
      url: 'http://f-cloud.pp.ua/proxy.php',
      method: 'get',
      headers: {
        'Content-Type': 'text/plain',
      },
      params: {
        csurl: 'http://suggestqueries.google.com/complete/search',
        client: 'chrome',
        q: query,
      },
    }).then(
      response => {
        console.log(response);
        return response.data[1];
      },
      error => {
        console.log(error);
        return [];
      },
    );
  },
};

