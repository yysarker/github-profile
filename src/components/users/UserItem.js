import PropTypes from 'prop-types'

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
     return (
          <div className="card text-center">
               <img
                    src={avatar_url}
                    alt={login + "_picture"}
                    style={{ width: "100px", height: "100px" }}
                    className="round-img"
               />
               <h3>{login}</h3>
               <a href={html_url} className="btn btn-danger btn-sm my-1">More </a>
          </div>
     );
};

UserItem.propType = {
     user: PropTypes.object.isRequired,
}
export default UserItem;

