import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

class Login {
  String? access;

  List<Categories>? categories;

  Login({
    required this.access,
    required this.categories,
  });

  Login.fromJson(Map<String, dynamic> parsedJson) {
    access = parsedJson['access'];

    if (parsedJson['more'] != null) {
      categories = <Categories>[];

      (parsedJson['more'] as List).forEach((e) {
        categories!.add(Categories.fromJson(e));
      });
    }
  }
}

class Categories {
  String? category;

  Categories({
    this.category,
  });
  Categories.fromJson(Map<String, dynamic> parsedJson) {
    category = parsedJson['category'];
  }
}
