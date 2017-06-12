<template lang="html">
	<md-input-container style="flex: 1">
		<label>Add to list{{currentSelectIndex}}</label>
		<md-input v-model="value"
              @keyup.native="autoComplete($event)"/>
		<transition name="fade">
			<ul class="autocomplete" :class="{active: autocompleteList.length}" v-if="autocompleteList.length">
				<li v-for="(item, $index) in autocompleteList" :class="{select:$index === currentSelectIndex}">{{item}}</li>
			</ul>
		</transition>
	</md-input-container>
</template>

<script>
import _ from 'lodash';
import Api from '@/service/api';

export default {
  name: 'autocomplete',
  props: ['model', 'onKeydownEnter'],
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
          this.$emit('update:model', this.value);
          this.onKeydownEnter('addToList');
          this.autocompleteList = [];
          this.currentSelectIndex = undefined;
          this.value = '';
          break;
        default:
          this.getAutoCompleteList();
      }
      this.$emit('update:model', this.value);
    },
    getAutoCompleteList: _.throttle(function throttle() {
      Api.autoComplete(this.value).then(result => {
        this.autocompleteList = result;
      });
    }, 500),
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
transition: opacity ease-out 0.1s;
opacity: 1;
}
.fade-enter, .fade-leave-active {
opacity: 0;
}

.autocomplete {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  height: 0;
  background-color: #fff;
  color: rgba(0, 0, 0, .87);
  margin: 0;
  padding: 8px 0;
  list-style: none;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
  transition: all 2s cubic-bezier(.25, .8, .25, 1);
  will-change: transform, opacity, width;
  overflow: hidden;
  &.active {
    opacity: 1;
    height: auto;
  }
  & li {
    cursor: pointer;
    font-size: 16px;
    padding: 4px 16px;
    line-height: 1.2em;
    height: auto;
    z-index: 2;
    transition: all .4s cubic-bezier(.25, .8, .25, 1);
    &:hover {
      background-color: rgba(0, 0, 0, .12);
    }
    &.select {
      color: #fff;
      background: #dcedc8;
    }
  }
}
</style>
