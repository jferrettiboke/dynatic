/* eslint-disable */

import React from 'react';
import showdown from 'showdown';
import htmlparser from 'htmlparser2';

function Converter(options) {
	var self = this;

	this._converter = new showdown.Converter(options);

	this._components = {};
	for (var key in (options && options.components || {})) {
		this._components[key.toLowerCase()] = options.components[key];
	}

	this._mapElement = function(element) {
		if (element.type === 'tag') {
			var component = this._components[element.name] || element.name;
			return React.createElement(component, element.attribs, this._mapElements(element.children));
		} else if (element.type === 'text') {
			return element.data;
		} else {
			console.warn('Warning: Could not map element with type ' + element.type + ' yet.');
			return null;
		}
	};

	this._mapElements = function(elements) {
		var children = React.Children.toArray(elements.map(function(element) {
			return self._mapElement(element);
		}).filter(function(element) {
			return element;
		}));
		return children.length === 0 ? null : children;
	};

	this.convert = function(markdown) {
		var html = this._converter.makeHtml(markdown);
		var root = htmlparser.parseDOM(html, { lowerCaseAttributeNames: false });
		var reactElements = this._mapElements(root);
		if (reactElements && reactElements.length === 1) {
			return reactElements[0];
		} else {
			return React.createElement('div', null, reactElements);
		}
	};
}

const MarkdownConverter = options => (
	new Converter(options).convert(options.markdown)
);

export default MarkdownConverter;
