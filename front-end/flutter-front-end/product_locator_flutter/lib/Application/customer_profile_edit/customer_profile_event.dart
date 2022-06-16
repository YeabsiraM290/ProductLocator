part of 'customer_profile_bloc.dart';

// import 'package:equatable/equatable.dart';
class CustomerProfileEditEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends CustomerProfileEditEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class CustomerEditPageOpened extends CustomerProfileEditEvent {
  final String username;
  final String phone;
  final String email;
  final String password;
  // final String profile_pic;
  CustomerEditPageOpened({
    required this.username,
    required this.email,
    required this.phone,
    required this.password,
    // required this.profile_pic
  });
}

class CutomerEditErrorEvent extends CustomerProfileEditEvent {
  final String? message;
  CutomerEditErrorEvent({this.message});
}
