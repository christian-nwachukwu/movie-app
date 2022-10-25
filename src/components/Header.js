

function Header () {
    return(
        <header className="header">
                <div className="header-text">
                    <h1>Flex Box Crash Course</h1>
                    <p>Note the development build.
                    To create a production build, use npm run build.
                    webpack compiled successfully</p>
                </div>
                    <img src="img/hollywood.jpg" alt="react logo" />
        </header>
    )
}

export default Header