import marked from 'marked';
import hljs from 'highlight.js';

export function rawMarkup(text) {
  marked.setOptions({
    highlight: code => (
      hljs.highlightAuto(code).value
    )
  });

  const renderer = new marked.Renderer();

  renderer.table = (header, body) => (
    `
      <table class="table">
        ${header}
        ${body}
      </table>
    `
  );

  renderer.image = (href, title) => (
    `<img class="img-responsive" src="${href}" title="${title}" alt="${title}"`
  );

  return { __html: marked(text, { renderer }) };
}
