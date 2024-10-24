import CheckList from "@/components/CheckList";
import { checkListType, getChecklist, questionType } from "@/lib/data";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";

export default async function Home({params}:any) {
  const { slug }= params;
  // console.log(slug);
  let questions= await getChecklist(slug as string);
  let unAnsweredQuestions= questions?.filter((question: checkListType)=>!question.isAnswered) as checkListType[]
  let currentQuestion = unAnsweredQuestions[0]
//   let sameCategory=unAnsweredQuestions.length>0? questions?.filter((question: questionType)=>question.category==currentQuestion.category):[];
//   let questionIndex=sameCategory?.indexOf(currentQuestion);
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="sm:items-start w-full">
        <div className="flex h-full gap-2 w-full 
        pattern-cross pattern-yellow-500 pattern-bg-white
        pattern-size-6">
          <div  className="relative h-[100vh] flex-1">
            <Image fill src={`/ekhisteam.jpg`} alt="A photo of the Ekhis audit team at ekhis" className="object-cover flex-1"/>
          </div>
          <div className="h-screen flex-[2] flex flex-col gap-10 items-center justify-center">
          <div className=" w-full text-center">
              <Link className="hover:bg-secondary bg-primary p-3 text-white rounded-xl" href={`/questions/${slug}`}>
                 Back to Scorecard
              </Link>
          </div>
              <div className="bg-white shadow-xl flex flex-col justify-center min-h-[500px] p-1 md:p-5 rounded-2xl">
                {
                unAnsweredQuestions.length>0?
                <CheckList
                scoreCardId={slug} 
                question={currentQuestion as questionType}/>
                :
                <div className="text-center text-xl font-semi-bold text-secondary">
                  Thanks for completing this survey!
                  <div className="mt-5">
                    <Link href={'/'} className="hover:bg-secondary text-lg text-center text-white bg-primary rounded-xl p-3">
                        Finish
                    </Link>
                  </div>
                </div>
                }
              </div>
          </div>
        </div>  
      </main>
    </div>
  );
}
