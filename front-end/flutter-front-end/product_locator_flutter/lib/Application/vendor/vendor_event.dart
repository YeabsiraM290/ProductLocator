part of 'vendor_bloc.dart';

// import 'package:equatable/equatable.dart';
class VendorEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends VendorEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class VendorPageOpened extends VendorEvent {
  // final String? email;
  // final String? password;
  // LoginButtonPressd({this.email, this.password});
}

class VendorErrorEvent extends VendorEvent {
  final String? message;
  VendorErrorEvent({this.message});
}
