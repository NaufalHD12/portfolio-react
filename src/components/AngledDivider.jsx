const AngledDivider = ({ direction = "down", className = "" }) => {
    const clipPath =
    direction === "down"
        ? "polygon(0 0, 100% 0, 100% 100%, 0 90%)"
        : "polygon(0 0, 100% 10%, 100% 100%, 0 100%)";

    return (
        <div
            className={`absolute w-full h-24 lg:h-32 -bottom-1 left-0 bg-background ${className}`}
            style={{ clipPath }}
        />
    );
};

export default AngledDivider;
