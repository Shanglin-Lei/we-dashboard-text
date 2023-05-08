import Placeholder from '@tiptap/extension-placeholder'
import '../assets/styles/placeholder.less'

export default Placeholder.configure({
  showOnlyCurrent: false,
  showOnlyWhenEditable: false,
  includeChildren: true,

  placeholder: ({ node }) => {
    if (node.type.name === 'docTitle') {
      return '标题'
    }

    return ''
  },
})
