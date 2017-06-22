<script src="./list.js"></script>
<style scoped src="./list.css"></style>

<template>
  <div class="list">
    <md-toolbar class='ftd-toolbar-main'>
      <h2 class="md-title">
        <md-icon>edit</md-icon>
      </h2>
      <autocomplete :model.sync="itemNew.name" :onKeydownEnter="showDialogAdd" :list="list"></autocomplete>
      <md-checkbox class="fast-add" id="fast-add" name="fast-add" v-model="fastAdd">fast</md-checkbox>
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
        <div class="list-table-more">
          <md-menu md-align-trigger v-if="listDB.length">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item>Done all</md-menu-item>
              <md-menu-item @click.stop.native="showConfirmRemove()">Remove all</md-menu-item>
              <md-menu-item>Send list</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </div>
      <div class="list-table-body">
        <div v-for="(item, index) in listDB" :key="index" class="list-table-row"
             @click="$router.push(`/${list}/${item['.key']}`)">
          <div class="list-table-done">
            <md-checkbox v-model="item.done" class="item-done"/>
          </div>
          <div class="list-table-name">{{item.name}}</div>
          <div class="list-table-descriptions">{{item.descriptions}}</div>
          <div class="list-table-quantity">{{item.quantity}} {{item.unit}}</div>
          <div class="list-table-remove">
            <md-button class="md-icon-button md-warn" @click.stop.native="showConfirmRemove(item)">
              <md-icon>delete</md-icon>
            </md-button>
          </div>
        </div>
      </div>
    </div>

    <md-dialog md-open-from=".ftd-toolbar-main button" md-close-to=".ftd-toolbar-main button" ref="addToList">
      <md-dialog-title>
        <span>{{itemNew.name}}</span>
      </md-dialog-title>
      <md-dialog-content>
        <form>
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
