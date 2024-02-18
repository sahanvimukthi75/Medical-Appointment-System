export const FormateDate = (date,config)=> {

    const defaultOptions ={day:'numaric',month:"short",year:"numaric"};
    const options =config ? config:defaultOptions;

    return new Date (date).toLocaleDateString("en-US".options);  
}