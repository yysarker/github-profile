function Navbar(props) {
     const { title, icon } = props.logo;
     return (
          <nav className="navbar bg-primary">
               <h1> <i class={icon}></i> {title}</h1>
          </nav>
     );
};

export default Navbar;