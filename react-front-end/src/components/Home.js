import HomeItem from "./HomeItem"
import './assets/css/home.css'

const Home = () => {

    return(

        <div className="row home">

            <div className="col-2"></div> 

            <div className="col-10 mb-5">

                <div className="mt-5 text-center">
                    <h3>Products you may like</h3>
                </div>

                <div className="row">

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                </div>

                <div className="row">

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                </div>

                <div className="row">

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                    <div className="col-md">
                        {HomeItem()}
                    </div>

                </div>

            </div> 

        </div>

    )
}

export default Home