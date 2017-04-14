var wrapper = document.querySelector('#wrapper');

var examples =
`Heading
=======

Sub-heading
-----------

List:

* Paragraphs are separated by a blank line.
* Leave 2 spaces at the end of a line to do a  
line break.
* You can write text [with links](http://example.com) inline or [link references][1].
  * Two spaces before the star for sublist.
[1]: http://example.com "Hover text in quotes after url"

Numbered list:

1. Images link like this: ![Avatar](https://avatars3.githubusercontent.com/u/22402899?v=3&s=40)
1. One _thing_ has *em*phasis.
2. Two __things__ are **bold**.
2. \\ escapes like \\*this\\*.
3. \`Monospace\`, ~~strikethrough~~.

---

> All things are subject to interpretation. Whichever interpretation prevails at a given time is a function of **power** and not truth.
> \\- *Friedrich Nietzsche*

### Tables
| Creator | Repo | Demo |
| --- | --- | --- |
| [Fraasi](https://github.com/fraasi) | [Markdown Previewer](https://github.com/Fraasi/Markdown-previewer) | [Live Demo](https://fraasi.github.io/Markdown-previewer) |`;


class Boxes extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { rawMarkdown: examples };
	};

	markedState() {
		return { __html: marked(this.state.rawMarkdown) };
	};
	
	handleChange(e) {
		this.setState({ rawMarkdown: e.target.value });
	};
	
	render() {

		return React.createElement(
			'div', null,
				React.createElement(
					'textarea',
					{
						className: 'left',
						defaultValue: this.state.rawMarkdown,
						onChange: this.handleChange
					}
				),
				React.createElement(
					'div',
					{
						className: 'right',
						dangerouslySetInnerHTML: this.markedState()
					}
				)
		)
	};
};

class Editor extends React.Component {
	render() {
		return React.createElement(
		'div',
		{ className: 'root'},
			React.createElement(
			'h2',
			{ className: 'title' },
			'Live Markdown Previewer'
			),
			React.createElement(
			'p', 
			{ className: 'titleP' },
			'< Write here  |  Preview here >'
			),
			React.createElement(
				Boxes
			)		
		)
	}
};
		
ReactDOM.render(React.createElement(Editor, null), wrapper);
