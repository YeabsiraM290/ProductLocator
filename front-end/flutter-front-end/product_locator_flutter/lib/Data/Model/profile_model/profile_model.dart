import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

class ProfileModel {
  int id;
  String firstname;
  String email;
  int phone_number;
  String image;
  ProfileModel(
      {required this.id,
      required this.firstname,
      required this.email,
      required this.phone_number,
      required this.image});

  factory ProfileModel.fromJson(Map<String, dynamic> json) {
    return ProfileModel(
        id: json['id'],
        firstname: json['first_name'],
        email: json['email'],
        phone_number: json['phone_no'],
        image: json['profile_pic']);
  }
}
