import Button from "@/components/Button";
import InitialForm from "@/components/InitialForm";
import Question from "@/components/Question";
import SubmitButton from "@/components/SubmitButton";
import { questions } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  let currentQuestion=questions.filter(question=>!question.isAnswered)[0]
  return (
    <div className="h-full font-[family-name:var(--font-geist-sans)] pattern-cross pattern-yellow-500 pattern-bg-white 
        pattern-size-6">
      <main className="h-full w-full flex justify-center items-center">
        <div>         
          <InitialForm/>   
        </div>
      </main>
    </div>
  );
}
