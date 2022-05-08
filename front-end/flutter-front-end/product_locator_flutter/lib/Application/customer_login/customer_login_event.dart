part of 'customer_login_bloc.dart';

// import 'package:equatable/equatable.dart';
class AuthEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends AuthEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class LoginButtonPressd extends AuthEvent {
  final String? email;
  final String? password;
  LoginButtonPressd({this.email, this.password});
}

class LoginErrorEvent extends AuthEvent {
  final String? message;
  LoginErrorEvent({this.message});
}
