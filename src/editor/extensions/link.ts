import Link from '@tiptap/extension-link'
import { mergeAttributes } from '@tiptap/vue-3'
import '../assets/styles/link.less'

export default Link.extend({
  priority: 1100,
  // renderHTML({ HTMLAttributes }) {
  //   return [
  //     'span',
  //     HTMLAttributes,
  //     ['i', this.options.HTMLAttributes, 0],
  //     ['a', { contenteditable: false }],
  //   ]
  // },
})
