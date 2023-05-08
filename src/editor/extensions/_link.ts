import { Node, VueNodeViewRenderer, mergeAttributes } from '@tiptap/vue-3'
import LinkNode from '../components/_LinkNode.vue'
import '../assets/styles/link.less'

export default Node.create({
  name: 'link',

  group: 'inline',

  inline: true,

  content: 'text*',

  selectable: true,

  addNodeView() {
    return VueNodeViewRenderer(LinkNode)
  },

  parseHTML() {
    return [{ tag: 'a' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['a', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },
})
