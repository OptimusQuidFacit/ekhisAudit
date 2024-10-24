import ResponsePage from "@/components/adminComponents/ResponsePage";


const page = async () => {
    // const response= await getResponses("Ado");
    // console.log(response);
    
    return (
        <div className="p-3 h-full w-full overflow-scroll">
            <main className="h-full min-w-[550px]">
                <ResponsePage/>
            </main>
        </div>
    );
}

export default page;