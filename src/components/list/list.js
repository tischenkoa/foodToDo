import _ from 'lodash';
import fbService from '@/service/firebase';

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
      autocomplete: [],
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
      this.confirm.content = item ? item.name : 'All item';
      this.confirm.obj = item;
      this.$refs.removeItem.open();
    },
    closeConfirm(type) {
      if (type === 'ok') {
        if (this.confirm.obj) {
          this.$firebaseRefs.listDB.child(this.confirm.obj['.key']).remove();
        } else {
          this.$firebaseRefs.listDB.remove();
        }
        this.confirm.obj = {};
      }
    },
    add(ref) {
      this.$refs[ref].close();
      this.$firebaseRefs.listDB.push(_.extend({}, this.itemNew));
      this.itemNew = _.extend({}, itemDefult[this.list]);
    },
  },
};
