import { DisplayMessage } from "@/types";
import React, { useMemo, ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { preprocessLaTeX, renderCitations } from "@/utilities/formatting";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // Choose your preferred theme

interface CodeProps extends ComponentProps<"code"> {
  node?: any;
  inline?: boolean;
  className?: string;
}

const CodeBlock: React.FC<CodeProps> = (props) => {
  const { className, inline, children, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");

  if (inline || !match) {
    return (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      {...rest}
      style={vscDarkPlus} // Syntax highlighting theme
      language={match[1]}
      PreTag="pre" // Using 'pre' instead of 'div' for better code block structure
      className="rounded-xl"
    >
      {String(children).trim()}
    </SyntaxHighlighter>
  );
};

export function Formatting({ message }: { message: DisplayMessage }) {
  const processedContent = useMemo(() => preprocessLaTeX(message.content), [message.content]);

  const components = {
    code: CodeBlock,
    p: ({ children }: { children: React.ReactNode }) => (
      message.citations ? renderCitations(children, message.citations) : <p>{children}</p>
    ),
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components}
      className="gap-3 flex flex-col"
    >
      {processedContent}
    </ReactMarkdown>
  );
}
