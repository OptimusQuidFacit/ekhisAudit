const Loader = () => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-1 animate-pulse">
                <div className="w-[6px] h-[6px] bg-primary rounded-full"></div>
                <div className="w-[6px] h-[6px] bg-primary rounded-full"></div>
                <div className="w-[6px] h-[6px] bg-primary rounded-full"></div>
            </div>       
        </div>
    );
}

export default Loader;