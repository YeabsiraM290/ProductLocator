import 'dart:convert';
import 'dart:async';
import 'package:product_locator_flutter/Data/Model/profile_model/profile_model.dart';
import 'package:product_locator_flutter/Data/Model/vendor/vendor.dart';
import 'package:product_locator_flutter/Data/Provider/User_Login/User_Login.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';

class VendorRepo {
  Future<VendorModel> get_Vendor() async {
    var Vendor_url = await http.get(
      Uri.parse(
        'http://127.0.0.1:8000/api/vendor/1/',
      ),
      // headers: {"content-type": "application/json"},

      // headers: {"content-type": "application/json"},
    );
    print(Vendor_url.toString());

    if (Vendor_url.statusCode == 200) {
      // print(Vendor_url.fromJson(json.decode(Vendor_url.body)));
      // var data = json.decode(Vendor_url.body);

      var data = VendorModel.fromJson(json.decode(Vendor_url.body));

      print(data);

      return data;
      // return Customer_login_url.fromJson(
      //     json.decode(Customer_login_url.statusCode));
    } else {
      print("profile responce gone inapproprate");
      throw Exception('failed to load the player status');
    }
  }
}
