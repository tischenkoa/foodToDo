import fbService from 'service/firebase';

const refDB = fbService.getDB().ref('lists/');

export default {
  name: 'item',
  props: ['list', 'itemId'],
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.$bindAsObject('item', refDB.child(this.list).child(this.itemId));
  },
  methods: {
    remove() {
      this.$firebaseRefs.item.remove();
      this.$router.push(`/${this.list}`);
    },
    update() {
      delete this.item['.key'];
      this.$firebaseRefs.item.set(this.item);
      this.$router.push(`/${this.list}`);
    },
  },
};
