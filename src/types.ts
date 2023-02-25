export enum Sender {
    Extension,
    Content,
    Background
}

export interface ChromeMessage {
    from: Sender,
    message: any
}