import { Plugin, Notice } from 'obsidian';

export default class QANoteStyler extends Plugin {
  async onload() {
    console.log('QA Note Styler loaded');

    // 注册命令 1：插入 Callout 风格的 QA（推荐）
    this.addCommand({
      id: 'insert-qa-callout',
      name: 'Insert QA (Callout Style)',
      editorCallback: (editor) => {
        // 要插入的模板内容
        const template = `> [!qa-q] 问题
> 在这里写下你的问题...

> [!qa-a] 答案
> 在这里写下答案...
`;
        editor.replaceSelection(template);
        new Notice('QA Template inserted!');
      }
    });

    // 注册命令 2：插入 HTML 风格的 QA（更花哨）
    this.addCommand({
      id: 'insert-qa-html',
      name: 'Insert QA (HTML Style)',
      editorCallback: (editor) => {
        const template = `<div class="qa-block">
  <div class="qa-question">在这里写下你的问题...</div>
  <div class="qa-answer">在这里写下答案...</div>
</div>`;
        editor.replaceSelection(template);
        new Notice('QA HTML Template inserted!');
      }
    });
  }

  onunload() {
    console.log('QA Note Styler unloaded');
  }
}