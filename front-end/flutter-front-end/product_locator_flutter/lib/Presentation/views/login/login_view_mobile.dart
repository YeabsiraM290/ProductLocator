import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:product_locator_flutter/Application/customer_login/customer_login_bloc.dart';
import 'package:product_locator_flutter/Presentation/widgets/app_drawer/app_drawer.dart';
import 'package:product_locator_flutter/Presentation/widgets/Login/login_container/login_container.dart';

class LoginMobilePortrait extends StatelessWidget {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  LoginMobilePortrait({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(children: [
          Text('Product locator'),
          Container(
            margin: EdgeInsets.only(left: 5),
            height: 40,
            width: 40,
            child: Image.asset('assets/product_locator_.png'),
          )
        ]),
        // actions:[
        //   const IconButton(
        //     icon:Icon(Icons.search) ,
        //     onPressed: (){
        //       showSearch(context: context, delegate: MySearchDelegate())
        //     },

        //     )
        // ]
      ),
      // backgroundColor: Colors.black,
      key: _scaffoldKey,
      drawer: const AppDrawer(),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.my_location),
        onPressed: () {},
      ),
      body: LoginContainer()
      // ListView.builder(
      //     itemCount: 1,
      //     itemBuilder: (context, index) {
      // return ()
      // ignore: prefer_const_literals_to_create_immutables

      // MyApp()

      // const VendorContainer()
      // const ProductHomeContainer(),
      // const ProfileContainer(),
      // const RegisterContainer(),
      // const LoginContentMobilePortrait(),
      // const WishListContainer(),
      // const ShopContainer(),

      // const AppDrawer()

      ,
    );
  }
}

class LoginMobileLandscape extends StatelessWidget {
  const LoginMobileLandscape({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            // color: Colors.black,
            child: Column(children: [
      // const HomeTitle(),
      Expanded(
          child: ListView(
              shrinkWrap: true,
              scrollDirection: Axis.horizontal,
              children: [
            // const AppDrawer(),
            Container(
              child: Text('landscape  mood '),
            ),
            // color: Colors.black, child: const CardsContainer()),
            Container(
                // color: Colors.black,
                padding: const EdgeInsets.fromLTRB(10, 5, 10, 14),
                child: Text('baddooo')
                //  const CardContentLast()
                ),
          ]))
    ])));
  }
}
