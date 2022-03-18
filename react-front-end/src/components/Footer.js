import './assets/css/footer.css'
const Footer = () => {

    return(
     
        <footer className="section-footer border-top">
            <div className="container-fluid">
                <section className="footer-top padding-y">
                    <div className="row">
                        <aside className="col-md-6">
                            <article className="mr-3">
                                <p className="mt-3 description">Some short text about company like You might remember the Dell computer commercials in which a youth reports this exciting news to his friends.</p>
                                <div> <a className="btn btn-icon btn-light" title="Facebook" target="_blank" href="#" data-abc="true"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-icon btn-light" title="Instagram" target="_blank" href="#" data-abc="true"><i className="fab fa-instagram"></i></a> <a className="btn btn-icon btn-light" title="Youtube" target="_blank" href="#" data-abc="true"><i className="fab fa-youtube"></i></a> <a className="btn btn-icon btn-light" title="Twitter" target="_blank" href="#" data-abc="true"><i className="fab fa-twitter"></i></a> </div>
                            </article>
                        </aside>
                        <aside className="col-sm-4 col-md-2">
                            <h6 className="title">About</h6>
                            <ul className="list-unstyled">
                                <li> <a href="#" data-abc="true">About us</a></li>
                                <li> <a href="#" data-abc="true">Services</a></li>
                                <li> <a href="#" data-abc="true">Terms & Condition</a></li>
                                <li> <a href="#" data-abc="true">Our Blogs</a></li>
                            </ul>
                        </aside>
                        <aside className="col-sm-4 col-md-2">
                            <h6 className="title">Services</h6>
                            <ul className="list-unstyled">
                                <li> <a href="#" data-abc="true">Help center</a></li>
                                <li> <a href="#" data-abc="true">Money refund</a></li>
                                <li> <a href="#" data-abc="true">Terms and Policy</a></li>
                                <li> <a href="#" data-abc="true">Open dispute</a></li>
                            </ul>
                        </aside>
                        <aside className="col-sm-4 col-md-2">
                            <h6 className="title">For users</h6>
                            <ul className="list-unstyled">
                                <li> <a href="#" data-abc="true"> User Login </a></li>
                                <li> <a href="#" data-abc="true"> User register </a></li>
                                <li> <a href="#" data-abc="true"> Account Setting </a></li>
                                <li> <a href="#" data-abc="true"> My Orders </a></li>
                            </ul>
                        </aside>
                   
                    </div>
                </section>
                <section className="footer-copyright border-top">
                    <p className="float-left text-muted"> © 2022 ProductLocator All rights resetved </p>
                    <p target="_blank" className="float-right text-muted"> <a href="#" data-abc="true">Privacy &amp; Cookies</a> &nbsp; &nbsp; <a href="#" data-abc="true">Accessibility</a> </p>
                </section>
            </div>
   
        </footer>


    )

}

export default Footer        