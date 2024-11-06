import React from 'react'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div>   <div className="content">
    <div className="container">
      <div className="row card1"  >
      
        <div className="col-lg-4" style={{ color:'transparent' }}>        

        
            <div className="card card-widget widget-user shadow-lg">
                {/* Add the bg color to the header using any of the bg-* classes */}
                <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                    <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                    <h5 className="widget-user-desc text-right">Web Designer</h5>
                </div>
                <div className="widget-user-image">
                    <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-sm-4 border-right">
                            <div className="description-block">
                                <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                <span className="description-text">Rattings</span>
                            </div>
                            {/* /.description-block */}
                        </div>
                        {/* /.col */}
                        <div className="col-sm-4 border-right">
                            <div className="description-block">
                                <h5 className="description-header">90090</h5>
                                <span className="description-text">Price</span>
                            </div>
                            {/* /.description-block */}
                        </div>
                        {/* /.col */}
                        <div className="col-sm-4">
                            <Link to="/product-details"> 
                            <div className="description-block">
                                <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                <span className="description-text">Details</span>
                            </div>
                            </Link>
                            {/* /.description-block */}
                        </div>
                        {/* /.col */}
                    </div>
                    <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                    {/* /.row */}
                </div>
            </div>
            

        </div>
        <div className="col-lg-4">        
        
                      {/* Widget: user widget style 1 */}
                      <div className="card card-widget widget-user shadow-lg">
                          {/* Add the bg color to the header using any of the bg-* classes */}
                          <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                              <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                              <h5 className="widget-user-desc text-right">Web Designer</h5>
                          </div>
                          <div className="widget-user-image">
                              <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                          </div>
                          <div className="card-footer">
                              <div className="row">
                                  <div className="col-sm-4 border-right">
                                      <div className="description-block">
                                          <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                          <span className="description-text">Rattings</span>
                                      </div>
                                      {/* /.description-block */}
                                  </div>
                                  {/* /.col */}
                                  <div className="col-sm-4 border-right">
                                      <div className="description-block">
                                          <h5 className="description-header">90090</h5>
                                          <span className="description-text">Price</span>
                                      </div>
                                      {/* /.description-block */}
                                  </div>
                                  {/* /.col */}
                                  <div className="col-sm-4">
                                     <Link to="/product-details"> 
                                     <div className="description-block">
                                          <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                          <span className="description-text">Details</span>
                                      </div>
                                      </Link>
                                      {/* /.description-block */}
                                  </div>
                                  {/* /.col */}
                              </div>
                              <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                              {/* /.row */}
                          </div>
                      </div>
                      {/* /.widget-user */}

        </div>
        <div className="col-lg-4">        
        
                      {/* Widget: user widget style 1 */}
                      <div className="card card-widget widget-user shadow-lg">
                          {/* Add the bg color to the header using any of the bg-* classes */}
                          <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                              <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                              <h5 className="widget-user-desc text-right">Web Designer</h5>
                          </div>
                          <div className="widget-user-image">
                              <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                          </div>
                          <div className="card-footer">
                              <div className="row">
                                  <div className="col-sm-4 border-right">
                                      <div className="description-block">
                                          <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                          <span className="description-text">Rattings</span>
                                      </div>
                                      {/* /.description-block */}
                                  </div>
                                  {/* /.col */}
                                  <div className="col-sm-4 border-right">
                                      <div className="description-block">
                                          <h5 className="description-header">90090</h5>
                                          <span className="description-text">Price</span>
                                      </div>
                                      {/* /.description-block */}
                                  </div>
                                  {/* /.col */}
                                  <div className="col-sm-4">
                                     <Link to="/product-details"> 
                                     <div className="description-block">
                                          <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                          <span className="description-text">Details</span>
                                      </div>
                                      </Link>
                                      {/* /.description-block */}
                                  </div>
                                  {/* /.col */}
                              </div>
                              <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                              {/* /.row */}
                          </div>
                      </div>
                      {/* /.widget-user */}

        </div>
       
        {/* /.col-md-6 */}
      </div>
      <div className="row">
      
      <div className="col-lg-4">        
      
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user shadow-lg">
                        {/* Add the bg color to the header using any of the bg-* classes */}
                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                            <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                        </div>
                        <div className="widget-user-image">
                            <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                        <span className="description-text">Rattings</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">90090</h5>
                                        <span className="description-text">Price</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4">
                                   <Link to="/product-details"> 
                                   <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                        <span className="description-text">Details</span>
                                    </div>
                                    </Link>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                            </div>
                            <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.widget-user */}

      </div>
      <div className="col-lg-4">        
      
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user shadow-lg">
                        {/* Add the bg color to the header using any of the bg-* classes */}
                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                            <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                        </div>
                        <div className="widget-user-image">
                            <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                        <span className="description-text">Rattings</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">90090</h5>
                                        <span className="description-text">Price</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4">
                                   <Link to="/product-details"> 
                                   <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                        <span className="description-text">Details</span>
                                    </div>
                                    </Link>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                            </div>
                            <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.widget-user */}

      </div>
      <div className="col-lg-4">        
      
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user shadow-lg">
                        {/* Add the bg color to the header using any of the bg-* classes */}
                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                            <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                        </div>
                        <div className="widget-user-image">
                            <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                        <span className="description-text">Rattings</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">90090</h5>
                                        <span className="description-text">Price</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4">
                                   <Link to="/product-details"> 
                                   <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                        <span className="description-text">Details</span>
                                    </div>
                                    </Link>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                            </div>
                            <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.widget-user */}

      </div>
     
      {/* /.col-md-6 */}
    </div>
    <div className="row">
      
      <div className="col-lg-4">        
      
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user shadow-lg">
                        {/* Add the bg color to the header using any of the bg-* classes */}
                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                            <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                        </div>
                        <div className="widget-user-image">
                            <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                        <span className="description-text">Rattings</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">90090</h5>
                                        <span className="description-text">Price</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4">
                                   <Link to="/product-details"> 
                                   <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                        <span className="description-text">Details</span>
                                    </div>
                                    </Link>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                            </div>
                            <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.widget-user */}

      </div>
      <div className="col-lg-4">        
      
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user shadow-lg">
                        {/* Add the bg color to the header using any of the bg-* classes */}
                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                            <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                        </div>
                        <div className="widget-user-image">
                            <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                        <span className="description-text">Rattings</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">90090</h5>
                                        <span className="description-text">Price</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4">
                                   <Link to="/product-details"> 
                                   <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                        <span className="description-text">Details</span>
                                    </div>
                                    </Link>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                            </div>
                            <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.widget-user */}

      </div>
      <div className="col-lg-4">        
      
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user shadow-lg">
                        {/* Add the bg color to the header using any of the bg-* classes */}
                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                            <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                        </div>
                        <div className="widget-user-image">
                            <img className="img" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-star'></i></h5>
                                        <span className="description-text">Rattings</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 border-right">
                                    <div className="description-block">
                                        <h5 className="description-header">90090</h5>
                                        <span className="description-text">Price</span>
                                    </div>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4">
                                   <Link to="/product-details"> 
                                   <div className="description-block">
                                        <h5 className="description-header"><i className='fas fa-arrow-right'></i></h5>
                                        <span className="description-text">Details</span>
                                    </div>
                                    </Link>
                                    {/* /.description-block */}
                                </div>
                                {/* /.col */}
                            </div>
                            <Link to="/add-to-cart" className="btn btn-primary">Shop Now</Link>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.widget-user */}

      </div>
     
      {/* /.col-md-6 */}
    </div>
      
    </div>
  </div></div>
  )
}

export default MainContainer