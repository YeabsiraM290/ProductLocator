import './assets/css/vendorMenu.css'

const VendorMenu = () => {

    return(

        <div className="row vendor-menu text-center">

            <div className="col mt-3"><a className='vendor-menu-items' href='/vendor_profile'>Profile</a></div>
            <div className="col mt-3"><a className='vendor-menu-items' href='/item_control'>Products</a></div>
            <div className="col mt-3"><a className='vendor-menu-items'>Advertisment</a></div>

        </div>
    )

}

export default VendorMenu