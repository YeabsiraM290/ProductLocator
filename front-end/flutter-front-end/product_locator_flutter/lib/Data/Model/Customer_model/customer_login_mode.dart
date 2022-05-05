import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

class CustomerLoginModel {
  final String customerUserName;
  final String customerPassword;
  CustomerLoginModel(
      {required this.customerUserName, required this.customerPassword});

  factory CustomerLoginModel.fromJson(Map<String, dynamic> json) {
    var list = json['items'] as List;
    print(list.runtimeType);

    return CustomerLoginModel(
        customerUserName: json['username'], customerPassword: json['password']);
  }
}
