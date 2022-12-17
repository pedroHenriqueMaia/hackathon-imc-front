export interface IIMC_PROFESSIONAL { 
  type:string;
  data: IIMC[]
}
export interface IIMC { 
  clientId: number
  clientName?: string;
  createdAt?:string;
  height:number;
  id?:number;
  profissionalId:number;
  profissionalName?: string;
  result: number;
  weight: number;
  type?: string
}