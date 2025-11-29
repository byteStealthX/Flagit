import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link2, AlertCircle, CheckCircle, XCircle } from 'lucide-react'
import { getRiskColor } from '../lib/utils'

export default function Verification() {
    const [url, setUrl] = useState('')
    const [context, setContext] = useState('')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)

    const analyzeUrl = async () => {
        if (!url) return

        setLoading(true)
        setError(null)
        setResult(null)

        try {
            const response = await fetch('http://localhost:3000/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url, context })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || data.error || 'Failed to analyze URL')
            }

            setResult(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const getRiskIcon = (level) => {
        switch (level) {
            case 'HIGH':
                return <XCircle className="h-5 w-5" />
            case 'MEDIUM':
                return <AlertCircle className="h-5 w-5" />
            case 'LOW':
                return <CheckCircle className="h-5 w-5" />
            default:
                return <AlertCircle className="h-5 w-5" />
        }
    }

    return (
        <div className="mx-auto max-w-4xl space-y-6">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold">URL Verification</h1>
                <p className="mt-2 text-muted-foreground">
                    AI-powered URL threat detection to protect you from phishing, scams, and malicious links
                </p>
            </div>

            {/* Input Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-border bg-card p-6"
            >
                <div className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium">URL to Analyze</label>
                        <div className="relative">
                            <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && analyzeUrl()}
                                placeholder="https://example.com/suspicious-link"
                                className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">Context (Optional)</label>
                        <textarea
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                            placeholder="Add context like 'Received via SMS' or 'Found in email'"
                            rows={3}
                            className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <button
                        onClick={analyzeUrl}
                        disabled={loading || !url}
                        className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Analyzing...' : 'Analyze Threat'}
                    </button>
                </div>
            </motion.div>

            {/* Loading State */}
            {loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-lg border border-border bg-card p-12 text-center"
                >
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                    <p className="mt-4 text-muted-foreground">Analyzing URL with AI...</p>
                </motion.div>
            )}

            {/* Error State */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-destructive bg-destructive/10 p-6"
                >
                    <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive" />
                        <div>
                            <h3 className="font-semibold text-destructive">Analysis Failed</h3>
                            <p className="mt-1 text-sm text-destructive/80">{error}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Results */}
            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    {/* Risk Badge */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <div className="flex items-center gap-3">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${getRiskColor(result.riskLevel)}`}>
                                {getRiskIcon(result.riskLevel)}
                            </div>
                            <div className="flex-1">
                                <div className={`inline-flex rounded-md border px-3 py-1 text-sm font-medium ${getRiskColor(result.riskLevel)}`}>
                                    {result.riskLevel} RISK
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">Analyzed URL: {result.url}</p>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <h3 className="mb-2 flex items-center gap-2 font-semibold">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            Verdict
                        </h3>
                        <p className="text-muted-foreground">{result.verdict}</p>
                    </div>

                    {/* Analysis */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <h3 className="mb-2 flex items-center gap-2 font-semibold">
                            <AlertCircle className="h-5 w-5 text-primary" />
                            Analysis
                        </h3>
                        <p className="text-muted-foreground">{result.reasons}</p>
                    </div>

                    {/* Safety Tips */}
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                        <h3 className="mb-2 flex items-center gap-2 font-semibold text-primary">
                            <AlertCircle className="h-5 w-5" />
                            Safety Tips
                        </h3>
                        <p className="text-sm">{result.tips}</p>
                    </div>

                    {/* Sources */}
                    {result.sources && result.sources.length > 0 && (
                        <div className="rounded-lg border border-border bg-card p-6">
                            <h3 className="mb-3 font-semibold">Threat Intelligence Sources</h3>
                            <div className="space-y-2">
                                {result.sources.map((source, i) => (
                                    <a
                                        key={i}
                                        href={source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block rounded-lg border border-input p-3 text-sm text-primary hover:bg-accent"
                                    >
                                        {source}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    )
}
