import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:product_locator_flutter/Data/Model/Login/login_model.dart';
// import 'package:product_locator_flutter/Application/customer_login/form_submission_sate.dart';
// import 'package:product_locator_flutter/Data/Model/Customer_model/customer_login_model.dart';
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';
import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'customer_login_event.dart';
part 'customer_login_states.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  CustomerLoginRepo repo;
  AuthBloc(AuthState initailState, this.repo) : super(initailState) {
    on<AuthEvent>((event, emit) async {
      if (event is LoginButtonPressd) {
        emit(LoginLoadingState());

        var data = await repo.get_User_Login(event.email, event.password);
        // print(data);
        if (data['account']['more']['category'] != null) {
          var categroy = data['account']['more']['category'];
          var userid = data['account']['id'];
          usertype("vendor");
          saveuserid(userid.toString());
          print(userid.toString());
          savecategory(categroy);
          print('its a vendor');
        } else {
          var userid = data['account']['id'];
          usertype("customer");
          saveuserid(userid.toString());
          print('its a customer');
        }
        print(data);
        var access_token = data['access'];

        print(access_token);
        saveMyName(access_token);

        emit(UserLoginSuccessState());
      } else if (event is LoginErrorEvent) {
        emit(LoginErrorState(message: 'please check your name and password'));
      }
    });
  }
}

Future<void> saveMyName(String token) async {
  final pref = await SharedPreferences.getInstance();
  pref.setString("authtoken", token);
}

Future<void> savecategory(String category) async {
  final pref = await SharedPreferences.getInstance();
  pref.setString("category", category);
}

Future<void> usertype(String usertype) async {
  final pref = await SharedPreferences.getInstance();
  pref.setString("usertype", usertype);
}

Future<void> saveuserid(String userid) async {
  final pref = await SharedPreferences.getInstance();
  pref.setString("userid", userid);
}
