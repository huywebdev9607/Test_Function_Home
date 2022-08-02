import moment from "moment"


export const FORMAT_DATE_TIME = "DD/MM/yyyy HH:mm:ss"

// Input : datetimes in 00:00 zones
// Output: datetimes with format or '-'
 const getLocalDateTime = (dateTime:string,format:string) :string | "-" =>{
    return moment(dateTime).format(format) !== "Invalid Date" ? moment(dateTime).format(format) : "-"
}


export default getLocalDateTime