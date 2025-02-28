import { DisplayMessage } from "@/types";
import React, { useMemo, ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { preprocessLaTeX, renderCitations } from "@/utilities/formatting";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeProps extends ComponentProps<"code"> {
  node?: any;
}

const CodeBlock: React.FC<CodeProps> = ({ children, className, ...rest }) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      className="rounded-xl"
      language={match[1]}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
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
