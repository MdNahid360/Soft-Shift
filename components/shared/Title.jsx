const Title = ({ text, move, duration, position, size, shadow }) => {
    const textAlign = position === 'center' ? 'text-center' : position === 'right' ? 'text-right' : 'text-left';

    return (
        <div className="relative">
            <h2
                data-aos={move ?? "fade-left"}
                data-aos-duration={duration ?? "500"}
                className={`md:text-4xl text-3xl ${size ? `${size} m-auto` : "w-auto"} font-bold font-manrope leading-normal ${textAlign}`}
                style={size ? { width: size } : {}}
            >
                {text}
            </h2>
            {shadow && <span className="absolute bottom-[40%]  left-0 right-0 m-auto shadow-shape-3  w-1 h-0.1 rounded-full"></span>}
        </div>

    );
};

export default Title;