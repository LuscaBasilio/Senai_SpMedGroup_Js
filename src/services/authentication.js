export const autenticado = () => localStorage.getItem("userOn") != null;

export default autenticado;

export const jwtParse = () =>{
    try {
        let token = localStorage.getItem("userOn");
        let url = token.split(".")[1];
        let converter = url.replace(/-/g,'+').replace(/_/,'/');
        
        let realToken = JSON.parse(window.atob(converter));
        return realToken;

    } catch (error) {
        return error;
    }
}