import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/widgets/Login/login_content/login_content_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/app_drawer/app_drawer.dart';
import 'package:product_locator_flutter/Presentation/widgets/Login/login_container/login_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/app_drawer/app_drawer.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_container/cards_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/register/register_container/register_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/shop/shop_container/shop_container.dart';
// import '../widgets/app_drawer/drawer_option/drawr_option_mobile.dart';
// import '../widgets/profile_view_widget/profile_conatiner/profile_container.dart';
// import '../widgets/shop/shop_content/shop_content.dart';
// import 'package:product_locator_flutter/Presentation/widgets/vendor/vendor_container/vendor_container.dart';

// import '../widgets/wish_list/wish_list_container/wish_list_container.dart';
// import 'package:product_locator_flutter/Presentation/widgets/cards_container/cards_container.dart';
// import 'package:product_locator_flutter/Presentation/widgets/cards_content/cards_content_mobile.dart';

class RegisterMobilePortrait extends StatelessWidget {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  RegisterMobilePortrait({Key? key}) : super(key: key);

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
      body: ListView.builder(
          itemCount: 1,
          itemBuilder: (context, index) {
            return Column(
                // ignore: prefer_const_literals_to_create_immutables
                children: [
                  // MyApp()
                  RegisterContainer()
                  // const VendorContainer()
                  // const ProductHomeContainer(),
                  // const ProfileContainer(),
                  // const RegisterContainer(),
                  // const RegisterContentMobilePortrait(),
                  // const WishListContainer(),
                  // const ShopContainer(),

                  // const AppDrawer()
                ]);
          }),
    );
  }
}

class RegisterMobileLandscape extends StatelessWidget {
  const RegisterMobileLandscape({Key? key}) : super(key: key);

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
