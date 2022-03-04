import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useEffect, useState} from "react";
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import './TextEditor.scss';

const TextEditor = ({value, setValue, title}) => {
    const [editorState, setEditorState] = useState(
        value ? () => convertContentToEditorState(value) : () => EditorState.createEmpty(),
    );

    const handleEditorChange = (state) => {
        setEditorState(state);
        let html = convertContentToHTML(state);
        setValue(html);
    }

    function convertContentToHTML(editor) {
        let currentContentAsHTML = convertToHTML(editor.getCurrentContent());
        return currentContentAsHTML;
    }

    function convertContentToEditorState(html) {
        const blocks = htmlToDraft(html);
        const { contentBlocks, entityMap } = blocks;
        const content = ContentState.createFromBlockArray(contentBlocks, entityMap);
        let currentContentAsEditorState = EditorState.createWithContent(content);
        return currentContentAsEditorState;
    }

    const createMarkup = (html) => {
        return  {
            __html: DOMPurify.sanitize(html)
        }
    }

    useEffect(() => {
        setEditorState(convertContentToEditorState(value));
        addStyleClass();
    }, [value]);

    function addStyleClass() {
        document.querySelector('.public-DraftEditor-content').classList.add('form-control');
    }

    return (
        <div className="text-editor">
            <header className="text-editor-header form-control">
                {title}
            </header>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName=""
                toolbarClassName="form-control"
            />
        </div>
    )
}
export default TextEditor;