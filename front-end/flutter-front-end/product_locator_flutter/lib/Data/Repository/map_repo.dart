import 'dart:convert';
import 'dart:async';
import 'package:product_locator_flutter/Data/Model/map_model.dart';
import 'package:product_locator_flutter/Data/Model/profile_model/profile_model.dart';
import 'package:product_locator_flutter/Data/Model/shop/shop_model.dart';
import 'package:product_locator_flutter/Data/Model/vendor/vendor.dart';
import 'package:product_locator_flutter/Data/Provider/User_Login/User_Login.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';

class MapRepo {
  Future<MapModel> get_map() async {
    var Shop_url = await http.get(
      Uri.parse(
        'http://10.0.2.2:8000/api/shop/10',
      ),
      // headers: {"Access-Control-Allow-Origin": "*"},

      // headers: {"content-type": "application/json"},
    );
    print(Shop_url.toString());

    if (Shop_url.statusCode == 200) {
      // print(Shop_url.fromJson(json.decode(Vendor_url.body)));
      // var data = json.decode(Vendor_url.body);
      print('kasd');
      print(Shop_url);
      // for (var i=Shop_url.body.toString().length)
      var data = MapModel.fromJson(json.decode(Shop_url.body));

      print(data.more!.location_latitude);
      print(data.more!.location_longitude);

      return data;
      // return Customer_login_url.fromJson(
      //     json.decode(Customer_login_url.statusCode));
    } else {
      print("profile responce gone inapproprate");
      throw Exception('failed to load the player status');
    }
  }
}
