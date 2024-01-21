import clsx from 'clsx'
import css from './FriendListItem.module.css'
export const FriendListItem = ({ friend }) => {
    const statusClasses = clsx(css.status, {
        [css.isOnline]: friend.isOnline,
        [css.isOffline]: !friend.isOnline
    })
    return (
<div className={css.item}>
    <img className={css.avatar} src={friend.avatar} alt="Avatar" width="70px" />
    <p className={css.name}>{friend.name}</p>
    <p className={statusClasses}>{friend.isOnline ? "Online" : "Offline"}</p>
</div>
    )
}