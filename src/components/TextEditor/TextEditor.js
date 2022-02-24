import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useEffect, useState} from "react";
import EditorState from "draft-js/lib/EditorState";
import './TextEditor.scss';

const TextEditor = ({value, setContent}) => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    useEffect(() => {
        console.log(editorState)
    })

    return (
        <div className="text-editor form-control">
            <header className="text-editor-header">
                Содержимое курса
            </header>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </div>
    )
}
export default TextEditor;