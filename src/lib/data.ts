import { connectToDb } from "./config/dbconnection"
import ScoreCard, { scoreCardType } from "./models/scoreCard"

export type questionType={
    id?: number,
    question:string,
    isAnswered:boolean,
    answer:number|string,
    category:string
    hasInput?:boolean,
    hasSelect?:boolean,
    options?:string[],
    isNumber?:Boolean,
    
}
const questionsArray:questionType[]=[
    {
        question:"Do you have a management committee?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Community participation in management: Do you involve the community in the management of your facility?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Evidence of regular management committee meeting?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Presence of ward development committee?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Evidence of regular WDC meetings?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Evidence of well implemented Shift/Call duty roster?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Do you have complaint redress system?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Availability of conspicuously displayed ...?",
        isAnswered:false,
        answer:0,
        category:"Governance and Administrative Structures"
    },
    {
        question:"Do you have Bank account?",
        isAnswered:false,
        answer:0,
        category:"Financial Management"
    },
    {
        question:"Capacity to generate and submit income and expenditure statements?",
        isAnswered:false,
        answer:0,
        category:"Financial Management"
    },
    {
        question:"Operational expenses (cash) by source and frequency?",
        isAnswered:false,
        answer:0,
        category:"Financial Management"
    },
    {
        question:"User fee changes displayed (confirm any exemptions)?",
        isAnswered:false,
        answer:0,
        category:"Financial Management"
    },
    {
        question:"Designated accountant and/or financial manager?",
        isAnswered:false,
        answer:0,
        category:"Financial Management",
        hasSelect:true,
        options: ["Accountant", "Financial Manager"],
        isNumber:false
    },
    {
        question:"Where are commodities obtained from? (Central Medical Store or Open Market)",
        isAnswered:false,
        answer:0,
        category:"Financial Management",
        hasSelect:true,
        options: ["Central Medical Store", "Open Market"],
        isNumber:false
    },
    {
        question:"If open market, what is the process informing procurement?",
        isAnswered:false,
        answer:0,
        category:"Financial Management",
        hasInput:true,
        isNumber:false
    },
    {
        question:"Are there staff with experience with generating and submitting claims?",
        isAnswered:false,
        answer:0,
        category:"Financial Management"
    },
    {
        question:"Are there supply Chain guidelines in place?",
        isAnswered:false,
        answer:0,
        category:"Financial Management"
    },
    {
        question:"Are there contingency stocks available?",
        isAnswered:false,
        answer:0,
        category:"Financial Management"
    },
    {
        question:"Data based or self reported stock out rates?",
        isAnswered:false,
        answer:0,
        category:"Financial Management",
        hasSelect:true,
        options:["Data based", "Self-reported"],
        isNumber:false
    },
    {
        question:"Is the doctor regularly available in the PHC/Hospital for 24 hours?",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management"
    },
    {
        question:"Are the Nurses/Midwives regularly available in the PHC/Hospital for 24 hours?",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management"
    },
    {
        question:"Is there a Pharmacist/Dispensing Staff regularly available in the PHC/Hospital for 24 hours?",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management"
    },
    {
        question:"Is there a Laboratory Staff regularly available in the PHC/Hospital for 24 hours?",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management"
    },
    {
        question:"Is there a Trained Records/ Front Desk Officer regularly available in the PHC/Hospital for 24 hours?",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management"
    },
    {
        question:"Are there other kinds of staff that are regularly available?",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management",
        hasInput:true,
        isNumber:false
    },
    {
        question:"Mode of Staff payment",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management",
        hasInput:true,
        isNumber:false
    },
    {
        question:"How many staff are accommodated out of the facility",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management",
        hasInput:true,
        isNumber:true
    },
    {
        question:"Evidence of Staff Training",
        isAnswered:false,
        answer:0,
        category:"Human Resource Management",
    },
    {
        question:"Check the clerking of beneficiaries from random case notes, is biodata info goood/fair?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Check the clerking of beneficiaries from random case notes, is patient history info goood/fair?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Check the clerking of beneficiaries from random case notes, is patient examination goood/fair?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Check the clerking of beneficiaries from random case notes, is provisional diagnosis goood/fair?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Check the clerking of beneficiaries from random case notes, is investigation info goood/fair?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Check the clerking of beneficiaries from random case notes, is patient treatment goood/fair?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Is the treatment plan relevant to working/provisional diagnosis?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Are drugs prescribed appropriately?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Are the prices of drugs prescribed consistent with the BHCPF drug price list",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Are ward rounds conducted regularly?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Is there availability and use of protocols/procedures for diagnosis and patient management e.g Anaemia, ARI, STI, Diarrhoea, fever, hypertension, diabetes, etc?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Ease of access to Doctors/Secondary Care during emergencies?",
        isAnswered:false,
        answer:0,
        category:"Patient Care Management"
    },
    {
        question:"Avalability of written protocol for delivery? (note: ANC, Birth Records, Portogram)",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services"
    },
    {
        question:"No of live births (Access birth records in the past three months)",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services",
        hasInput: true,
        isNumber:true
    },
    {
        question:"No of fresh still births (Access birth records in the past three months)",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services",
        hasInput: true,
        isNumber:true
    },
    {
        question:"No of macerated still births (Access birth records in the past three months)",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services",
        hasInput: true,
        isNumber:true
    },
    {
        question:"Immunization services for neonates?",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services",
    },
    {
        question:"Availability of sterile delivery instruments?",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services",
    },
    {
        question:"Availability of basic equipment/consumables in the labour room?",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services",
    },
    {
        question:"Payment for A.N.C/delivery by enrollees (review three antenantal/case notes)?",
        isAnswered:false,
        answer:0,
        category:"Maternal and Child Health Services",
    },
    {
        question:"Is the pharmacy/dispensary adequately stocked with ACT, antibacterial, anti-hypertensive, anti-diabetic drugs?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Appropriateness of prescribed drugs (dose and duration)?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Is Drug revolving fund (DRF) committee in place and functional?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Availability of drug counselling?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Provision for out of stock (o/s) for enrollees?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"If answer to previous question is yes, what does the facility do?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
        hasInput:true,
        isNumber:false
    },
    {
        question:"Adequate drug storage with A/C?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Intermittent Prevention Therapy in Pregnancy? (Sulphadoxine and Pyremethamine)",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Does PHC have capacity for PMTCT of HIV/AIDS?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Drug store have appropriate labelling?",
        isAnswered:false,
        answer:0,
        category:"Drug Management",
    },
    {
        question:"Availability of written standard operating procedure for each investigation in the laboratory?",
        isAnswered:false,
        answer:0,
        category:"Laboratory",
    },
    {
        question:"Appropriateness of laboratory tests with for MP, HB, Urine, Stool, FBS, HIV, Genotype, etc?",
        isAnswered:false,
        answer:0,
        category:"Laboratory",
    },
    {
        question:"Evidence of basic laboratory equipment (in a side lab): Microscope, Bench Centrifuge, Haemotrocite Centrifuge etc?",
        isAnswered:false,
        answer:0,
        category:"Laboratory",
    },
    {
        question:"Availability of rapid diagnostic test kits: Malaria, Widal, Urinalysis, HB?",
        isAnswered:false,
        answer:0,
        category:"Laboratory",
    },
    {
        question:"Availability of written standard handling procedure of medical wastes/sharps?",
        isAnswered:false,
        answer:0,
        category:"Infection Control",
    },
    {
        question:"Availability of written standard operating procedure?",
        isAnswered:false,
        answer:0,
        category:"Infection Control",
    },
    {
        question:"Availability of sterilization system?",
        isAnswered:false,
        answer:0,
        category:"Infection Control",
    },
    {
        question:"Is there hand washing culture in the hospital?",
        isAnswered:false,
        answer:0,
        category:"Infection Control",
    },
    {
        question:"Clean environment and well-cut grasses?",
        isAnswered:false,
        answer:0,
        category:"Infection Control",
    },
    {
        question:"Is beneficiary registration forms available?",
        isAnswered:false,
        answer:0,
        category:"Health Management and Information Systems",
    },
    {
        question:"Are there patient record forms and patient referral forms?",
        isAnswered:false,
        answer:0,
        category:"Health Management and Information Systems",
    },
    {
        question:"Are there designated administrative/data?",
        isAnswered:false,
        answer:0,
        category:"Health Management and Information Systems",
    },
    {
        question:"Is there adequate water supply?",
        isAnswered:false,
        answer:0,
        category:"Physical Infrastructure"
    },
    {
        question:"Is there efficient power supply?",
        isAnswered:false,
        answer:0,
        category:"Physical Infrastructure"
    },
    {
        question:"Is the consultation room clean?",
        isAnswered:false,
        answer:0,
        category:"Physical Infrastructure"
    },
    {
        question:"Are the wards clean and well ventilated?",
        isAnswered:false,
        answer:0,
        category:"Physical Infrastructure"
    },
    {
        question:"Are the wards adequately illuminated?",
        isAnswered:false,
        answer:0,
        category:"Physical Infrastructure"
    },
    {
        question:"Are the toilets clean?",
        isAnswered:false,
        answer:0,
        category:"Physical Infrastructure",
    },
    {
        question:"Is the hospital environment clean/ grass well cut?",
        isAnswered:false,
        answer:0,
        category:"Physical Infrastructure",
        
    }
]
export const getQuestions=async (cardId:string)=>{
    try {
        let scoreCard = await ScoreCard.findOne({_id:cardId}).lean<scoreCardType>();
        if(scoreCard){
            return scoreCard.questions;
        }
        throw new Error("Score Card not found");
    }
    catch(err){
        console.log(err);
    }
}
export const getQuestion=(id:number)=>{
    return questions.find(question=>question.id===id);
}
export const questions= questionsArray.map((question, index)=>({id:index+1, isNumber:"isNumber" in question?question.isNumber:true, ...question}));
export const LGAs=[
    "Ado",
    "Ikere",
    "Ijero",
    "Oye",
    "Ise/Orun",
    "Gbonyin",
    "Ilejemeje",
    "Ido-Osi",
    "Ekiti South West",
    "Ekiti West",
    "Ekiti East",
    "Efon",
    "Irepodun/Ifelodun",
    "Emure",
    "Moba",
    "Ikole",
]

