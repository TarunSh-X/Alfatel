"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Play, Loader2, TerminalSquare } from "lucide-react"

export interface CodeSnippet {
  label: string
  language: string
  filename: string
  code: string
}

interface CodeTerminalProps {
  snippets: CodeSnippet[]
  /** lines streamed to the output console when "Run" is pressed */
  output: string[]
}

const KEYWORDS = new Set([
  "const", "let", "var", "await", "async", "import", "from", "new", "return",
  "function", "require", "def", "print", "public", "class", "curl",
])
const NAMESPACES = new Set(["alfacall", "AlfaCall", "client", "console", "process", "env", "os"])
const METHODS = new Set([
  "calls", "messages", "numbers", "create", "search", "buy", "send", "on", "log", "environ",
])

/**
 * Single-pass tokenizer that returns React nodes.
 * Avoids dangerouslySetInnerHTML so output is deterministic (no SSR/CSR mismatch)
 * and HTML-safe by construction.
 */
function highlight(line: string): ReactNode[] {
  const nodes: ReactNode[] = []
  // Token regex: comments, strings, words, or any single other char
  const tokenRe = /(\/\/[^\n]*|#[^\n]*)|('[^']*'|"[^"]*"|`[^`]*`)|([A-Za-z_]\w*)|(\s+)|([^A-Za-z_\s])/g
  let match: RegExpExecArray | null
  let key = 0

  while ((match = tokenRe.exec(line)) !== null) {
    const [, comment, str, word, space, other] = match
    if (comment !== undefined) {
      nodes.push(<span key={key++} className="text-slate-500">{comment}</span>)
    } else if (str !== undefined) {
      nodes.push(<span key={key++} className="text-[#b89850]">{str}</span>)
    } else if (word !== undefined) {
      if (KEYWORDS.has(word)) {
        nodes.push(<span key={key++} className="text-sky-400">{word}</span>)
      } else if (NAMESPACES.has(word)) {
        nodes.push(<span key={key++} className="text-violet-400">{word}</span>)
      } else if (METHODS.has(word)) {
        nodes.push(<span key={key++} className="text-emerald-400">{word}</span>)
      } else {
        nodes.push(<span key={key++}>{word}</span>)
      }
    } else {
      nodes.push(<span key={key++}>{space ?? other}</span>)
    }
  }

  return nodes
}

export function CodeTerminal({ snippets, output }: CodeTerminalProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [running, setRunning] = useState(false)
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const active = snippets[activeTab]

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(active.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRun = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setRunning(true)
    setVisibleLines([])

    output.forEach((line, i) => {
      const t = setTimeout(
        () => {
          setVisibleLines((prev) => [...prev, line])
          if (i === output.length - 1) setRunning(false)
        },
        350 * (i + 1),
      )
      timers.current.push(t)
    })
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-[#0f2744]/10 shadow-xl bg-[#0f2744]">
      {/* Window header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0a1929]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-white/40 font-mono">{active.filename}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs text-white/70"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleRun}
            disabled={running}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#b89850] hover:bg-[#9c8144] disabled:opacity-70 transition-colors text-xs font-semibold text-[#0f2744]"
          >
            {running ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Running</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-[#0f2744]" />
                <span>Run</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Language tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#0a1929] border-b border-white/5 overflow-x-auto">
        {snippets.map((snippet, i) => (
          <button
            key={snippet.label}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-colors whitespace-nowrap ${
              activeTab === i
                ? "bg-[#0f2744] text-white"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {snippet.label}
          </button>
        ))}
      </div>

      {/* Code */}
      <div className="p-5 overflow-auto max-h-[320px]">
        <pre className="text-sm font-mono leading-7">
          <code>
            {active.code.split("\n").map((line, i) => (
              <div key={i} className="flex">
                <span className="text-white/20 w-7 text-right mr-4 select-none text-xs">{i + 1}</span>
                <span className="text-white/90 whitespace-pre">
                  {line.length === 0 ? " " : highlight(line)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Output console */}
      <div className="border-t border-white/10 bg-[#06101d]">
        <div className="flex items-center gap-2 px-5 py-2.5 border-b border-white/5">
          <TerminalSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-mono text-white/40">output</span>
        </div>
        <div className="px-5 py-4 min-h-[96px] font-mono text-xs leading-6">
          {visibleLines.length === 0 && !running ? (
            <span className="text-white/30">{'// Press "Run" to execute this example'}</span>
          ) : (
            visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-emerald-300"
              >
                <span className="text-emerald-500 select-none mr-2">{"›"}</span>
                {line}
              </motion.div>
            ))
          )}
          {running && (
            <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse align-middle" />
          )}
        </div>
      </div>
    </div>
  )
}
