import apiComplete from './apiComplete';

export default {
  autoComplete(text, source) {
    switch (source) {
      case 'metro':
        return apiComplete.zakazUa(text, source);
      case 'google':
        return apiComplete.google(text);
      default:
        return apiComplete.google(text);
    }
  },
};
