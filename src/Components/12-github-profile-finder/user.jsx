const User = ({ user }) => {
  const { avatar_url, followers, following, public_repos, login, created_at } =
    user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{login}</a>
        <p>
          {`User joined on ${createdDate.getDate()} ${createdDate.toLocaleString(
            "en-us",
            {
              month: "short",
            }
          )} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="stats-container">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
