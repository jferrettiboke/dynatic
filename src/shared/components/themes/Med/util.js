import marked from 'marked';

export function rawMarkup (text) {
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

export function renderHighlightCode () {
  window.Prism.highlightAll();
}
