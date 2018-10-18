export class Notification {
    id: number;
    // userId: number;
    title: string;
    message: string;
    image: string;
    createdDate: Date;
    expiryDate: Date;
    displayOnLogin: boolean;
    seen: boolean;
}