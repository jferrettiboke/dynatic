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
  var rawMarkup = marked(text, {sanitize: true, renderer: renderer});
  return { __html: rawMarkup };
}
