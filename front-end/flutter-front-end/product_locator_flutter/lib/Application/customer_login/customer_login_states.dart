part of 'customer_login_bloc.dart';

class AuthState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class LoginInitState extends AuthState {}

class LoginLoadingState extends AuthState {}

class UserLoginSuccessState extends AuthState {}

class AdmnLoginSuccessState extends AuthState {}

class LoginErrorState extends AuthState {
  final String message;
  LoginErrorState({required this.message});
}
