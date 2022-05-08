import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
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
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      // if (event is LoginButtonPressd) {
      //   // if (event.email!.isEmpty || event.password!.isEmpty) {}
      //   // emit(LoginErrorState(message: 'auth error'));
      // }
      if (event is LoginButtonPressd) {
        emit(LoginLoadingState());

        var data = await repo.get_User_Login(event.email, event.password);
        // print(data);
        var userInfo = {
          'access_token': data['access'],
          'refresh_token': data['refresh'],
          'id': data['account']['id']
        };
        // print(userInfo);
        // print('local storage');

        await UserSecureStorage.setUserInfo(userInfo);

        // print(data);
        pref.setString("token", data['access']);
        pref.setString("refresh", data['refresh']);
        emit(UserLoginSuccessState());
      } else if (event is LoginErrorEvent) {
        emit(LoginErrorState(message: 'please check your name and password'));
      }
    });
  }
}
    
          
  // @override
  // Stream<AuthState> mapEventToState(AuthEvent event) async* {
  //   var pref = await SharedPreferences.getInstance();
  //   if (event is StartEvent) {
  //     yield LoginInitState();
  //   } else if (event is LoginButtonPressd) {
  //     yield LoginLoadingState();
  //     var data = await repo.get_User_Login(event.email, event.password);
  //     print(data);
  //     pref.setString("token", data['access']);
  //     pref.setString("refresh", data['refresh']);
  //     // pref.setString("token", data['access']);
  //     // pref.setString("token", data['access']);
  //     yield UserLoginSuccessState();
  //     yield AdmnLoginSuccessState();
  //   } else {
  //     yield LoginErrorState(message: 'auth error');
  //   }
  // }
