import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import 'package:product_locator_flutter/Data/Model/shop/shop_model.dart';

import 'package:product_locator_flutter/Data/Model/vendor/vendor.dart';
import 'package:product_locator_flutter/Data/Repository/shop_repo.dart';

import 'package:product_locator_flutter/Data/Repository/vendor_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'shop_event.dart';
part 'shop_state.dart';

class ShopBloc extends Bloc<ShopEvent, ShopState> {
  ShopRepo repo;
  ShopBloc(ShopState initailState, this.repo) : super(initailState) {
    on<ShopEvent>((event, emit) async {
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is ShopPageOpened) {
        emit(ShopLoadingState());

        var data = await repo.get_shop(event.id);
        print('ermias mulugeta');
        print(data.categories);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(ShopFetchedState(data));
      } else if (event is ShopErrorEvent) {
        emit(ShopErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
