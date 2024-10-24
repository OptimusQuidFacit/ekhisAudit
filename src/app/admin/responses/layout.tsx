const page = ({children}: Readonly<{
        children: React.ReactNode;
      }>) => {
    return (
        <div className="w-full h-full p-1 md:p-3 bg-white overflow-y-scroll">
            <div className=" ">
                 {children}              
            </div>
        </div>
    );
}

export default page;