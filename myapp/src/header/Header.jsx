import "./Header.css"

export const Header = props => {

    return <header className="background">
        {props.children}
    </header>
}