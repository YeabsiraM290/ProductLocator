part of 'profile_bloc.dart';

// import 'package:equatable/equatable.dart';
class ProfileEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends ProfileEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class ProfilePageOpened extends ProfileEvent {
  // final String? email;
  // final String? password;
  // LoginButtonPressd({this.email, this.password});
}

class LoginErrorEvent extends ProfileEvent {
  final String? message;
  LoginErrorEvent({this.message});
}
