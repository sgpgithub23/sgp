import { ErrorResponse } from "@/typings/ErroResponse";


export function extractErrorMessages(response: any, codigoerror?: string): string[] {
    const errorMessages: string[] = [];
  
    function traverseResponse(obj: any): void {
      if (Array.isArray(obj)) {
        for (const item of obj) {
          traverseResponse(item);
        }
      } else if (typeof obj === "object" && obj !== null) {
        const hasCodigo = (codigoerror ? codigoerror : "codigoerror:") in obj;
        const hasMsgError = "error" in obj;
        
        if (hasCodigo && hasMsgError) {
          errorMessages.push(obj.error);
        } else {
          for (const key in obj) {
            traverseResponse(obj[key]);
          }
        }
      }
    }
  
    traverseResponse(response);
  
    return errorMessages;
  }