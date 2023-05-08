import type { Editor } from '@tiptap/vue-3'
import { computed, ref, watch } from 'vue'

export const showLink = ref(false)

export default (props: { editor: Editor | undefined }) => {
  const linkValue = ref('')

  const setLinkConfirm = () => {
    const href = linkValue.value.trim()
    props.editor
      ?.chain()
      .focus()
      .setLink({ href })
      .setTextSelection(props.editor?.state.selection.to)
      .run()
  }

  // 判断是否选中链接
  const isLinkActive = computed(() => {
    return props.editor?.isActive('link')
  })

  watch(
    () => props.editor?.state,
    () => {
      if (isLinkActive.value) {
        linkValue.value = props.editor?.getAttributes('link').href
      } else {
        linkValue.value = 'http://'
      }

      showLink.value = false
    },
  )
  return {
    setLinkConfirm,
    isLinkActive,
    linkValue,
    showLink,
  }
}
