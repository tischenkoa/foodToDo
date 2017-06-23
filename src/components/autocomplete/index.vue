<template lang="html">
	<md-input-container style="flex: 1">
		<label>Add to list</label>
		<md-input v-model="value" @keyup.native="autoComplete($event)"/>
		<transition name="fade">
			<ul class="autocomplete" :class="{active: autocompleteList.length}" v-if="autocompleteList.length" v-click-outside="hide">
				<li v-for="(item, $index) in autocompleteList" :class="{select:$index === currentSelectIndex}">{{item}}</li>
			</ul>
		</transition>
	</md-input-container>
</template>

<script>
import _ from 'lodash';
import Api from '@/service/api';

const configAutocompleteSource = {
  food: 'metro',
};

export default {
  name: 'autocomplete',
  props: ['model', 'onKeydownEnter', 'list'],
  data() {
    return {
      value: this.model,
      autocompleteList: [],
      currentSelectIndex: undefined,
    };
  },
  methods: {
    autoComplete(event) {
      switch (event.keyCode) {
        case 38:
          if (this.currentSelectIndex > 0) this.currentSelectIndex -= 1;
          break;
        case 27:
          this.hide();
          break;
        case 40:
          if (this.currentSelectIndex === undefined) {
            this.currentSelectIndex = 0;
            break;
          }
          if (this.currentSelectIndex < this.autocompleteList.length) this.currentSelectIndex += 1;
          break;
        case 13:
          if (this.autocompleteList && this.autocompleteList[this.currentSelectIndex]) {
            this.value = this.autocompleteList[this.currentSelectIndex];
          }
          this.select(this.value);
          break;
        default:
          this.$emit('update:model', this.value);
          this.currentSelectIndex = undefined;
          this.getAutoCompleteList();
      }
    },
    select(value) {
      this.$emit('update:model', value);
      this.onKeydownEnter('addToList');
      this.hide();
      this.value = '';
    },
    hide() {
      this.autocompleteList = [];
      this.currentSelectIndex = undefined;
    },
    getAutoCompleteList: _.throttle(function throttle() {
      Api.autoComplete(this.value, configAutocompleteSource[this.list]).then(result => {
        this.autocompleteList = result.slice(0, 9);
      }, () => {
        this.autocompleteList = [];
      });
    }, 500),
  },
};
</script>

<style src="./autocomplete.css" scoped></style>
