export const dynamic = "force-dynamic";
import VisualizationBoard from "@/components/adminComponents/VisualizationBoard";
import ScoreCard from "@/lib/models/scoreCard";

const page = async () => {
    const categories = await ScoreCard.aggregate([
        { $unwind: "$questions" }, // Unwind the questions array
        { $group: { _id: "$questions.category" } }, // Group by category
        { $sort: { _id: 1 } } // Optional: Sort categories alphabetically
    ]);
    const categoryNames = categories.map(category=>category._id)
    // console.log(categoryNames);
    return (
        <div className="p-3 h-full w-full overflow-scroll">
            <main className="h-full min-w-[900px]">
                <VisualizationBoard categoryNames={categoryNames}/>
            </main>
        </div>
    );
}

export default page;