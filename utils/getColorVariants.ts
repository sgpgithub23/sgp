export function getColorVariants(color: string){
    if(color === "2D4820") {
        return {
            green1: "#64A23C", 
            green2: "#68A541",
            bluredGreen: "#8CD88B", 
        }
    }

    if(color === "7D0507") {
        return {
            red1: "#C63A3C", 
            bluredred: "#F48284", 
        }
    }

    if(color === "2E0049") { 
        return {
            purple1: "#744D8C", 
            purple2: "#61337C",
            bluredPurple: "#663782", 
        }
    }

    return {}
}