import _ from 'lodash';
import fbService from '@/service/firebase';
import Api from '@/service/api';

const refDB = fbService.getDB().ref('lists/');

const itemDefult = {
  food: {
    name: '',
    descriptions: '',
    dateStamp: '',
    quantity: 1,
    unit: '',
    done: false,
  },
  other: {
    name: '',
    descriptions: '',
    dateStamp: '',
    quantity: 1,
    unit: '',
    done: false,
  },
  todo: {
    name: '',
    descriptions: '',
    dateStamp: '',
    expires: '',
    done: false,
  },
};

export default {
  name: 'list',
  props: ['list'],
  firebase() {
    return {
      listDB: refDB.child(this.list),
    };
  },
  watch: {
    list() {
      this.$bindAsArray('listDB', refDB.child(this.list));
    },
  },
  data() {
    return {
      itemNew: _.extend({}, itemDefult[this.list]),
      fastAdd: true,
      confirm: {
        title: 'Remove?',
        content: 'content',
        okText: 'remove',
        obj: {},
      },
    };
  },
  methods: {
    showDialogAdd(ref) {
      if (this.fastAdd) {
        this.$firebaseRefs.listDB.push(_.extend({}, this.itemNew));
        this.itemNew = _.extend({}, itemDefult[this.list]);
      } else {
        this.$refs[ref].open();
      }
    },
    hideDialogAdd(ref) {
      this.$refs[ref].close();
    },
    showConfirmRemove(item) {
      this.confirm.content = item.name;
      this.confirm.obj = item;
      this.$refs.removeItem.open();
    },
    closeConfirm(type) {
      if (type === 'ok') this.$firebaseRefs.listDB.child(this.confirm.obj['.key']).remove();
      this.confirm.obj = {};
    },
    add(ref) {
      this.$refs[ref].close();
      this.$firebaseRefs.listDB.push(_.extend({}, this.itemNew));
      this.itemNew = _.extend({}, itemDefult[this.list]);
    },
    remove(item) {
      this.$firebaseRefs.items.child(item['.key']).remove();
    },
    bay() {},
    autoComplete(event) {
      Api.autoComplete(this.itemNew.name);
    },
  },
};
