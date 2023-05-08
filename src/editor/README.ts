export default `
<doc-title>编辑器使用指南</doc-title>

<h2>1. 关于</h2>

这是一个基于 tiptap 的 Vue3 富文本编辑器，支持 markdown 语法。集成了思维导图、流程图、表格等组件，编辑时可以使用快捷键或者快捷输入命令，这篇文档主要就是讲编辑器的用法和快捷键。

<h2>2. 使用指南</h2>

<h3>2.1 段落</h3>

<code>Enter</code> 换行默认为段落，无快捷键，快捷输入为：<code>Ctrl + Alt + 0</code>。

<h3>2.2 标题</h3>

分三级：大标题 <code>h1</code>，中标题 <code>h2</code>，小标题 <code>h3</code>。快捷键：<code>Ctrl + Alt + 1|2|3</code>，快捷输入：<code>#</code>、<code>##</code>、<code>###</code>。

注意：出来文档标题外，大标题、中标题、小标题都可以设置样式，比如：字体颜色、下划线、背景色等。

<h3>2.3 行内代码</h3>

<p>快捷键：<code>Ctrl + e</code>，快捷输入：<code>\`xxx\`</code>。</p>

<h3>2.4 加粗</h3>

加粗文本，效果类似 <strong>这样</strong>，快捷键：<code>Ctrl + b</code>，快捷输入：<code>**xxx**</code> 或 <code>__xxx__</code>。

<h3>2.5 高亮</h3>

<p>目前只支持<mark>单色高亮</mark>，后面会扩展出一个取色板。快捷键：<code>Ctrl + Shift + H</code>，快捷输入：<code>==xxx==</code>。</p>

<h3>2.6 斜体</h3>

<p>可以让<strong><em>文字倾斜</em></strong>，快捷键：<code>Ctrl + i</code>，快捷输入：<code>*xxx*</code>或<code>_xxx_</code>。</p>

<h3>2.7 超链接</h3>

<p><mark>待补充</mark></p>

<p>
	<a href="http://www.baidu.com">Baidu</a>
</p>

<h3>2.8 删除线</h3>

<p>类似这样：<s>$998.88</s>，快捷键：<code>Ctrl + Shift + X</code>，快捷输入：<code>~~xxx~~</code>。</p>

<h3>2.9 下划线</h3>

<p>类似这样：<u>Hello, World!</u>，快捷键：<code>Ctrl + U</code>，快捷输入：无。</p>

<h3>2.10 下标</h3>

<p>
  类似这样：log<sub>n</sub>10，快捷键：<code>Ctrl + ,</code>。
</p>

<h3>2.11 上标</h3>

<p>
  类似这样：x<sup>2</sup> + y<sup>2</sup> = 13，快捷键：<code>Ctrl + '</code>。
</p>

<h3>2.12 文本颜色</h3>

<p><span style="color: #6e74e0">目前仅支持改成紫色，后面会扩展出一个取色板。</span>这是一个没有快捷键，没有快捷输入命令的功能，只会在选中时，在气泡弹框中设置。因为这种样式要求的使用场景较低。</p>

<h3>2.13 引用</h3>

<blockquote>
	引用别人的话时使用，快捷键：<code>Ctrl + Shift + B</code>；快捷输入：<code>></code>。
</blockquote>

<h3>2.14 表格</h3>

<p>tiptap 的表格基本不能用，所以进行了深度封装。</p>

<table>
  <tbody> 
		<tr>
			<th>第1列</th>
			<th>第2列</th>
			<th>第3列</th>
			<th>第4列</th>
		</tr>
    <tr>
      <td>Cyndi Lauper</td>
      <td>singer</td>
      <td>songwriter</td>
      <td>actress</td>
    </tr>
    <tr>
      <td>Cyndi Lauper</td>
      <td>singer</td>
      <td>songwriter</td>
      <td>actress</td>
    </tr>
  </tbody>
</table>

<h3>2.15 检查列表</h3>

<p>作用类似 Todo List，快捷输入：<code>[]</code>或<code>[x]</code>。</p>

<ul data-type="taskList">
  <li data-type="taskItem">吃饭</li>
  <li data-type="taskItem">睡觉</li>
  <li data-checked="true" data-type="taskItem">打豆豆</li>
</ul> 

<h3>2.16 无序列表</h3>

快捷输入：<code>+</code>、<code>-</code>、<code>*</code>。

<ul>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>Rust</li>
</ul>

<h3>2.17 有序列表</h3>

<p>快捷输入：<code>1.</code>。</p>

<ol>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>Rust</li>
</ol>

<h3>2.18 代码块</h3>

<p>快捷输入：<code>\`\`\`javascript</code></p>

<pre><code class="language-typescript">import { createApp } from 'vue'
import Editor from '@/editor/index.vue'

const app = createApp(Editor)

app.config.unwrapInjectedRef = true

app.mount('#app')</code></pre>

<p>
  <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.google.com/">hello, world</a>
</p>

<aite>123</aite>

`
