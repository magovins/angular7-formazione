import { Deserializable } from './deserializable.model';


export class User implements Deserializable {
   
    public first_name: string;
    public id: number;
    public last_name: string;
   
    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    getFullName() {
        return this.first_name + ' ' + this.last_name;
    }
    
}

/*
avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
email: "george.bluth@reqres.in"
first_name: "George"
id: 1
last_name: "Bluth"
*/