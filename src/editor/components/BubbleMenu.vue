<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3'
import Icon from './Icon.vue'
import Popover from './Popover.vue'
import useBubbleMenu, { type BubbleMenuItem } from '../hooks/useBubbleMenu'
import useLinkSet from '../hooks/useLinkSet'

const props = defineProps<{
  editor: Editor
  disabled?: boolean
  items: BubbleMenuItem[]
}>()

// const { BubbleMenu, items, tableItems, tippyOptions, isSelectedCell, shouldShow } =
//   useBubbleMenu(props)

const { setLinkConfirm, isLinkActive, linkValue, showLink } = useLinkSet(props)
</script>

<template>
  <span
    v-for="item in items"
    :key="item.title"
    class="item"
    :class="
      item.class +
        ' ' +
        (editor?.isActive(item.name || 'xxx') ? 'active' : '') +
        ' ' +
        (disabled ? 'disabled' : '')
    "
    :title="item.title"
    @click="
      () => {
        if (disabled) {
          return
        }
        if (item.name !== 'link') {
          item.action?.()
        } else {
          showLink = true
        }
      }
    "
  >
    <Popover
      v-if="item.hasArrow && item.name"
      :options="item.options"
      :editor="editor"
      :name="item.name"
      :style="{ 'pointer-events': disabled }"
    >
      <Icon :type="item.iconType" />
      <Icon
        class="arrow"
        type="at-small-down"
      />
    </Popover>

    <Icon
      v-else
      :type="item.iconType"
    />
  </span>
</template>
<!-- <div v-if="isLinkActive || showLink" class="link-input-wrapper">
    <input
      v-model="linkValue"
      type="text"
      placeholder="输入链接地址"
      @keyup.enter="setLinkConfirm" />
    <Icon class="link-style" type="at-ok" @click="setLinkConfirm" />
  </div> -->

<style lang="less" scoped>
// .link-input-wrapper {
//   margin-top: 10px;
//   // .wrapper;
//   height: 36px;
//   width: 300px;
//   display: flex;
//   align-items: center;
//   padding: 0 4px;
//   // justify-content: center;
//   input {
//     outline: none;
//     flex: 1;
//     height: 28px;
//     padding: 0 5px;
//     border: 1px solid #e5e5e5;
//     background-color: #f7f7f7;
//     font-size: 0.8125rem;
//     color: #1b9aee;
//     border-radius: 2px;
//   }
//   .link-style {
//     margin: 0 5px 0 8px;
//     cursor: pointer;
//     font-size: 20px;
//     &:hover {
//       color: #3a38b9;
//     }
//   }
// }

.item {
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
  color: #333;
  border: none;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  position: relative;
  &:hover {
    background-color: rgba(13, 179, 166, 0.1);
    color: #4C7DFF;
    transition: all 0.15s ease-out;
  }
  &.del {
    &:hover:not(.disabled) {
      color: red !important;
    }
  }
  &.active {
    background-color: rgba(13, 179, 166, 0.1);
    color: #4C7DFF;
  }
  &.disabled {
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }

  .icon {
    font-size: 20px;
  }
}
</style>

<style lang="less">
.has-icon {
  > span {
    padding-left: 4px;
    display: inline-flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }
}
</style>
