import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/views/home_view/home_view.dart';
import 'package:product_locator_flutter/Presentation/views/home_view/home_view_mobile.dart';
import 'package:product_locator_flutter/Presentation/views/login/login_view.dart';
import 'package:product_locator_flutter/Presentation/views/profile_views/profile_view.dart';
import 'package:product_locator_flutter/Presentation/views/register/register_view.dart';
import 'package:product_locator_flutter/Presentation/views/shop_view/shop_view.dart';
import 'package:product_locator_flutter/Presentation/views/vendor/vendor_view.dart';
import 'package:product_locator_flutter/Presentation/views/wish_list_view/wish_list_view.dart';
import 'package:product_locator_flutter/Presentation/widgets/Login/login_container/login_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_container/cards_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/profile_view_widget/profile_conatiner/profile_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/register/register_container/register_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/shop/shop_container/shop_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/vendor/vendor_container/vendor_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/wish_list/wish_list_container/wish_list_container.dart';

// class RouteGenerator {
//   static Route<dynamic> generateRoute(RouteSettings settings) {
//     final args = settings.arguments;
//     switch (settings.name) {
//       case '/':
//         return MaterialPageRoute(builder: (_) => ProductHomeContainer());
//       case '/Login':
//         return MaterialPageRoute(builder: (_) => LoginContainer());
//       case '/SignUp':
//         return MaterialPageRoute(builder: (_) => RegisterContainer());
//       case '/vendor':
//         return MaterialPageRoute(builder: (_) => VendorContainer());
//       case '/customer_profile':
//         return MaterialPageRoute(builder: (_) => ProfileContainer());
//       case '/wish_list':
//         return MaterialPageRoute(builder: (_) => WishListContainer());
//     }
//     return _errorRoute();
//   }
// }

// Route<dynamic> _errorRoute() {
//   return MaterialPageRoute(builder: (_) {
//     return Scaffold(
//         appBar: AppBar(
//           title: Text('Error'),
//         ),
//         body: Center(
//           child: Text('error'),
//         ));
//   });
// }

var routes = {
  '/': (context) => HomeView(),
  '/Login': (context) => LoginView(),
  '/SignUp': (context) => RegisterView(),
  '/shop': (context) => ShopView(),
  '/vendor': (context) => VendorView(),
  '/profile': (context) => ProfileView(),
  '/wish_list': (context) => WishListView()
};
