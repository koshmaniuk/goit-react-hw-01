import css from './Profile.module.css'
export const Profile = props => {
  return (
      <div className={css.profile}>
      <div className={css.description}>
        <img
          src={props.image}
          alt="User avatar"
          className={css.avatar}
          width={250}
        />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
    
    
      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <br />
          <span className="value">{props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <br />
          <span className="value">{props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <br />
          <span className="value">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};