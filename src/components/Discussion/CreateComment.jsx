import { useState, useRef } from "react";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [link, setLink] = useState("");
    const [picture, setPicture] = useState("");
    const [post, setPost] = useState([]);

    const textAreaRef = useRef(null);

    const insertFormatting = (formatType) => {
        const textarea = textAreaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = bodyText;

        let newText, selected = text.slice(start, end);

        switch (formatType) {
            case "bold":
                newText = text.slice(0, start) + `**${selected || "bold"}**` + text.slice(end);
                break;
            case "italic":
                newText = text.slice(0, start) + `*${selected || "italic"}*` + text.slice(end);
                break;
            case "code":
                newText = text.slice(0, start) + `\`${selected || "code"}\`` + text.slice(end);
                break;
            default:
                return;
        }

        setBodyText(newText);

        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + 2, start + 2 + (selected || formatType).length);
        }, 0);
    };

    const handleSubmit = () => {
        if (title.trim() === "" || bodyText.trim() === "") return;
        setPost([{ title, bodyText, link, picture }, ...post]);
        setTitle("");
        setBodyText("");
        setLink("");
        setPicture("");
    };

    return (
        <div className="max-w-[1720px] bg-[#EEFFF7] px-6 md:px-[40px] py-[32px] ">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Post</h1>

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/*<div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => insertFormatting("bold")}
                        className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
                    >
                        Bold
                    </button>
                    <button
                        type="button"
                        onClick={() => insertFormatting("italic")}
                        className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
                    >
                        Italic
                    </button>
                    <button
                        type="button"
                        onClick={() => insertFormatting("code")}
                        className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
                    >
                        Code
                    </button>
                </div>*/}

                <textarea
                    ref={textAreaRef}
                    placeholder="Write your content here..."
                    className="w-full min-h-[150px] p-4 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none"
                    value={bodyText}
                    onChange={(e) => setBodyText(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Link URL"
                    className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:outline-none"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />

                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        onChange={(e) => setPicture(e.target.files[0]?.name || "")}
                    />
                </div>
            </div>

            <div className="mt-6 text-right">
                <button
                    className="px-6 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-green-600 transition cursor-pointer"
                    onClick={handleSubmit}
                >
                    Post
                </button>
                
            </div>
        </div>
        </div>
    );
}
