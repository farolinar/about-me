import "./Page.min.css"

function Page({ children, main = false }) {
    return(
        <>
            <div className={`page ${main ? "main": ""}`}>
                {children}
            </div>
        </>
    )
}

export default Page;
