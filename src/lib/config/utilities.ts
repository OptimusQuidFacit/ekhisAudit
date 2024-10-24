import { ado, efon, ekitiEast, ekitiSouthWest, ekitiWest, emure, gbonyin, idoOsi, ijero, ikere, ikole, ilejemeje, irepodunIfelodun, iseOrun, moba, oye } from "../facilityData";

export const findFacilitiies=(lga:string)=>{
    
    switch(lga){
        case "Ado":
        return ado;
        break;
        case "Ikere":
        return ikere;
        break;
        case "Ikole":
        return ikole;
        break;
        case "Ise/Orun":
        return iseOrun;
        break;
        case "Efon":
        return efon;
        break;
        case "Gbonyin":
        return gbonyin;
        break;
        case "Ilejemeje":
        return ilejemeje;
        break;
        case "Ijero":
        return ijero;
        break;
        case "Ido-Osi":
        return idoOsi;
        break;
        case "Ekiti South West":
        return ekitiSouthWest;
        break;
        case "Ekiti East":
        return ekitiEast;
        break;
        case "Ekiti West":
        return ekitiWest;
        break;
        case "Irepodun/Ifelodun":
        return irepodunIfelodun;
        break;
        case "Emure":
        return emure;
        break;
        case "Moba":
        return moba;
        break;
        case "Oye":
        return oye;
        break;
        default:
        return ["Please choose an LGA first"];
        break;
        
    }
}