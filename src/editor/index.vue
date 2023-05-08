<script lang="ts" setup>
import './assets/styles/editor.less'
import './icon.js'
import { onBeforeUnmount, onMounted, watch, ref, type Ref } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import BubbleMenu from './components/BubbleMenu.vue'
import document from './extensions/document'
import gapCursor from './extensions/gapCursor'
import history from './extensions/history'
import placeholder from './extensions/placeholder'
import heading from './extensions/heading'
import text from './extensions/text'
import paragraph from './extensions/paragraph'
import docTitle from './extensions/docTitle'
import focus from './extensions/focus'
import code from './extensions/code'
import bold from './extensions/bold'
import highlight from './extensions/hightlight'
import italic from './extensions/italic'
import strike from './extensions/strike'
import underline from './extensions/underline'
import subScript from './extensions/subScript'
import superScript from './extensions/superScript'
import color from './extensions/color'
import textStyle from './extensions/textStyle'
import blockquote from './extensions/blockquote'
import table from './extensions/table'
import tableRow from './extensions/tableRow'
import tableCell from './extensions/tableCell'
import tableHeader from './extensions/tableHeader'
import textAlign from './extensions/textAlign'
import taskList from './extensions/taskList'
import taskItem from './extensions/taskItem'
import bulletList from './extensions/bulletList'
import listItem from './extensions/listItem'
import orderedList from './extensions/orderedList'
import codeBlockLowlight from './extensions/codeBlockLowlight'
import trailingNode from './extensions/trailingNode'
import horizontalRule from './extensions/horizontalRule'
import link from './extensions/link'
import useBubbleMenu, { type BubbleMenuItem } from './hooks/useBubbleMenu'

const props = withDefaults(
  defineProps<{
    content?: string
    editable?: boolean
  }>(),
  {
    content: '',
    editable: false,
  },
)

const emits = defineEmits<{
  (e: 'update', content: string): void
}>()

const editor = useEditor({
  content: '',
  // autofocus: 'end',
  extensions: [
    document,
    history,
    focus,
    gapCursor,
    text,
    paragraph,
    heading,
    placeholder,
    docTitle,
    code,
    bold,
    highlight,
    italic,
    strike,
    underline,
    subScript,
    superScript,
    color,
    textStyle,
    blockquote,
    table,
    tableRow,
    tableCell,
    tableHeader,
    textAlign,
    taskList,
    taskItem,
    bulletList,
    listItem,
    orderedList,
    codeBlockLowlight,
    trailingNode,
    link,
    horizontalRule,
  ],

  onUpdate() {
    emits('update', editor.value?.getHTML() || '')
  },

  // onBlur() {
  //   // console.log('blur')
  //   // TODO 一个临时的解决方案，现在编辑器的更新是通过 blur，但 BubbleMenu 会触发 blur，所以这样延时并判断是否重新回到 focus 状态
  //   // 注意 useOperBtn 中 preview 的timeout值要大于这里的值
  //   setTimeout(() => {
  //     if (!editor.value?.isFocused) {
  //       emits('blur', editor.value?.getHTML() || props.content)
  //     }
  //   }, 100)
  // },

})

onMounted(() => {
  editor.value?.commands.setContent(props.content)
  editor.value?.setEditable(props.editable)

  if (editor.value) {
    const res = useBubbleMenu(editor.value)
    items.value = res.items
    tableItems.value = res.tableItems
    isSelectedCell = res.isSelectedCell
  }
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

watch(
  () => props.editable,
  editable => {
    // console.log('watch editable', editable)
    editor.value?.setEditable(props.editable)

    if (editable) {
      editor.value?.commands.focus('start')
    }
  },
)

const items = ref<BubbleMenuItem[]>([])
const tableItems = ref<BubbleMenuItem[]>([])
let isSelectedCell: Ref<boolean>

// 确保执行后聚焦
const ensureFocus = () => {
  editor.value?.commands.focus()
}
</script>

<template>
  <div
    v-if="editable"
    class="oper-header"
    @click="ensureFocus"
  >
    <BubbleMenu
      v-if="editor"
      :items="items"
      :editor="editor"
    />
    <BubbleMenu
      v-if="editor"
      :items="tableItems"
      :editor="editor"
      :disabled="!isSelectedCell"
    />
  </div>

  <div class="editor-wrapper">
    <EditorContent :editor="editor" />
  </div>
</template>

<style scoped lang="less">
.oper-header {
  border-bottom: 1px solid #f0f0f0;
  padding: 5px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: flex-start;
}
.editor-wrapper {
  padding: 0 10px;
  flex: 1;
  :deep(>div) {
    height: 100%;
    .ProseMirror {
      height: 100%;
    }
  }
}
</style>
