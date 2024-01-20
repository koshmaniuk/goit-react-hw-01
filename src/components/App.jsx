const Profile = props => {
  return (
      <div className="profile">
      <div className="description">
        <img
          src={props.image}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
    
    
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="value">{props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="value">{props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="value">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App
