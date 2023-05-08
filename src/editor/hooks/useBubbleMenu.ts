import { BubbleMenu, type Editor } from '@tiptap/vue-3'
import { computed } from 'vue'
import type { OptionMenuItem } from '../types/index.d'
// import { showLink } from './useLinkSet'

// 气泡菜单元素
export interface BubbleMenuItem {
  iconType: string
  title: string
  class?: string
  name?: string
  hasArrow?: boolean
  options?: OptionMenuItem[]
  action?: () => void
}

// tippy 的配置项
const tippyOptions = {
  duration: 100,
  delay: 0,
  appendTo: document.body,
}

const useBubbleMenu: (editor: Editor) => any = (editor: Editor) => {
  // 注入菜单项
  const { items, tableItems } = injectMenuItems(editor)

  // 判断是否为表格选中
  const isSelectedCell = computed(() => {
    return (
      '$anchorCell' in (editor?.state.selection as any) ||
      // @ts-ignore
      // TODO 解决上面的ts报错
      editor?.state.selection.$anchor.path?.some(item => item?.type?.name === 'table')
    )
  })

  return {
    tippyOptions,
    items,
    tableItems,
    BubbleMenu,
    // shouldShow,
    isSelectedCell,
  }
}

// function shouldShow(editor: Editor) {
//   if (editor.isActive('codeBlock') || editor.isActive('docTitle')) {
//     return false
//   }

//   return editor.isActive('table')
// }

