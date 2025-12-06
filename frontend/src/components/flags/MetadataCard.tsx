import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface MetadataCardProps {
    title: string;
    data: any;
    defaultOpen?: boolean;
}

export function MetadataCard({ title, data, defaultOpen = false }: MetadataCardProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    if (!data || Object.keys(data).length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-sm text-gray-500">No data yet</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
                <h3 className="font-semibold text-gray-900">{title}</h3>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
            </button>

            {isOpen && (
                <div className="px-6 pb-4 space-y-3">
                    {Object.entries(data).map(([key, value]: [string, any]) => (
                        <div key={key} className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="text-sm text-gray-900 font-mono bg-gray-50 px-3 py-2 rounded-lg break-all">
                                {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
