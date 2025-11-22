import InitialForm from "@/components/InitialForm";
// import { questions } from "@/lib/data";

export default function Home() {
  // let currentQuestion=questions.filter(question=>!question.isAnswered)[0]
  return (
    <div className=" h-full font-[family-name:var(--font-geist-sans)] pattern-cross pattern-yellow-500 pattern-bg-white 
        pattern-size-6 w-full opacity-100">
      <main className="h-full w-full flex justify-center items-center">
        <div>       
          <InitialForm/>   
        </div>
      </main>
    </div>
  );
}
