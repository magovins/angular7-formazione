import { Deserializable } from './deserializable.model';
import { User } from './user.model';

export class Response implements Deserializable {

    public users: User[];
    public page: number;
    public per_page: number;
    public total: number;
    public total_pages: number;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        this.users = input.data.map(user => new User().deserialize(user));
        return this;
    }
}
