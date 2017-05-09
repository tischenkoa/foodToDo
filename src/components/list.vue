<template>
<div class="list">
  <md-toolbar class='ftd-toolbar-main'>
    <h2 class="md-title"><md-icon>edit</md-icon></h2>

    <md-input-container style="flex: 1">
      <label>Add to list</label>
      <md-input v-model="itemNew.name" @keydown.enter.native="showDialogAdd('addToList')" />
    </md-input-container>

    <md-button class="md-icon-button" @click.native="showDialogAdd('addToList')">
      <md-icon>add</md-icon>
    </md-button>
  </md-toolbar>
  <div class="list-table">
    <div class="list-table-header">
      <div class="list-table-done">Done</div>
      <div class="list-table-name">Name</div>
      <div class="list-table-descriptions">Descriptions</div>
      <div class="list-table-quantity">qty.</div>
      <div class="list-table-remove"></div>
    </div>
    <div  class="list-table-body">
      <div v-for="(item, index) in listDB" :key="index" class="list-table-row">
        <div class="list-table-done">
          <md-checkbox v-model="item.done" class="item-done" />
        </div>
        <div class="list-table-name">{{item.name}}</div>
        <div class="list-table-descriptions">{{item.descriptions}}</div>
        <div class="list-table-quantity">{{item.quantity}} {{item.unit}}</div>
        <div class="list-table-remove">
          <md-button class="md-icon-button md-warn" @click.native="showConfirmRemove(item)">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </div>
    </div>
  </div>

  <md-dialog md-open-from=".ftd-toolbar-main button" md-close-to=".ftd-toolbar-main button" ref="addToList">
    <md-dialog-title>
      <span>{{itemNew.name}}</span>
      <div class="field-group">
        <md-input-container>
        <label>Quantity</label>
        <md-input type="number" v-model="itemNew.quantity"></md-input>
      </md-input-container>
      <md-input-container>
        <label for="country">Unit</label>
        <md-select name="country" id="country" v-model="itemNew.unit">
          <md-option value="pcs">pcs</md-option>
          <md-option value="kg">kg</md-option>
          <md-option value="m">m</md-option>
          <md-option value="l">l</md-option>
        </md-select>
      </md-input-container>
      </div>
    </md-dialog-title>
    <md-dialog-content>
      <form>
        <md-input-container>
          <label>Descriptions:</label>
          <md-textarea v-model="itemNew.descriptions"></md-textarea>
        </md-input-container>
      </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="hideDialogAdd('addToList')">Cancel</md-button>
      <md-button class="md-primary" @click.native="add('addToList')">Add</md-button>
    </md-dialog-actions>
  </md-dialog>

  <md-dialog-confirm
    :md-title="confirm.title"
    :md-content="confirm.content"
    :md-ok-text="confirm.okText"
    @close="closeConfirm"
    ref="removeItem">
 </md-dialog-confirm>
</div>
</template>

<script>
import _ from 'lodash';
import fbService from '../service/firebase';

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
      this.$refs[ref].open();
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
  },
};
</script>

<style scoped>
:root {
  --toolbarHeight: 64px;
  --tableHeight: 50px;
}
.list {
  height: 100%;
  overflow: hidden;
  & .md-toolbar {
    height: var(--toolbarHeight);
  }
  & .list-table {
    height: calc(100% - var(--toolbarHeight));
    & .list-table-header,
    & .list-table-body .list-table-row {
      display: flex;
      align-items: center;
      padding: 4px 0;
    }
    & .list-table-header {
      padding-top: 15px;
      height: var(--tableHeight);
    }
    & .list-table-body {
      overflow-x: hidden;
      overflow-y: auto;
      height: calc(100% - var(--tableHeight));
    }
    & .list-table-done {
      width: 48px;
      margin: 0;
      text-align: center;
      & .md-checkbox {
        margin: 0;
      }
    }
    & .list-table-name {
      flex: 0.4;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 5px;
    }
    & .list-table-descriptions {
      flex: 0.6;
      padding: 0 5px;
    }
    & .list-table-quantity {
      text-align: right;
      width: 40px;
    }
    & .list-table-remove {
      width: 52px;
      transition: all .4s cubic-bezier(.25,.8,.25,1);
    }
    & .list-table-row:hover {
      cursor: pointer;
      background-color: #eee;
    }
    @media (width <= 500px){
      & .list-table-name {
        flex: 1;
      }
      & .list-table-descriptions {
        display: none;
      }
    }
  }
}
</style>
