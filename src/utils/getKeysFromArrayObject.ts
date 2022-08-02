import _ from "lodash";


//Input array of object, key extends obj
//Output array follow this key
export default function getKeyFromArrayObject<TObj,K extends keyof TObj>(arr:TObj[],key:K){
    let keyArray: any[] = [];
    _.map(arr,(obj)=>{
      keyArray.push(obj[key])
    })
    return keyArray
}