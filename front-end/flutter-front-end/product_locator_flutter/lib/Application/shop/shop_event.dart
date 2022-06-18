part of 'shop_bloc.dart';

// import 'package:equatable/equatable.dart';
class ShopEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends ShopEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class ShopPageOpened extends ShopEvent {
  final String? id;
  // final String? password;
  ShopPageOpened(this.id);
}

class ShopErrorEvent extends ShopEvent {
  final String? message;
  ShopErrorEvent({this.message});
}
