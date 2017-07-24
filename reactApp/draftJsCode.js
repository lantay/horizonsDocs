import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

<meta charset="utf-8" /> // eslint-disable-line

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState }); // eslint-disable-line
  }
  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('container'),
);

export default MyEditor;
