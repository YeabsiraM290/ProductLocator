import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:file/file.dart';
import 'package:meta/meta.dart';
import 'package:product_locator_flutter/Data/Model/Customer_model/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Model/profile_model/profile_model.dart';
import 'package:product_locator_flutter/Data/Repository/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Repository/customer_profile_get_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'customer_profile_event.dart';
part 'customer_profile_state.dart';

class CustomerProfileEditBloc
    extends Bloc<CustomerProfileEditEvent, CustomerProfileEditState> {
  CustomerProfileEditRepo repo;
  CustomerProfileEditBloc(CustomerProfileEditState initailState, this.repo)
      : super(initailState) {
    on<CustomerProfileEditEvent>((event, emit) async {
      // var pref = await SharedPreferences.getInstance();
      // final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is CustomerEditPageOpened) {
        emit(CustomerProfileEditLoadingState());

        var data = await repo.get_Customer_profile_edit(
          event.username,
          event.email, event.phone, event.password,
          // event.profile_pic
        );
        print('ermias mulugeta');
        print(data);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(CustomerProfileEditFetchedState(data));
      } else if (event is CutomerEditErrorEvent) {
        emit(CustomerEditErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
