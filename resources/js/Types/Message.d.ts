export type Venter = {
    id: number;
    user_name: string;
};

export type Color = {
    id: number;
    color_name: string;
};

export type Message = {
    id: number;
    message_text: string;
    created_at: string;
    venter_id: number;
    color_id: number | null;
    uuid: string;
    is_deleted: boolean;
};

export type MessageWithVenterAndColor = Message & {
    venter: Venter;
    color: Color | null;
};
