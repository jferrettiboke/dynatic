import marked from 'marked';
import hljs from 'highlight.js';

export function rawMarkup (text) {
  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  var renderer = new marked.Renderer();

  renderer.table = function (header, body) {
    return `
      <table class="table">
        ${header}
        ${body}
      </table>
    `;
  };

  renderer.image = function (href, title, text) {
    return `<img class="img-fluid" src="${href}" title="${title}" alt="${title}"`;
  };

  var rawMarkup = marked(text, {renderer: renderer});

  return { __html: rawMarkup };
}
