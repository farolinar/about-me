import "./HeaderMenuList-min.css"

function HeaderMenuList({refs=[]}) {
    return(
        <>
            <div className="header-menu-list">
                <p className="clickable-text" onClick={() => refs[0]?.current?.scrollIntoView({behavior: 'smooth'})}>About</p>
                <p className="clickable-text" onClick={() => refs[1]?.current?.scrollIntoView({behavior: 'smooth'})}>Experience</p>
                <p className="clickable-text" onClick={() => refs[2]?.current?.scrollIntoView({behavior: 'smooth'})}>Education</p>
                <p className="clickable-text" onClick={() => refs[3]?.current?.scrollIntoView({behavior: 'smooth'})}>Blogs</p>
            </div>
        </>
    )
}

export default HeaderMenuList
