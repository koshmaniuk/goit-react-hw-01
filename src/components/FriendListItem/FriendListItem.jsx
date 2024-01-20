export const FriendListItem = ({friend}) => {
    return (
<div className="item">
    <img className="avatar" src={friend.avatar} alt="Avatar" width="48" />
    <p className="name">{friend.name}</p>
    
    <p className="status">    
    </p>
</div>
    )
}