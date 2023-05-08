import { Node, mergeAttributes } from '@tiptap/vue-3'
import '../assets/styles/docTitle.less'

export interface DocTitleOptions {
  HTMLAttributes: Record<string, any>
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    docTitle: {
      setDocTitle: () => ReturnType
    }
  }
}

export default Node.create<DocTitleOptions>({
  name: 'docTitle',

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  content: 'text*',

  marks: '',

  parseHTML() {
    return [{ tag: 'div' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },
}).configure({
  HTMLAttributes: {
    class: 'doc-title',
  },
})
