part of 'vendor_product_vendor_product_item_informatioin_edit_bloc.dart';

// import 'package:equatable/equatable.dart';
class ProductItemInformationEditEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends ProductItemInformationEditEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class ProdductItemInformationEditStatePageOpened
    extends ProductItemInformationEditEvent {
  final String item_id;
  final String name;
  final String price;
  final String discription;

  ProdductItemInformationEditStatePageOpened({
    required this.item_id,
    required this.name,
    required this.discription,
    required this.price,
  });
}

class CutomerEditErrorEvent extends ProductItemInformationEditEvent {
  final String? message;
  CutomerEditErrorEvent({this.message});
}
