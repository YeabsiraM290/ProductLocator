import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:file/file.dart';
import 'package:meta/meta.dart';
import 'package:product_locator_flutter/Data/Model/Customer_model/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Model/profile_model/profile_model.dart';
import 'package:product_locator_flutter/Data/Model/vendor/product_item_information_model.dart';
import 'package:product_locator_flutter/Data/Repository/customer_profile_edit.dart';
import 'package:product_locator_flutter/Data/Repository/customer_profile_get_repo.dart';
import 'package:product_locator_flutter/Data/Repository/product_item_inforamtion_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'product_item_information_event.dart';
part 'product_item_information_state.dart';

class ProductItemInformationGetBloc extends Bloc<ProductItemInformationGetEvent,
    ProductItemInformationGetState> {
  ProductItemInformationGetRepo repo;
  ProductItemInformationGetBloc(
      ProductItemInformationGetState initailState, this.repo)
      : super(initailState) {
    on<ProductItemInformationGetEvent>((event, emit) async {
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is ProdductItemInformationStatePageOpened) {
        emit(ProductItemInformationGetLoadingState());

        var data = await repo.get_product_item_information(event.item_id);

        print('ermias mulugeta');
        print(data);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(ProductItemInformationFetchedState(data));
      } else if (event is CutomerEditErrorEvent) {
        emit(ProdductItemInformationErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
