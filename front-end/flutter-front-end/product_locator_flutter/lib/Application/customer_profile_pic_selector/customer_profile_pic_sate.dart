part of 'customer_profile_pic_bloc.dart';

class CustomerProfilePicState {
  final List<XFile>? images;
  CustomerProfilePicState({this.images});
  CustomerProfilePicState copywith({List<XFile>? images}) =>
      CustomerProfilePicState(images: images ?? this.images);
}

class CustomerInitail extends CustomerProfilePicState {}
