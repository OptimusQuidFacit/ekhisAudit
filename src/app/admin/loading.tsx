import AdminLoader from "@/components/adminComponents/AdminLoader";

const loading = () => {
    return (
        <div className="bg-white h-full flex justify-center items-center">
            <AdminLoader/>
        </div>
    );
}

export default loading;