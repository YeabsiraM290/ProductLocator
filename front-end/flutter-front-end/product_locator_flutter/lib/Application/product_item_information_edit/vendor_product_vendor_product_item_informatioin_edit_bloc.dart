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
import 'package:product_locator_flutter/Data/Repository/product_item_information_edit.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'vendor_product_item_information_edit_event.dart';
part 'vendor_product_item_information_edit_state.dart';

class ProductItemInformationEditBloc extends Bloc<
    ProductItemInformationEditEvent, ProductItemInformationEditState> {
  ProductItemInformationEditRepo repo;
  ProductItemInformationEditBloc(
      ProductItemInformationEditState initailState, this.repo)
      : super(initailState) {
    on<ProductItemInformationEditEvent>((event, emit) async {
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is ProdductItemInformationEditStatePageOpened) {
        emit(ProductItemInformationEditLoadingState());

        var data = await repo.get_product_item_information(
            event.item_id, event.discription, event.name, event.price);

        print('ermias mulugeta');
        print(data);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(ProductItemInformationEditFetchedState(data));
      } else if (event is CutomerEditErrorEvent) {
        emit(ProdductItemInformationEditErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
