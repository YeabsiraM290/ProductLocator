import 'dart:convert';
import 'dart:async';

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Provider/User_Login/User_Login.dart';

import 'dart:convert';

import 'package:http/http.dart' as http;

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';

class CustomerLoginRepo {
  // static var Customer_login_url;
  // final String? email;
  // final String? password;
  // CustomerLoginRepo(this.email, this.password);

  get_User_Login(String? email, String? password) async {
    var Customer_login_url = await http.post(
        Uri.parse(
          'http://127.0.0.1:8000/api/token/',
        ),
        // headers: {"content-type": "application/json"},

        // headers: {"content-type": "application/json"},
        body: {"username": email, "password": password});
    print(Customer_login_url.toString());

    if (Customer_login_url.statusCode == 200) {
      // print(Customer_login_url.fromJson(json.decode(Customer_login_url.body)));
      var data = json.decode(Customer_login_url.body);
      return data;
      // return Customer_login_url.fromJson(
      //     json.decode(Customer_login_url.statusCode));
    } else {
      print("auth problem");
      throw Exception('failed to load the player status');
    }
  }
}

// // repo le  data provider email ena password melakk
// // data provider demooo 200 kemeta return selemiyareg data
// class CustomerLoginRepo extends User_Login_Provider {
//   final String? email;
//   final String? password;
//   // CustomerLoginRepo():email=ermias;
//   // static String get ermias=>this.email;
//   CustomerLoginRepo(this.email, this.password) : super(email, password);
//   // CustomerLoginRepo({required String emaill, required String passwordd})
//   //     : super(email: emaill, password: passwordd);
//   // ermias=this.email
//   // ignore: prefer_final_fields
//   // User_Login_Provider _provider =User_Login_Provider(email: email, password: password);
//   @override
//   get_User_Login_repos(String? email, String? password) {
//     print(get_User_Login(email, password));
//     return get_User_Login(email, password);
//   }
// }

// class NetworkError extends Error {}
