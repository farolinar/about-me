import "./Page.css"

function Page({ children, main = false, last = false }) {
    return(
        <>
            <div className={`page ${main ? "main": ""}`}>
                <div className={`page-content-layer ${last ? "last": ""}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Page;
