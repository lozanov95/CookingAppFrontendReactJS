export const Navigation = () => {
    return (
        <nav>
            <div className="nav-left">
                <a href='/'>Home</a>
                <a href='/'>Recipes</a>
                <a href='/'>My recipes</a>
                <a href='/'>Create recipe</a>
            </div>
            <div className="nav-right">
                <a href='/'>Register</a>
                <a href='/'>Login</a>
                <a href='/'>Logout</a>
            </div>
        </nav>
    );
}