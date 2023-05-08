import { VueNodeViewRenderer } from '@tiptap/vue-3'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import html from 'highlight.js/lib/languages/xml'
import CodeBlockLowlightWrapper from '../components/CodeBlockLowlightWrapper.vue'
import '../assets/styles/codeBlockLowlight.less'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('vue', html)

export default CodeBlockLowlight.extend({
  addNodeView() {
    return VueNodeViewRenderer(CodeBlockLowlightWrapper)
  },
}).configure({
  lowlight,
  defaultLanguage: 'auto',
})
