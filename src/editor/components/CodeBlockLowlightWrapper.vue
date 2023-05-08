<script lang="ts" setup>
import { ref, computed } from 'vue'
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
const props = defineProps(nodeViewProps)

const languages = ref(props.extension.options.lowlight.listLanguages())

const selectedLanguage = computed({
  get() {
    return props.node.attrs.language
  },
  set(language: string) {
    props.updateAttributes({ language })
  },
})
</script>

<template>
  <NodeViewWrapper class="code-block">
    <!-- 暂时取消语言选择 -->
    <select
      v-if="false"
      v-model="selectedLanguage"
      contenteditable="false"
    >
      <option value="auto">
        auto
      </option>
      <option disabled>
        —
      </option>
      <option
        v-for="(language, index) in languages"
        :key="index"
        :value="language"
      >
        {{ language }}
      </option>
    </select>
    <pre><code><NodeViewContent as="code" /></code></pre>
  </NodeViewWrapper>
</template>

<style lang="less" scoped>
.code-block {
  position: relative;

  select {
    z-index: 10;
    position: absolute;
    width: 120px;
    top: 0.5em;
    right: 0.5em;
  }
}
</style>
