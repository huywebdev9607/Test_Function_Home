

  
export interface SocketState<T> {
    loading: boolean
    error: string | null
    data: T |null
    isConnected:boolean
};
  
export enum SocketAction {
    CONNECTED="CONNECTED",
    CONNECTING="CONNECTING",
    DISCONNECTED ="DISCONNECTED"
  }
  
  type Action =
    | {type: SocketAction.CONNECTED}
    | {type:SocketAction.CONNECTING}
    | {type: SocketAction.DISCONNECTED}
  
  function socketReducer<T>(_state: SocketState<T>, action: Action): SocketState<T>{
    switch (action.type) {
      case SocketAction.CONNECTING: {
        return {loading: true, error: null, data: null,isConnected:false};
      }
      case SocketAction.CONNECTED: {
        return {loading: false, error: null, data: null,isConnected:true};
      }
      case SocketAction.DISCONNECTED: {
        return {loading: false, error: null, data: null,isConnected:false};
      }
      default: {
        throw new Error(`Unhandled action type - ${JSON.stringify(action)}`);
      }
    }
  }

  export default socketReducer