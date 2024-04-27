import "./Page.min.css"

function Page({ children, scheme="dark" }) {
    return(
        <>
            <div className={"page " + scheme}>
                {children}
            </div>
        </>
    )
}

export default Page;
