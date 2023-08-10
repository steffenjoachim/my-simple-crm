import { CollectionReference, DocumentData } from "@angular/fire/firestore";

export class User{
    static id(usersCollection: CollectionReference<DocumentData>, id: any) {
      throw new Error('Method not implemented.');
    }
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    id: string;
    remarks: string;
    history: string;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.id = obj ? obj.id : '';
        this.remarks = obj ? obj.remarks : '';
        this.history = obj ? obj.history : '';
    }

    public toJSON() {
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            id: this.id,
            remarks: this.remarks,
            history: this.history,
        };
    }
}