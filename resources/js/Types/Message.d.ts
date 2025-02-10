export type MessageWithVenterAndColor = {
    message_text: string;
    created_at: string;
    venter_id: number;
    color_id: number | null;
    uuid: string;
    is_deleted: boolean;
    color: {
        id: number;
        color_name: string;
    } | null;
    venter: {
        id: number;
        user_name: string;
    };
};
