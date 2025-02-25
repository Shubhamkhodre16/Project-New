"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import { Button, Box } from "@mui/material";
import { FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material";

const TipTap = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML()); // Save the HTML content
    },
  });

  if (!editor) return null;

  return (
    <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2 }}>
      {/* Toolbar */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Button onClick={() => editor.chain().focus().toggleBold().run()} variant={editor.isActive("bold") ? "contained" : "outlined"}>
          <FormatBold />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()} variant={editor.isActive("italic") ? "contained" : "outlined"}>
          <FormatItalic />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleUnderline().run()} variant={editor.isActive("underline") ? "contained" : "outlined"}>
          <FormatUnderlined />
        </Button>
      </Box>

      {/* Editor Content */}
      <EditorContent editor={editor} style={{ minHeight: "150px", border: "1px solid #ddd", padding: "10px", borderRadius: "4px" }} />
    </Box>
  );
};

export default TipTap;
