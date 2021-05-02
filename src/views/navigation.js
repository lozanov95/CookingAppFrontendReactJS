export const Navigation = () => {
    return (
        <nav>
            <div className="nav-left">
                <a href='/'>Home</a>
                <a href='/recipes'>Recipes</a>
                <a href='/myrecipes'>My recipes</a>
                <a href='/create'>Create recipe</a>
                <a href='/about'>About</a>
            </div>
            <div className="nav-right">
                <a href='/register'>Register</a>
                <a href='/login'>Login</a>
                <a href='/logout'>Logout</a>
            </div>
        </nav>
    );
}