export type MessageWithVenterAndColor = {
    message_text: string;
    created_at: string;
    venter_id: number;
    color_id: number;
    uuid: string;
    is_deleted: boolean;
    color: {
        id: number;
        color_name: string;
    };
    venter: {
        id: number;
        user_name: string;
    };
};