export type checkListType= {
    id?:number,
    question: String,
    isAnswered: Boolean,
    answer:Number|String|Boolean,
    isNumber?:Boolean,
    isBoolean?:Boolean,
    isString?:Boolean,
}
const supervisory: checkListType[]=[
    {
        question:"Total No of Enrollees in the HF",
        isAnswered:false,
        answer:0,
        isNumber:true

    },
    {
        question:"Did the facility receive capitation/claims reimbursement for the reporting month",
        isAnswered:false,
        answer:0,
        isBoolean:true

    },
    {
        question:"Ammount Received",
        isAnswered:false,
        answer:0,
        isNumber:true
    },
    {
        question:"Check for the availability and completeness of Data Tools in the HF",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility Summarize Encounter Data on Weekly Basis (Check Register)?",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have dedicated file for BHCPF and ULERAWA programs (Check to see File)?",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have a dedicated phone Number, if yes insert the phone number?",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Total Number of beneficiary visits at the time of visit?",
        isAnswered:false,
        answer:0,
        isNumber:true
    },
    {
        question:"Total Number of beneficiaries that were referred from this facility during time of visit?",
        isAnswered:false,
        answer:0,
        isNumber:true
    },
    {
        question:"Does facility have and use ICC/Bin Card? Please Check(if no mentor on how to fill ICCs)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does HF have Essential Drugs that will last for two months (check the security stock level (SSL) of atleast 3 random essential drugs",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have daily consumption register (Please Check)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have treatment register (pasted on the wall)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have standing orders and in use (Check Encounter reg.)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have RDT, PCV Machine, & Widal Kits in use (check for their functionality)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have injection safety box (check box)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have a Ward Development Committee",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"When was the last WDC meeting held (Check for minutes and attendance sheet)",
        isAnswered:false,
        answer:0,
        isString:true
    },
    {
        question:"Does the facility have any means of Grieviance Redress Mechanism (Complaints Resolution Mechanism)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have an Ekhis focal person (If yes insert name and phone number of focal person, if no, visiting team to encourage OIC to appoint during visit)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have Ekhis 24 hour Contact Call Center Number for requesting pre-authorization code? (if no, visiting team to give the number to the facility)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"Does the facility have a phone numbers of their receiving referral centers (if no, visiting team to make available of their referral centers)",
        isAnswered:false,
        answer:0,
        isBoolean:true
    },
    {
        question:"How many Healthcare Staff were Mentored on EKHIS Program during the visit",
        isAnswered:false,
        answer:0,
        isNumber:true
    },
];
export const supervisoryChecklist=supervisory.map((question, index)=>({id:index+1, ...question}))

