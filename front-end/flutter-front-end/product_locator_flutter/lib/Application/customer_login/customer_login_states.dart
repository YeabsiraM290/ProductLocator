part of 'customer_login_bloc.dart';

class AuthState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class LoginInitState extends AuthState {}

class LoginLoadingState extends AuthState {}

class UserLoginSuccessState extends AuthState {
  // final Login loginlist;

  // UserLoginSuccessState(this.loginlist);
  // @override
  // List<Object> get props => [loginlist];
}

class AdmnLoginSuccessState extends AuthState {}

class LoginErrorState extends AuthState {
  final String message;
  LoginErrorState({required this.message});
}
