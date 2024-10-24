import { getResponse, questionType } from "@/lib/data";
import { scoreCardType } from "@/lib/models/scoreCard";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

const page = async ({params}:{params:Params}) => {
    const {slug}= params;
    const scoreCard= await getResponse(slug) as scoreCardType;
    const answeredQuestions= scoreCard.checkList.filter(question=>question.isAnswered)
    return (
        <div>
            <div className="my-3 text-end">
                <Link className="text-primary underline" href={`/admin/responses/${slug}`}>
                    Go to ScoreCard
                </Link>
            </div>
        {
            answeredQuestions.length>0?

            answeredQuestions?.map((question:questionType, index)=>
            <div className="p-3" key={question.id}>
                <div className="text-secondary">
                    {index+1}. {question.question}
                </div>
                <div className="text-primary">
                    {question.answer=="1"?"Yes":question.answer==="0"?"No":question.answer}
                </div>
            </div>
        ):
        <div className="opacity-[0.5]">
            No response has been submitted yet
        </div>
    }
    </div>
    );
}

export default page;