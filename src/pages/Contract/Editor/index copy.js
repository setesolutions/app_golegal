import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// import * as Icons from 'images/icons';
import { Container } from './styles';

class ComponentEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange: Function = editorState => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="rdw-editor-main">
        <Editor
          editorState={editorState}
          toolbarClassName="rdw-editor-toolbar"
          wrapperClassName="rdw-editor-wrapper"
          editorClassName="rdw-editor-main"
          onEditorStateChange={this.onEditorStateChange}
          localization={{
            locale: 'pt',
          }}
        />
        {/*         <textarea
          readOnly
          className="rdw-storybook-textarea"
          value={JSON.stringify(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}

export default ComponentEditor;

/* export default function ComponentEditor() {
  return (



  );
} */
