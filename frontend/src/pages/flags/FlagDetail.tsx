import { useParams } from 'react-router-dom';
import { useRealtimeFlag } from '@/hooks/useRealtimeFlag';
import { StatusBadge } from '@/components/flags/StatusBadge';
import { ProcessButton } from '@/components/flags/ProcessButton';
import { VerifyButtons } from '@/components/flags/VerifyButtons';
import { EvidenceUploader } from '@/components/flags/EvidenceUploader';
import { MetadataCard } from '@/components/flags/MetadataCard';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlagDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { flag, loading, refetch } = useRealtimeFlag(id!);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <svg className="animate-spin h-12 w-12 text-blue-600" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            </div>
        );
    }

    if (!flag) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Flag not found</h2>
                    <Link to="/flags" className="text-blue-600 hover:underline mt-4 inline-block">
                        Back to Flags
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/flags"
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{flag.title}</h1>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {flag.created_by}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {new Date(flag.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <StatusBadge status={flag.status} />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Flag Content */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h2 className="font-semibold text-gray-900 mb-4">Content</h2>
                            <p className="text-gray-700 whitespace-pre-wrap">{flag.content}</p>
                        </div>

                        {/* Actions */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h2 className="font-semibold text-gray-900 mb-4">Actions</h2>
                            <div className="flex flex-wrap gap-3">
                                <ProcessButton flagId={flag.id} onSuccess={refetch} />
                                <VerifyButtons flagId={flag.id} onSuccess={refetch} />
                            </div>
                        </div>

                        {/* Evidence Upload */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h2 className="font-semibold text-gray-900 mb-4">Upload Evidence</h2>
                            <EvidenceUploader flagId={flag.id} onSuccess={refetch} />
                        </div>

                        {/* Metadata Sections */}
                        <div className="space-y-4">
                            <MetadataCard
                                title="Analysis"
                                data={flag.metadata?.analysis}
                                defaultOpen
                            />
                            <MetadataCard
                                title="Verification"
                                data={flag.metadata?.verification}
                            />
                            <MetadataCard
                                title="Evidence"
                                data={flag.metadata?.evidence}
                            />
                        </div>
                    </div>

                    {/* Right Column - Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h2 className="font-semibold text-gray-900 mb-4">Details</h2>
                            <dl className="space-y-3">
                                <div>
                                    <dt className="text-sm font-medium text-gray-600">Type</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{flag.type}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-600">Status</dt>
                                    <dd className="mt-1"><StatusBadge status={flag.status} /></dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-600">Created</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {new Date(flag.created_at).toLocaleString()}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-600">ID</dt>
                                    <dd className="mt-1 text-xs text-gray-600 font-mono break-all">
                                        {flag.id}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
