<script src="./item.js" charset="utf-8"></script>
<style scoped src="./item.css"></style>

<template>
  <div class="item">
    <back></back>
    <form>
      <md-layout class="field-group">
        <md-input-container class="item-name">
          <label>Name</label>
          <md-input v-model="item.name"></md-input>
        </md-input-container>
        <md-input-container class="item-quantity">
          <label>Quantity</label>
          <md-input type="number" v-model="item.quantity"></md-input>
        </md-input-container>
        <md-input-container class="item-unit">
          <label for="country">Unit</label>
          <md-select name="country" id="country" v-model="item.unit">
            <md-option value="pcs">pcs</md-option>
            <md-option value="kg">kg</md-option>
            <md-option value="m">m</md-option>
            <md-option value="l">l</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-input-container>
        <label>Descriptions:</label>
        <md-textarea v-model="item.descriptions"></md-textarea>
      </md-input-container>
      <md-layout class="footer-control">
        <md-button class="md-raised md-warn button-update" @click.native="remove()">Remove</md-button>
        <md-button class="md-raised md-primary button-update" @click.native="update()">Update</md-button>
      </md-layout>
    </form>
  </div>
</template>
