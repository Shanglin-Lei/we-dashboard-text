import Table from '@tiptap/extension-table'
import '../assets/styles/table.less'

export default Table.configure({
  resizable: true,
  handleWidth: 5,
  lastColumnResizable: false,
})
