part of 'customer_profile_pic_bloc.dart';

@immutable
abstract class CustomerProfileEvnet {}

class OnSelectMulpipleImageEvnet extends CustomerProfileEvnet {
  final List<XFile> image;

  OnSelectMulpipleImageEvnet({required this.image});
}

class OnUnSelectMulpipleImageEvnet extends CustomerProfileEvnet {
  final List<XFile>? image;

  OnUnSelectMulpipleImageEvnet({this.image});
}
