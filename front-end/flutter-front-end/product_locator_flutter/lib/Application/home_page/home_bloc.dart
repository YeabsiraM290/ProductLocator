import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:product_locator_flutter/Data/Model/home_model/home_model.dart';

import 'package:product_locator_flutter/Data/Model/shop/shop_model.dart';

import 'package:product_locator_flutter/Data/Model/vendor/vendor.dart';
import 'package:product_locator_flutter/Data/Repository/home_repo.dart';
import 'package:product_locator_flutter/Data/Repository/shop_repo.dart';

import 'package:product_locator_flutter/Data/Repository/vendor_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'home_event.dart';
part 'home_state.dart';

class HomeBloc extends Bloc<HomeEvent, HomeState> {
  HomeRepo repo;
  HomeBloc(HomeState initailState, this.repo) : super(initailState) {
    on<HomeEvent>((event, emit) async {
      if (event is HomePageOpened) {
        emit(HomeLoadingState());

        var data = await repo.get_home();
        print('ermias mulugeta');
        // print(data.categories);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(HomeFetchedState());
      } else if (event is HomeErrorEvent) {
        emit(HomeErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
