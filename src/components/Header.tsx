import { Zap } from 'lucide-react';

function Header() {
    return (
        <header className="glass-strong sticky top-0 z-10 flex items-center gap-3 border-b px-6 py-3 border-glow">
            <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                
                <span className="text-foreground">~/gerardo-alavez</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right size-3" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
                
                <span className="text-accent-foreground">CE</span></div><div className="ml-auto flex items-center gap-2">

                <span className="text-[11px] text-muted-foreground">Status: Up</span>
                <span className="size-3 rounded-full bg-(--color-success) pulse-dot"></span>
            </div>
        </header>
    );
}

export default Header;