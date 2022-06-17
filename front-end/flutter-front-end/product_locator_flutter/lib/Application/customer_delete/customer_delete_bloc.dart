import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:product_locator_flutter/Data/Model/Customer_model/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Model/profile_model/profile_model.dart';
import 'package:product_locator_flutter/Data/Repository/cusomer_profile_delete.dart';
import 'package:product_locator_flutter/Data/Repository/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Repository/customer_profile_get_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'customer_delete_event.dart';
part 'customer_delete_state.dart';

class CustomerProfileDeleteBloc
    extends Bloc<CustomerProfileDeleteEvent, CustomerProfileDeleteState> {
  CustomerProfileDeleteRepo repo;
  CustomerProfileDeleteBloc(CustomerProfileDeleteState initailState, this.repo)
      : super(initailState) {
    on<CustomerProfileDeleteEvent>((event, emit) async {
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is CustomerDeletePageOpened) {
        emit(CustomerProfileDeleteLoadingState());

        var data = await repo.get_Customer_profile_delete(
            // event.username, event.email, event.phone, event.password
            );
        print('ermias mulugeta');
        print(data);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(CustomerProfileDeleteFetchedState());
      } else if (event is CutomerDeleteErrorEvent) {
        emit(CustomerDeleteErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
