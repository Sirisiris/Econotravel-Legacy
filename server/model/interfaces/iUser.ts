export default interface iUserLogin {
    email:string;
    password:string;
}

export interface iUser extends iUserLogin {
    name?:string;
    // ? = hace q sea optativo el name

}