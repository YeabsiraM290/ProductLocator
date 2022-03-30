import './assets/css/wishList.css'
import WishListItem from './WishListItem'

const WishList = () => {

    return(

        <section className="pt-5 pb-5">

            <div className="container">

                <div className="row w-100">

                    <div className="col-lg-12 col-md-12 col-12">

                        <h3 className="display-6 mb-3 text-center">Wish List</h3>

                        <table className="table table-condensed table-responsive">

                            <thead>
                                <tr>
                                    <th >Product</th>
                                </tr>
                            </thead>

                            <tbody>

                                {WishListItem()}
                                {WishListItem()}
                                {WishListItem()}

                            </tbody>

                        </table>
   
                    </div>

                </div>

            </div>

            <div class="text-center mt-3">
                <button class="btn btn-primary btn-block btn-lg ml-2 pay-button" type="button">Share Wish List</button>
            </div>

        </section>
    )

}

export default WishList