import React, { useMemo } from 'react';
import { DisplayMessage } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { preprocessLaTeX, renderCitations } from "@/utilities/formatting";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface FormattingProps {
  message: DisplayMessage;
  className?: string;
}

export function Formatting({ message, className = "" }: FormattingProps) {
  // Process content once with useMemo to avoid unnecessary re-processing
  const processedContent = useMemo(() => 
    preprocessLaTeX(message.content), 
    [message.content]
  );

  // Define components outside the render cycle
  const components = {
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : null;
      
      return !inline && language ? (
        <div className="overflow-hidden rounded-xl my-2">
          <SyntaxHighlighter
            {...props}
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            language={language}
            style={vscDarkPlus}
            customStyle={{ margin: 0 }}
            showLineNumbers={language !== 'markdown'}
          />
        </div>
      ) : (
        <code className={`${className || ""} px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800`} {...props}>
          {children}
        </code>
      );
    },
    p: ({ children }: { children: React.ReactNode }) => {
      return message.citations ? 
        renderCitations(children, message.citations) : 
        <p>{children}</p>;
    },
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </a>
    ),
    img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img 
        src={src} 
        alt={alt || ""} 
        className="max-w-full h-auto rounded-lg my-2" 
        loading="lazy" 
        {...props} 
      />
    ),
  };

  return (
    <div className={`formatting-container ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={components as any}
        className="gap-3 flex flex-col"
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
