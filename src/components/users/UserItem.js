function userItem() {
     const userData = {
          login: "mojombo",
          avatar_url: "http://avatars.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/mojombo",
     }
     const { avatar_url, login, html_url } = userData;
     return (
          <div className="card text-center">
               <img
                    src={avatar_url}
                    alt={login + "_picture"}
                    style={{ width: "100px", height: "100px" }}
                    className="round-img"
               />
               <h3>{login}</h3>
               <a href={html_url} className="btn btn-dark btn-sm my-1">More </a>
          </div>
     );
};

export default userItem;