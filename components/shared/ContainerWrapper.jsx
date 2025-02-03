const ContainerWrapper = ({ children }) => {
    return (
        <div className='lg:max-w-7xl lg:px-0 w-full px-4 m-auto'>
            {children}
        </div>
    );
};

export default ContainerWrapper;