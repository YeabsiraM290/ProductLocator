import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:image_picker/image_picker.dart';

part 'customer_profile_pic_sate.dart';

part 'customer_profile_pic_event.dart';

class CutomerProfilePicBloc
    extends Bloc<CustomerProfileEvnet, CustomerProfilePicState> {
  CutomerProfilePicBloc() : super(CustomerProfilePicState()) {
    on<OnSelectMulpipleImageEvnet>(_OnSelectMulpipleImages);
    on<OnUnSelectMulpipleImageEvnet>(_OnUnSelectMulpipleImages);
  }
  Future<void> _OnSelectMulpipleImages(OnSelectMulpipleImageEvnet event,
      Emitter<CustomerProfilePicState> emit) async {
    emit(state.copywith(images: event.image));
  }

  Future<void> _OnUnSelectMulpipleImages(OnUnSelectMulpipleImageEvnet event,
      Emitter<CustomerProfilePicState> emit) async {
    emit(state.copywith(images: event.image));
  }
}
