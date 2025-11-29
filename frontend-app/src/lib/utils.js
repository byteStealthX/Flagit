import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

export function getRiskColor(level) {
    const colors = {
        HIGH: 'text-red-500 bg-red-500/10 border-red-500/20',
        MEDIUM: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
        LOW: 'text-green-500 bg-green-500/10 border-green-500/20',
        CONFIRMED: 'text-red-500 bg-red-500/10 border-red-500/20',
        PENDING: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
        VERIFIED: 'text-green-500 bg-green-500/10 border-green-500/20'
    }
    return colors[level] || 'text-gray-500 bg-gray-500/10 border-gray-500/20'
}
