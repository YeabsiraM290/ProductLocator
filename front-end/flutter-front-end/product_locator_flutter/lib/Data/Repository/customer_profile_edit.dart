import 'dart:convert';
import 'dart:async';

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:file/file.dart';
import 'package:product_locator_flutter/Data/Model/Customer_model/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Provider/User_Login/User_Login.dart';

import 'dart:convert';

import 'package:http/http.dart' as http;

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';

class CustomerProfileEditRepo {
  // static var Customer_login_url;
  // final String? email;
  // final String? password;
  // CustomerLoginRepo(this.email, this.password);

  Future<String> get_Customer_profile_edit(
    String username,
    String email,
    String phone,
    String password,
    // Future<String> profile_pic,
  ) async {
    var request = http.MultipartRequest(
      'patch',
      Uri.parse("http://10.0.2.2:8000/api/customer/7/"),
    );
    print('profile picture lemasayet nw');
    // print(profile_pic);
    print('yihe repo yalw profile picture nw bro');
    // request.files.add(
    //   await http.MultipartFile.fromPath('profile_pic',
    //   profile_pic),
    // );
    request.fields.addAll({
      "username": username,
      "email": email,
      "phone": phone,
      "password": password,
    });
    print("request: " + request.toString());

    // var Customer_profile_edit_url = await http.put(
    //     Uri.parse(
    //       'http://10.0.2.2:8000/api/customer/4',
    //     ),
    //     // headers: {"content-type": "application/json"},

    //     // headers: {"content-type": "application/json"},
    //     body: {
    //       "username": username,
    //       "email": email,
    //       "password": password,
    //       "phone_no": phone,
    //       "profile_pic": profile_pic,
    //     });
    // print(Customer_profile_edit_url.toString());
    print("request: " + request.toString());

    var res = await request.send();
    print(res.statusCode);
    var resString = await res.stream.bytesToString();
    final decodedMap = json.decode(resString);

    return decodedMap;

    // if (res.statusCode == 200) {
    //   var data = CustomerProfileEditModel(res);
    //   return data;
    // } else {
    //   print("auth problem");
    //   print(res.statusCode.toString());
    //   print(res.body.toString());
    //   throw Exception('failed to load the player status');
    // }
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
// class ShopRepo {
//   Future<ShopModel> get_shop() async {
//     var Shop_url = await http.get(
//       Uri.parse(
//         'http://127.0.0.1:8000/api/shop/1/',
//       ),
//       // headers: {"Access-Control-Allow-Origin": "*"},

//       // headers: {"content-type": "application/json"},
//     );
//     print(Shop_url.toString());

//     if (Shop_url.statusCode == 200) {
//       // print(Shop_url.fromJson(json.decode(Vendor_url.body)));
//       // var data = json.decode(Vendor_url.body);

//       var data = ShopModel.fromJson(json.decode(Shop_url.body));

//       print(data);

//       return data;
//       // return Customer_login_url.fromJson(
//       //     json.decode(Customer_login_url.statusCode));
//     } else {
//       print("profile responce gone inapproprate");
//       throw Exception('failed to load the player status');
//     }
//   }
// }
