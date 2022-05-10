import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:product_locator_flutter/Data/Model/profile_model/profile_model.dart';
import 'package:product_locator_flutter/Data/Repository/profile_login_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'profile_event.dart';
part 'profile_state.dart';

class ProfileBloc extends Bloc<ProfileEvent, ProfileState> {
  ProfileRepo repo;
  ProfileBloc(ProfileState initailState, this.repo) : super(initailState) {
    on<ProfileEvent>((event, emit) async {
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is ProfilePageOpened) {
        emit(ProfileLoadingState());

        var data = await repo.get_Profile();
        print('ermias mulugeta');
        print(data);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(ProfileFetchedState(data));
      } else if (event is LoginErrorEvent) {
        emit(LoginErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
