import Code from '@tiptap/extension-code'
import '../assets/styles/code.less'

export default Code.configure({
  HTMLAttributes: {
    class: 'inline-code',
  },
})
