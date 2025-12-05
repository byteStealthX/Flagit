import { Sidebar } from './sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 bg-background">
                {children}
            </main>
        </div>
    );
}
