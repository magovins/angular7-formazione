export interface Deserializable {
    deserialize(input: any): this;
}

/* OPPURE
export interface Deserializable<T> {
    deserialize(input: any): T;
}
*/