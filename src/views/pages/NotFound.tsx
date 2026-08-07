import { Link } from "react-router";

function NotFound(){
    return(
        <>
        
            <div className="container d-flex align-items-center justify-content-center min-vh-100">
    <div className="" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="text-center">
            <div className="mb-4">
                <Link to="/" className="d-inline-block mb-4">
                    <img src="data:image/svg+xml,%3csvg%20width='62'%20height='67'%20viewBox='0%200%2062%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.604%2066.378L0.00805664%2048.1582V35.7825L30.604%2054.0023V66.378Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2048.1582L30.604%2066.378V54.0023L61.1996%2035.7825V48.1582Z'%20fill='%23E66239'/%3e%3cpath%20d='M30.5955%200L0%2018.2198V30.5955L30.5955%2012.3757V0Z'%20fill='%23657E92'/%3e%3cpath%20d='M61.191%2018.2198L30.5955%200V12.3757L61.191%2030.5955V18.2198Z'%20fill='%23A3B2BE'/%3e%3cpath%20d='M30.604%2048.8457L0.00805664%2030.6259V18.2498L30.604%2036.47V48.8457Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2030.6259L30.604%2048.8457V36.47L61.1996%2018.2498V30.6259Z'%20fill='%23E66239'/%3e%3c/svg%3e" alt="" width="36"/>
                    <span className="ms-2"><img src="./assets/images/logo.svg" alt=""/></span>
                </Link>
            </div>

            <h1 className="display-1 fw-bold text-primary mb-2">404</h1>
            <h2 className="card-title h4 mb-3">Page Not Found</h2>
            <p className="text-muted mb-4">Sorry, the page you're looking for doesn't exist or has been moved.</p>

            <Link to="/" className="btn btn-primary">Go to Dashboard</Link>
        </div>
    </div>
</div>

        </>
    )
}

export default NotFound;