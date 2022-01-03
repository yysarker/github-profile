import UserItem from "./UserItem";

function Users(props) {
     const users = [
          {
               id: "1",
               login: "mojombo",
               avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
               html_url: "https://github.com/mojombo"
          },
          {
               id: "2",
               login: "defunkt",
               avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
               html_url: "https://github.com/defunkt"
          },
          {
               id: "3",
               login: "pjhyett",
               avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
               html_url: "https://github.com/pjhyett"
          },
          {
               id: "4",
               login: "wycats",
               avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
               html_url: "https://github.com/wycats"
          }
     ];
     const userStyle = {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '1rem'
     };
     return (
          <div style={userStyle}>
               {users.map(user => (
                    <UserItem key={user.id} user={user}></UserItem>
               ))}
          </div>
     );
}

export default Users;