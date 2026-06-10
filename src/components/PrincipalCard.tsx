
function PrincipalCard() {
    return (
        <section className="glass relative overflow-hidden rounded-lg m-10 p-6 lg:col-span-3 border-glow">
            <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "var(--gradient-glow)" }}
            />

                <div className="relative flex flex-wrap items-end justify-between gap-6">
                <div>
                    <div className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
                     Glia Client Engineering Testing Site
                    </div>

                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-glow">
                    Gerardo's Sandbox
                    <span className="ml-1 inline-block w-1.5 translate-y-0.5 bg-accent-foreground cursor-blink">&nbsp;</span>
                    </h1>

                    <p className="mt-2 text-[13px] text-muted-foreground">
                    An isolated environment for case prototyping, performance benchmarking and edge-case validation. <br/>
                    System initialized. Let's build something.
                    </p>
                </div>
             </div>
        </section>
    )
}

export default PrincipalCard;