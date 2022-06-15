import 'dart:convert';
import 'dart:async';

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Model/Customer_model/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Provider/User_Login/User_Login.dart';

import 'dart:convert';

import 'package:http/http.dart' as http;

// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';

class CustomerProfileDeleteRepo {
  // static var Customer_login_url;
  // final String? email;
  // final String? password;
  // CustomerLoginRepo(this.email, this.password);

  // Future<CustomerProfileDeleteModel>
  get_Customer_profile_delete(
      // String? username, String? email, String? phone, String? password
      ) async {
    var id = 5;
    var Customer_profile_delete_url = await http
        .delete(Uri.parse('http://10.0.2.2:8000/api/customer/${id}/'));
    print(Customer_profile_delete_url.toString());

    if (Customer_profile_delete_url.statusCode == 204) {
      print("Delete");
      var data = json.decode(Customer_profile_delete_url.body);
      return data;
      // var data = CustomerProfileDeleteModel.fromJson(
      //     json.decode(Customer_profile_delete_url.body));
      // return data;
    } else {
      print("auth problem");
      print(Customer_profile_delete_url.statusCode.toString());
      print(Customer_profile_delete_url.body.toString());
      throw Exception('failed to load the player status');
    }
  }
}
