import { ref } from 'vue'

const linkBubbleShow = ref(false)
const top = ref(0)
const left = ref(0)

export default () => {
  return {
    linkBubbleShow,
    top,
    left,
  }
}
