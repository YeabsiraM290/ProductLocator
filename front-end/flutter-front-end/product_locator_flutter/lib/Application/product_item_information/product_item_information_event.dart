part of 'product_item_information_bloc.dart';

// import 'package:equatable/equatable.dart';
class ProductItemInformationGetEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends ProductItemInformationGetEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class ProdductItemInformationStatePageOpened
    extends ProductItemInformationGetEvent {
  final String? item_id;

  ProdductItemInformationStatePageOpened({
    this.item_id,
  });
}

class CutomerEditErrorEvent extends ProductItemInformationGetEvent {
  final String? message;
  CutomerEditErrorEvent({this.message});
}
