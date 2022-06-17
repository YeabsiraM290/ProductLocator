part of 'customer_delete_bloc.dart';

// import 'package:equatable/equatable.dart';
class CustomerProfileDeleteEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends CustomerProfileDeleteEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class CustomerDeletePageOpened extends CustomerProfileDeleteEvent {
  // final String? username;
  // final String? phone;
  // final String? email;
  // final String? password;
  // CustomerDeletePageOpened(
  //     {this.username, this.email, this.phone, this.password});
}

class CutomerDeleteErrorEvent extends CustomerProfileDeleteEvent {
  final String? message;
  CutomerDeleteErrorEvent({this.message});
}