function injectMenuItems(editor: Editor) {
  const items: BubbleMenuItem[] = [
    {
      name: 'paragraph',
      iconType: 'at-paragraph',
      title: '段落',
      action: () => {
        editor?.chain().focus().setParagraph().run()
      },
    },
    {
      name: 'heading1',
      iconType: 'at-h1',
      title: '大标题',
      action: () => {
        editor?.chain().focus().setHeading({ level: 1 }).run()
      },
    },
    {
      name: 'heading2',
      iconType: 'at-h2',
      title: '中标题',
      action: () => {
        editor?.chain().focus().setHeading({ level: 2 }).run()
      },
    },
    {
      name: 'heading3',
      iconType: 'at-h3',
      title: '小标题',
      action: () => {
        editor?.chain().focus().setHeading({ level: 3 }).run()
      },
    },
    {
      name: 'blockquote',
      iconType: 'at-blockquote',
      title: '引用',
      action: () => {
        editor?.chain().focus().toggleBlockquote().run()
      },
    },
    {
      name: 'bulletList',
      iconType: 'at-ul',
      title: '无序列表',
      action: () => {
        editor?.chain().focus().toggleBulletList().run()
      },
    },
    {
      name: 'orderedList',
      iconType: 'at-ol',
      title: '有序列表',
      action: () => {
        editor?.chain().focus().toggleOrderedList().run()
      },
    },
    {
      name: 'taskList',
      iconType: 'at-checkbox',
      title: '检查列表',
      action: () => {
        editor?.chain().focus().toggleTaskList().run()
      },
    },
    {
      name: 'codeBlock',
      iconType: 'at-code',
      title: '代码块',
      action: () => {
        editor?.chain().focus().toggleCodeBlock({ language: 'auto' }).run()
      },
    },
    {
      name: 'bold',
      iconType: 'at-bold',
      title: '加粗',
      action: () => {
        editor?.chain().focus().toggleBold().run()
      },
    },
    {
      name: 'italic',
      iconType: 'at-italic',
      title: '斜体',
      action: () => {
        editor?.chain().focus().toggleItalic().run()
      },
    },
    {
      name: 'underline',
      iconType: 'at-underline',
      title: '下划线',
      action: () => {
        editor?.chain().focus().toggleUnderline().run()
      },
    },
    {
      name: 'strike',
      iconType: 'at-strikethrough',
      title: '删除线',
      action: () => {
        editor?.chain().focus().toggleStrike().run()
      },
    },
    {
      name: 'link',
      iconType: 'at-link',
      title: '链接',
      // action() {
      //   editor
      //     ?.chain()
      //     .focus()
      //     .toggleLink({ href: editor?.getAttributes('link').href || 'http://' })
      //     .run()
      // },
    },
    {
      name: 'code',
      iconType: 'at-code',
      title: '行内代码',
      action: () => {
        editor?.chain().focus().toggleCode().run()
      },
    },
    {
      name: 'textAlign',
      iconType: 'at-align-left',
      class: 'has-icon',
      hasArrow: true,
      title: '对齐方式',
      options: [
        {
          label: '居左对齐',
          value: 'left',
          iconType: 'at-align-left',
          action() {
            editor?.chain().focus().setTextAlign('left').run()
          },
        },
        {
          label: '居中对齐',
          value: 'center',
          iconType: 'at-align-center',
          action() {
            editor?.chain().focus().setTextAlign('center').run()
          },
        },
        {
          label: '居右对齐',
          value: 'right',
          iconType: 'at-align-right',
          action() {
            editor?.chain().focus().setTextAlign('right').run()
          },
        },
      ],
    },
    {
      name: 'color',
      iconType: 'at-font-color',
      class: 'has-icon',
      hasArrow: true,
      title: '字体颜色',
      options: [
        {
          label: '重置',
          value: 'inherit',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().unsetColor().run()
          },
        },
        {
          label: '中灰',
          value: 'rgb(140, 140, 140)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(140, 140, 140)').run()
          },
        },
        {
          label: '浅灰',
          value: 'rgb(191, 191, 191)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(191, 191, 191)').run()
          },
        },
        {
          label: '白色',
          value: 'rgb(255, 255, 255)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(255, 255, 255)').run()
          },
        },
        {
          label: '红色',
          value: 'rgb(230, 36, 18)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(230, 36, 18)').run()
          },
        },
        {
          label: '橙色',
          value: 'rgb(250, 140, 21)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(250, 140, 21)').run()
          },
        },
        {
          label: '黄色',
          value: 'rgb(250, 212, 20)',
          iconType: 'at-paragraph',

          action() {
            editor?.chain().focus().setColor('rgb(250, 212, 20)').run()
          },
        },
        {
          label: '绿色',
          value: 'rgb(47, 189, 179)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(47, 189, 179)').run()
          },
        },
        {
          label: '青色',
          value: 'rgb(27, 154, 238)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(27, 154, 238)').run()
          },
        },
        {
          label: '紫色',
          value: 'rgb(110, 116, 224)',
          iconType: 'at-paragraph',
          action() {
            editor?.chain().focus().setColor('rgb(110, 116, 224)').run()
          },
        },
      ],
    },
    {
      name: 'highlight',
      iconType: 'at-palette',
      class: 'has-icon',
      hasArrow: true,
      title: '文本高亮',
      options: [
        {
          label: '重置',
          value: 'inherit',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().unsetHighlight().run()
          },
        },
        {
          label: '中灰',
          value: 'rgb(140, 140, 140)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(140, 140, 140)' }).run()
          },
        },
        {
          label: '浅灰',
          value: 'rgb(191, 191, 191)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(191, 191, 191)' }).run()
          },
        },
        {
          label: '红色',
          value: 'rgb(230, 36, 18)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(230, 36, 18)' }).run()
          },
        },
        {
          label: '橙色',
          value: 'rgb(250, 140, 21)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(250, 140, 21)' }).run()
          },
        },
        {
          label: '黄色',
          value: 'rgb(250, 212, 20)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(250, 212, 20)' }).run()
          },
        },
        {
          label: '绿色',
          value: 'rgb(47, 189, 179)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(47, 189, 179)' }).run()
          },
        },
        {
          label: '青色',
          value: 'rgb(27, 154, 238)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(27, 154, 238)' }).run()
          },
        },
        {
          label: '紫色',
          value: 'rgb(110, 116, 224)',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setHighlight({ color: 'rgb(110, 116, 224)' }).run()
          },
        },
      ],
    },
    {
      name: 'table',
      iconType: 'at-table',
      title: '创建表格',
      action() {
        editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: false }).run()
      },
    },
    {
      name: 'xxxx',
      iconType: 'at-eraser',
      title: '清除格式',
      class: 'left-border',
      options: [],
      action() {
        editor?.chain().focus().unsetAllMarks().run()
      },
    },
  ]

  const tableItems: BubbleMenuItem[] = [
    {
      title: '拆分或合并单元格',
      iconType: 'at-merge',
      class: 'has-icon',
      action() {
        editor?.chain().focus().mergeOrSplit().run()
      },
    },
    {
      title: '往前增加列',
      iconType: 'at-insert-right',
      action() {
        editor?.chain().focus().addColumnBefore().run()
      },
    },
    {
      title: '往后增加列',
      iconType: 'at-insert-left',
      action() {
        editor?.chain().focus().addColumnAfter().run()
      },
    },
    {
      title: '删除列',
      iconType: 'at-delete-col',
      class: 'del',
      action() {
        editor?.chain().focus().deleteColumn().run()
      },
    },
    {
      title: '往前增加行',
      iconType: 'at-insert-bottom',
      action() {
        editor?.chain().focus().addRowBefore().run()
      },
    },
    {
      title: '往后增加行',
      iconType: 'at-insert-top',
      action() {
        editor?.chain().focus().addRowAfter().run()
      },
    },
    {
      title: '删除行',
      class: 'del',
      iconType: 'at-delete-row',
      action() {
        editor?.chain().focus().deleteRow().run()
      },
    },
    {
      title: '切换表头列',
      iconType: 'at-table-left',
      action() {
        editor?.chain().focus().toggleHeaderColumn().run()
      },
    },
    {
      title: '切换表头行',
      iconType: 'at-table-top',
      action() {
        editor?.chain().focus().toggleHeaderRow().run()
      },
    },
    {
      title: '切换表头单元格',
      iconType: 'at-toggle-header',
      action() {
        editor?.chain().focus().toggleHeaderCell().run()
      },
    },
    {
      name: 'textAlign',
      title: '居中对齐',
      iconType: 'at-align-center',
      class: 'has-icon',
      hasArrow: true,
      options: [
        {
          label: '居左对齐',
          value: 'left',
          iconType: 'at-align-left',
          action() {
            editor?.chain().focus().setTextAlign('left').run()
          },
        },
        {
          label: '居中对齐',
          value: 'center',
          iconType: 'at-align-center',
          action() {
            editor?.chain().focus().setTextAlign('center').run()
          },
        },
        {
          label: '居右对齐',
          value: 'right',
          iconType: 'at-align-right',
          action() {
            editor?.chain().focus().setTextAlign('right').run()
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      title: '设置表格背景色',
      iconType: 'at-palette',
      class: 'has-icon',
      hasArrow: true,
      options: [
        {
          label: '重置',
          value: 'inherit',
          iconType: 'at-palette',
          action() {
            editor?.chain().focus().setCellAttribute('backgroundColor', 'inherit').run()
          },
        },
        {
          label: '浅灰',
          value: 'rgba(191, 191, 191, 0.1)',
          iconType: 'at-palette',
          action() {
            editor
              ?.chain()
              .focus()
              .setCellAttribute('backgroundColor', 'rgba(191, 191, 191, 0.1)')
              .run()
          },
        },
        {
          label: '浅红',
          value: 'rgba(230, 36, 18, 0.1)',
          iconType: 'at-palette',
          action() {
            editor
              ?.chain()
              .focus()
              .setCellAttribute('backgroundColor', 'rgba(230, 36, 18, 0.1)')
              .run()
          },
        },
        {
          label: '浅橙',
          value: 'rgba(250, 140, 21, 0.1)',
          iconType: 'at-palette',
          action() {
            editor
              ?.chain()
              .focus()
              .setCellAttribute('backgroundColor', 'rgba(250, 140, 21, 0.1)')
              .run()
          },
        },
        {
          label: '浅黄',
          value: 'rgba(250, 212, 20, 0.1)',
          iconType: 'at-palette',
          action() {
            editor
              ?.chain()
              .focus()
              .setCellAttribute('backgroundColor', 'rgba(250, 212, 20, 0.1)')
              .run()
          },
        },
        {
          label: '浅绿',
          value: 'rgba(47, 189, 179, 0.1)',
          iconType: 'at-palette',
          action() {
            editor
              ?.chain()
              .focus()
              .setCellAttribute('backgroundColor', 'rgba(47, 189, 179, 0.1)')
              .run()
          },
        },
        {
          label: '浅蓝',
          value: 'rgba(27, 154, 238, 0.1)',
          iconType: 'at-palette',
          action() {
            editor
              ?.chain()
              .focus()
              .setCellAttribute('backgroundColor', 'rgba(27, 154, 238, 0.1)')
              .run()
          },
        },
        {
          label: '浅紫',
          value: 'rgba(110, 116, 224, 0.1)',
          iconType: 'at-palette',
          action() {
            editor
              ?.chain()
              .focus()
              .setCellAttribute('backgroundColor', 'rgba(110, 116, 224, 0.1)')
              .run()
          },
        },
      ],
    },
    {
      title: '删除表格',
      iconType: 'at-del',
      class: 'del',
      action() {
        editor?.chain().focus().deleteTable().run()
      },
    },
  ]

  return { items, tableItems }
}

export default useBubbleMenu
