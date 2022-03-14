import "./Header.css"



 const Header = () => {
    return ( 
    <div className="header">

        <p> Counter App</p>
        <div className="header-buttons">
        <button className="login" >Login</button>
        <button className="logout" >Log out</button>
        </div>

    </div>

    )
}


export default Header;