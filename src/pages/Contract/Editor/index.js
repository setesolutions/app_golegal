import React, { Component } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

// import * as Icons from 'images/icons';
import { Container } from './styles';

function handleDrop(event) {
  console.tron.log('Juca'); // Get the drop event
}

const buttons = [
  ['undo', 'redo'],
  ['font', 'fontSize', 'formatBlock'],
  ['paragraphStyle'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['fontColor', 'hiliteColor', 'textStyle'],
  ['removeFormat'],
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list', 'lineHeight'],
  ['table', 'link', 'image', 'video'],
  ['fullScreen'],
  ['preview', 'print'],
];

class ComponentEditor extends Component {
  render() {
    return (
      <SunEditor
        lang="pt_br"
        setOptions={{
          height: 400,
          width: 800,
          buttonList: buttons,
          placeholder: 'Arraste as cláusulas para cá',
        }}
      />
    );
  }
}

export default ComponentEditor;

/* export default function ComponentEditor() {
  return (



  );
} */
