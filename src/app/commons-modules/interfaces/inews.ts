import { IUser } from './iuser';

export interface INews {
    id: number;
    title: string;
    text: string;
    category: string;
    author: IUser;
    creationDate: Date;
    publishingDate: Date;
    shortDescription: string;
    link: string;
}
