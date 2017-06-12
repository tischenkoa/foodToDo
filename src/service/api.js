import axios from 'axios';

const URL_AUTOCOMPLETE = 'https://metro.zakaz.ua/api/query.json';

export default {
  autoComplete(text) {
    let result;
    return axios({
      url: URL_AUTOCOMPLETE,
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
              query: text,
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
};

// const URL_AUTOCOMPLETE = 'http://fozzyshop.com.ua/search';
//
// export default {
//   autoComplete(text) {
//     return axios({
//       url: 'http://f-cloud.pp.ua/proxy.php',
//       method: 'get',
//       headers: {
//         'Content-Type': 'text/plain',
//         // 'X-Proxy-Url': URL_AUTOCOMPLETE,
//       },
//       params: {
//         csurl: URL_AUTOCOMPLETE,
//         q: text,
//         limit: 7,
//         timestamp: new Date().getTime().toString(),
//         ajaxSearch: 1,
//         search_query_cat: 0,
//         id_lang: 2,
//       },
//     }).then(
//       response => {
//         console.log(response);
//       },
//       err => {
//         console.log(err);
//       },
//     );
//   },
// };
