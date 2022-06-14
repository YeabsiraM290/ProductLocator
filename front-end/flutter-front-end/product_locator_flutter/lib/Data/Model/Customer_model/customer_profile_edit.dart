import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

class CustomerProfileEditModel {
  final String customerUserName;
  final String customerEmail;
  final int customerphone;
  // final String customerpassword;
  CustomerProfileEditModel({
    required this.customerUserName,
    required this.customerEmail,
    required this.customerphone,
    // required this.customerpassword
  });

  factory CustomerProfileEditModel.fromJson(Map<String, dynamic> json) {
    // var list = json['items'] as List;
    // print(list.runtimeType);

    return CustomerProfileEditModel(
      customerUserName: json['username'],
      customerEmail: json['email'],
      customerphone: json['phone_no'],
      // customerpassword: json['password']
    );
  }
}
