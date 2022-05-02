import 'dart:convert';
import 'dart:async';

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Model/profile_model/profile_model.dart';
import 'package:product_locator_flutter/Data/Provider/User_Login/User_Login.dart';

import 'dart:convert';

import 'package:http/http.dart' as http;

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';

class ProfileRepo {
  // static var Customer_login_url;
  // final String? email;
  // final String? password;
  // CustomerLoginRepo(this.email, this.password);

  Future<ProfileModel> get_Profile() async {
    var Customer_login_url = await http.get(
      Uri.parse(
        'http://127.0.0.1:8000/api/customer/5/',
      ),
      // headers: {"content-type": "application/json"},

      // headers: {"content-type": "application/json"},
    );
    print(Customer_login_url.toString());

    if (Customer_login_url.statusCode == 200) {
      // print(Customer_login_url.fromJson(json.decode(Customer_login_url.body)));
      // var data = json.decode(Customer_login_url.body);
      var data = ProfileModel.fromJson(json.decode(Customer_login_url.body));

      return data;
      // return Customer_login_url.fromJson(
      //     json.decode(Customer_login_url.statusCode));
    } else {
      print("profile responce gone inapproprate");
      throw Exception('failed to load the player status');
    }
  }
}
