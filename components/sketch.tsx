const SketchHighlight = ({ text }: { text: string }) => {
    return (
        <div className="relative inline-block">
            {/* Animated highlight layer */}
            <span className="absolute inset-0 bg-yellow-300 animate-scribble rounded-md opacity-70"></span>

            {/* Text layer */}
            <span className="relative text-black font-bold">{text}</span>
        </div>
    );
};

export default SketchHighlight;