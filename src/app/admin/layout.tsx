import AdminMenu from "@/components/adminComponents/AdminMenu";
import DateFilter from "@/components/adminComponents/DateFilter";
import LgaChoose from "@/components/adminComponents/LgaChoose";

const page = ({children}: Readonly<{
        children: React.ReactNode;
      }>) => {
    return (
        <div className="w-full h-full p-1 md:p-3 bg-white">
            <div className="rounded-xl h-full min-h-[80vh] w-full shadow-xl md:flex px-2 md:py-3">
                <div className="mb-5 md:mb-0 md:h-full p-1 md:p-3 flex-[0.1] flex md:flex-col justify-between items-center md:border-r-2 border-b-2 md:border-b-0">
                    <div className="p-2 md:p-5">
                        <AdminMenu/>
                    </div>
                    <LgaChoose/>
                </div>
                <div className="p-3 h-[75vh] md:h-[85vh] max-w-[95vw] md:max-w-[75vw] lg:max-w-[80vw] xl:max-w-full flex-[1]">   
                    <DateFilter/>                
                    {children}
                </div>
            </div>
        </div>
    );
}

export default page;