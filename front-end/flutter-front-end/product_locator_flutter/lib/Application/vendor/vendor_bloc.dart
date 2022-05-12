import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import 'package:product_locator_flutter/Data/Model/vendor/vendor.dart';

import 'package:product_locator_flutter/Data/Repository/vendor_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'vendor_event.dart';
part 'vendor_state.dart';

class VendorBloc extends Bloc<VendorEvent, VendorState> {
  VendorRepo repo;
  VendorBloc(VendorState initailState, this.repo) : super(initailState) {
    on<VendorEvent>((event, emit) async {
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is VendorPageOpened) {
        emit(VendorLoadingState());

        var data = await repo.get_Vendor();
        print('ermias mulugeta');
        print(data);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(VendorFetchedState(data));
      } else if (event is VendorErrorEvent) {
        emit(VendorErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
