const Links = ({title, to}) => {


    return (
        <a className='navbar-link text-white' href={to}>{title}</a>
    )
}

export default Links