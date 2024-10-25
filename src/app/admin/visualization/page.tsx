// export const dynamic = "force-dynamic";
import VisualizationBoard from "@/components/adminComponents/VisualizationBoard";
import { getCategories } from "@/lib/data";
import ScoreCard from "@/lib/models/scoreCard";

const page = async () => {
    const categories = await getCategories();
    const categoryNames = categories?.map(category=>category._id) as string[];
    // console.log(categoryNames);
    return (
        <div className="p-3 h-full w-full overflow-scroll">
            <main className="h-full min-w-[950px]">
                <VisualizationBoard categoryNames={categoryNames}/>
            </main>
        </div>
    );
}

export default page;