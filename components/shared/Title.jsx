const Title = ({ text, move, duration, position, size }) => {
    const textAlign = position === 'center' ? 'text-center' : position === 'right' ? 'text-right' : 'text-left';

    return (
        <h2
            data-aos={move ?? "fade-left"}
            data-aos-duration={duration ?? "500"}
            className={`md:text-4xl text-3xl ${size ? `${size} m-auto` : "w-auto"} font-bold font-manrope leading-normal ${textAlign}`}
            style={size ? { width: size } : {}}
        >
            {text}
        </h2>
    );
};

export default Title;