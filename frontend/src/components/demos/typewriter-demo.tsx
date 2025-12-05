import { Typewriter } from "@/components/ui/typewriter-text"

const TypewriterDemo = () => {
    return (
        <>
            <Typewriter
                text={["Welcome to TrueTrace", "Build awesome websites.", "Detect misinformation."]}
                speed={100}
                loop={true}
                className="text-xl font-medium"
            />
        </>
    )
}

export { TypewriterDemo }
