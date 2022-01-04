const Navbar = ({ logo: { title, icon} }) => {
     // const { title, icon } = props.logo;
     return (
          <nav className="navbar bg-primary">
               <h1> <i className={icon}></i> {title}</h1>
          </nav>
     );
};

export default Navbar;