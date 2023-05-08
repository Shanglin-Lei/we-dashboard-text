<script lang="ts" setup>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'

defineProps(nodeViewProps)
</script>

<template>
  <NodeViewWrapper as="a">
    <NodeViewContent as="span" />
    <i contenteditable="false" />
  </NodeViewWrapper>
</template>
