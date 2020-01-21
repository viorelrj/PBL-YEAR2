export interface LoginObjectModel {
    login: string;
    password: string;
}

export interface LoginResponseModel {
    emailId: string;
    firstName: string;
    id: number;
    lastName: string;
    password: string;
    username: string;
}

export interface RegistrationModel {
    firstName: string;
    lastName: string;
    emailId: string;
    username: string;
    password: string;
}