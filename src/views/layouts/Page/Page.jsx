import "./Page.css"

function Page({ children, main = false, last = false }) {
    return(
        <>
            <div className={`page ${main ? "main": ""} ${last ? "last": ""}`}>
                <div className={`page-content-layer`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Page;
