import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

class VendorModel {
  int? id;
  String? username;
  List<Categories>? categories;
  List<More>? more;

  VendorModel(
      {required this.id,
      required this.username,
      required this.categories,
      required this.more});

  VendorModel.fromJson(Map<String, dynamic> parsedJson) {
    id = parsedJson['id'];
    username = parsedJson['first_name'];
    if (parsedJson['hardware'] != null) {
      categories = <Categories>[];

      (parsedJson['hardware'] as List).forEach((e) {
        categories!.add(Categories.fromJson(e));
        // more!.add(More.fromJson(e));
      });
    }

    // var category = parsedJson['hardware'] as List;
    // var more = parsedJson['more'] as List;
    // // List<Categories> categ =
    // //     category.map((i) => Categories.fromJson(i)).toList();
    // List<More> more_ = more.map((i) => More.fromJson(i)).toList();
  }
}

class Categories {
  int? id;

  String? description;

  Categories({this.id, this.description});
  Categories.fromJson(Map<String, dynamic> parsedJson) {
    id = parsedJson['id'];
    description = parsedJson['discription'];
  }
}

class More {
  String? shop_image;
  String? shop_logo;

  More({required this.shop_image, required this.shop_logo});

  More.fromJson(Map<String, dynamic> parsedJson) {
    shop_image = parsedJson['shop_image'];
    shop_logo = parsedJson['shop_logo'];
  }
}
