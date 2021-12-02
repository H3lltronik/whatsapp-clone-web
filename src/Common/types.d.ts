type MenuDropperProps = {
    onClose?: () => void,
    onOpen?: () => void,
    id?: string|number,
}

type ListItemProps = {
    id?: string|number,
    title: string,
    lastMessage: string,
    lastHour: string|Date,
    isMuted: boolean,
}