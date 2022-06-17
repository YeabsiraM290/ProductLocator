import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import 'package:product_locator_flutter/Data/Model/vendor/vendor.dart';
import 'package:product_locator_flutter/Data/Repository/comment_for_item_discription.dart';

import 'package:product_locator_flutter/Data/Repository/vendor_repo.dart';

import 'package:product_locator_flutter/Presentation/utils/storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'comment_item_disc_state.dart';
part 'comment_item_event.dart';

class CommentItemDiscBloc
    extends Bloc<CommentItemDiscEvent, CommentItemDiscState> {
  CommentForItemDiscRepo repo;
  CommentItemDiscBloc(CommentItemDiscState initailState, this.repo)
      : super(initailState) {
    on<CommentItemDiscEvent>((event, emit) async {
      var pref = await SharedPreferences.getInstance();
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      if (event is CommentItemDiscPageOpened) {
        emit(CommentItemDiscLoadingState());

        var data = await repo.get_ItemDiscCommnet();
        print('ermias mulugeta');
        print(data);
        // var ProfileInfo = {
        //   'first_name': data['first_name'],
        //   'email': data['email'],
        //   'phone_no': data['phone_no']
        // };

        // print(ProfileInfo);

        emit(CommentItemDiscFetchedState());
      } else if (event is CommentItemDiscErrorEvent) {
        emit(CommentItemDiscErrorState(
            message: 'the error is occured wile feteching profile '));
      }
    });
  }
}
