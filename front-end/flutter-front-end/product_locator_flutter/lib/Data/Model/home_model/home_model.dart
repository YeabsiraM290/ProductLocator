import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

class HomeModel {
  int id;
  String name;
  String price;
  String discription;
  // String image;
  HomeModel({
    required this.id,
    required this.name,
    required this.price,
    required this.discription,
    // required this.image
  });

  factory HomeModel.fromJson(Map<String, dynamic> json) {
    return HomeModel(
      id: json['id'],
      name: json['name'],
      price: json['price'],
      discription: json['discription'],
      // image: json['profile_pic']
    );
  }
}
