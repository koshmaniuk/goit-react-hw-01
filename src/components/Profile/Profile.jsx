import css from './Profile.module.css'
export const Profile = props => {
  return (
      <div className={css.profile}>
      <div className={css.description}>
        <img
          src={props.image}
          alt="User avatar"
          className={css.avatar}
          width={150}
        />
        <p className={css.name}>{props.name}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>
    
    
      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <br />
          <span className={css.value}>{props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <br />
          <span className={css.value}>{props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <br />
          <span className={css.value}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};