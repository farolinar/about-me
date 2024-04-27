import Page from "../../layouts/Page/Page"
import "./Blogs.css"

function Blogs({ pageScheme="three" }) {
    return (
      <>
        <Page scheme={pageScheme}>
            <div className="blog-outer">
                <h2>Here's some of my blogs that I wrote...</h2>
            </div>
        </Page>
      </>
    )
}

export default Blogs
