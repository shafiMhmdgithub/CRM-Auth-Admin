import React from 'react'
import { Link } from 'react-router-dom'
const ProductDetails = () => {
    return (
        <div className='card card-widget'>
                <div className="card-header">


                    <div>
                        {/* /.user-block */}
                        <div className="row mb-3">
                            <div className="col-sm-6">
                                <img className="img-fluid" src="../../dist/img/photo2.png" alt="Photo" />
                            </div>
                            <div className="col-sm-6">
                                <div className="row">



                                    <h3 className="text-primary"><i className="fas fa-paint-brush" /> AdminLTE v3</h3>
                                    <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
                                    <br />
                                    <div className="text-muted">
                                        <p className="text-sm">Client Company
                                            <b className="d-block">Deveint Inc</b>
                                        </p>
                                        <p className="text-sm">Project Leader
                                            <b className="d-block">Tony Chicken</b>
                                        </p>
                                    </div>
                                    <h5 className="mt-5 text-muted">Project files</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Functional-requirements.docx</a>
                                        </li>
                                        <li>
                                            <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-pdf" /> UAT.pdf</a>
                                        </li>
                                        <li>
                                            <a href className="btn-link text-secondary"><i className="far fa-fw fa-envelope" /> Email-from-flatbal.mln</a>
                                        </li>
                                        <li>
                                            <a href className="btn-link text-secondary"><i className="far fa-fw fa-image " /> Logo.png</a>
                                        </li>
                                        <li>
                                            <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Contract-10_12_2014.docx</a>
                                        </li>
                                    </ul>
                                    <div className="text-center mt-5 mb-3">
                                    <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                                    <Link to="/home-page" className="btn btn-info">Home</Link>
                                    </div>
                                </div>

                                <div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>

                            <p>
                                <a href="#" className="link-black text-sm mr-2"><i className="fas fa-share mr-1" /> Share</a>
                                <a href="#" className="link-black text-sm"><i className="far fa-thumbs-up mr-1" /> Like</a>

                            </p>
                            {/* /.col */}

                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        <div className="row mb-3">
                        <input className="form-control form-control-sm" type="text" placeholder="Type a comment" />
                   
                <div className="card-footer card-comments" style={{ display: 'block' }}>
                    <div className="card-comment">
                        {/* User image */}
                        <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image" />
                        <div className="comment-text">
                            <span className="username">
                                Maria Gonzales
                                <span className="text-muted float-right">8:03 PM Today</span>
                            </span>{/* /.username */}
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </div>
                        {/* /.comment-text */}
                    </div>
                    {/* /.card-comment */}
                    <div className="card-comment">
                        {/* User image */}
                        <img className="img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="User Image" />
                        <div className="comment-text">
                            <span className="username">
                                Luna Stark
                                <span className="text-muted float-right">8:03 PM Today</span>
                            </span>{/* /.username */}
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </div>
                        {/* /.comment-text */}
                    </div>
                    {/* /.card-comment */}
                </div>
                {/* /.card-footer */}
                <div className="card-footer" style={{ display: 'block' }}>
                    <form action="#" method="post">
                        <img className="img-fluid img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
                        {/* .img-push is used to add margin to elements next to floating images */}
                        <div className="img-push">
                            <input type="text" className="form-control form-control-sm" placeholder="Press enter to post comment" />
                        </div>
                    </form>
                </div>
                {/* /.card-footer */}
            </div>
            </div>
            </div>
            </div>
    )
}

export default ProductDetails