export const getChecklist=async (cardId:string)=>{
    try {
        let scoreCard = await ScoreCard.findOne({_id:cardId}).lean<scoreCardType>();
        if(scoreCard){
            return scoreCard.checkList;
        }
        throw new Error("Score Card not found");
    }
    catch(err){
        console.log(err);
    }
}

export const getResponses= async (query:any)=>{
    try{
        connectToDb()
        let response= await ScoreCard.find({LGA:query.LGA, "period.year":query.year, "period.quarter":query.quarter}).lean()
        return response;
    }
    catch(err){
        throw new Error("Something went wrong");
        // return err;
    }
}
export const getResponse= async (id:string)=>{
    try{
        connectToDb()
        let response = await ScoreCard.findOne({_id:id}) as scoreCardType
        return response;
    }
    catch(err){
        throw new Error("Something went wrong");
        // return err;
    }
}

export const getQueriedResponse= async (query:any)=>{
    try{
        connectToDb()
        let response = await ScoreCard.findOne({facility:query.facility, "period.year":query.year, "period.quarter":query.quarter}) as scoreCardType
        return response;
    }
    catch(err){
        throw new Error("Something went wrong");
        // return err;
    }
}
export const getCategories= async()=>{
    try {
        connectToDb();
        const categories = await ScoreCard.aggregate([
            { $unwind: "$questions" }, // Unwind the questions array
            { $group: { _id: "$questions.category" } }, // Group by category
            { $sort: { _id: 1 } } // Optional: Sort categories alphabetically
        ]);
        return categories;
    } catch (error) {
        console.log(error);
    }
}