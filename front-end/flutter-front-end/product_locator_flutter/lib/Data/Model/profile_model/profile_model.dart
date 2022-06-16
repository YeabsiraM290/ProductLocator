import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

class ProfileModel {
  int id;
  String username;
  String email;
  int phone_number;
  // String image;
  ProfileModel({
    required this.id,
    required this.username,
    required this.email,
    required this.phone_number,
    // required this.image
  });

  factory ProfileModel.fromJson(Map<String, dynamic> json) {
    return ProfileModel(
      id: json['id'],
      username: json['username'],
      email: json['email'],
      phone_number: json['phone_no'],
      // image: json['profile_pic']
    );
  }
}
