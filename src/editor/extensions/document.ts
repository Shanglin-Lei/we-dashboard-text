import Document from '@tiptap/extension-document'
// import { Plugin, PluginKey } from 'prosemirror-state'
// import { showLink } from '../hooks/useLinkSet'

export default Document.extend({
  content: 'block+',
  addKeyboardShortcuts() {
    return {
      ...this.parent?.(),

      'Mod-\'': () => this.editor.commands.toggleSuperscript(),

      Tab: () => {
        if (this.editor.isActive('code')) {
          return this.editor.chain().toggleCode().run()
        }

        if (this.editor.isActive('codeBlock')) {
          return this.editor.chain().insertContent('  ').run()
        }

        if (this.editor.isActive('paragraph')) {
          return this.editor.chain().insertContent('\t').run()
        }

        return true
      },

      'Shift-Enter': () => {
        if (this.editor.isActive('code')) {
          return this.editor.chain().toggleCode().run()
        }

        return true
      },

      'Mod-Enter': () => {
        if (this.editor.isActive('code')) {
          return this.editor.chain().toggleCode().run()
        }

        return true
      },
    }
  },

  // addProseMirrorPlugins() {
  //   return [
  //     new Plugin({
  //       key: new PluginKey('hover'),
  //       props: {
  //         handleDOMEvents: {
  //           mouseover: (_, e) => {
  //             showLink.value = (e.target as HTMLElement)?.tagName === 'A'
  //           },
  //         },
  //       },
  //     }),
  //   ]
  // },
})
